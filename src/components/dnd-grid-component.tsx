import { DndContext, type DragEndEvent, type UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import { MatchArray } from '@/assets/data';

export function DndGrid() {
  const [items] = useState(() => {
    return [...MatchArray].sort(() => Math.random() - 0.5);
  });

  const [parents, setParents] = useState<Record<string, UniqueIdentifier | null>>(() => {
    const map: Record<string, UniqueIdentifier | null> = {};
    items.forEach(item => {
      map[item.id] = null;
    });
    return map;
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      setParents(prev => ({
        ...prev,
        [active.id]: null,
      }));
      return;
    }

    const slotId = over.id;

    const currentItemsInSlot = Object.entries(parents)
      .filter(([dragId, parentId]) => parentId === slotId)
      .map(([dragId]) => dragId);

    if (currentItemsInSlot.length === 0) {
      setParents(prev => ({
        ...prev,
        [active.id]: slotId,
      }));
      return;
    }

    if (currentItemsInSlot.length >= 2) {
      setParents(prev => ({
        ...prev,
        [active.id]: null,
      }));
      return;
    }

    const firstItemNumber = currentItemsInSlot[0].split('-')[0];
    const activeNumber = active.id.split('-')[0];

    if (activeNumber === firstItemNumber) {
      setParents(prev => ({
        ...prev,
        [active.id]: slotId,
      }));
      return;
    }

    setParents(prev => ({
      ...prev,
      [active.id]: null,
    }));
  }

  const droppableSlots = ['1', '2', '3', '4', '5', '6'];

  return (
    <div className='flex flex-col'>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='grid grid-cols-6 gap-2 justify-items-center'>
          {items.filter(item => parents[item.id] === null).map(item => (
            <Draggable key={item.id} id={item.id}>
              <img src={item.src} alt={item.id} className='h-30 w-30 ratio-square rounded-lg drop-shadow-sm/40 z-10' />
            </Draggable>
          ))}
        </div>

        <div className='grid grid-cols-3 *:m-2 justify-items-center'>
          {droppableSlots.map(slotId => (
            <Droppable key={slotId} id={slotId}>
              {Object.entries(parents)
                .filter(([dragId, parentId]) => parentId === slotId)
                .map(([dragId]) => {
                  const item = items.find(d => d.id === dragId)!;
                  return (
                    <Draggable key={dragId} id={dragId}>
                      <img src={item.src} alt={item.id} className='h-25 w-25 rounded-lg drop-shadow-sm/30 m-1 z-10' />
                    </Draggable>
                  );
                })}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
