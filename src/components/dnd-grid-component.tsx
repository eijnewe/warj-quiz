
import { useDraggable, useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';


interface DroppableProps {
  id: string;
  children: ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = { opacity: isOver ? 1 : 0.5 };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

interface DraggableProps {
  id: string;
  children: ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style: React.CSSProperties = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}
