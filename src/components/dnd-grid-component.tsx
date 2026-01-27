import { DndContext, type DragEndEvent, type UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import { MatchArray } from '@/assets/data';
import { ArrowDown } from 'lucide-react';

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
    <div className='flex flex-col mt-2 h-full'>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='grid grid-cols-4 sm:grid-cols-6 grid-rows-3 sm:grid-rows-2 gap-2 justify-items-center'>
          {items.filter(item => parents[item.id] === null).map(item => (
            <Draggable key={item.id} id={item.id}>
              <img 
              src={item.src} 
              alt={item.id} 
              className='w-full h-full object-cover aspect-square rounded-lg drop-shadow-sm/40 z-10'
               />
            </Draggable>
          ))}
        </div>
        <span className='text-sm flex items-center justify-center pt-1 text-gray-500 dark:text-gray-200'>
          Para ihop vargarna i rutorna nedan!
          <ArrowDown className='h-3' />
        </span>
        <div className='grid grid-cols-3 gap-1.5 sm:gap-3 justify-center justify-items-center mt-2'>
          {droppableSlots.map(slotId => (
            <Droppable key={slotId} id={slotId}>
              {Object.entries(parents)
                .filter(([dragId, parentId]) => parentId === slotId)
                .map(([dragId]) => {
                  const item = items.find(d => d.id === dragId)!;
                  return (
                    <Draggable key={dragId} id={dragId}>
                      <img 
                      src={item.src} 
                      alt={item.id} 
                      className='h-14 sm:w-30 sm:h-30 aspect-square rounded-lg drop-shadow-sm/40 z-10 m-2' 
                      />
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
