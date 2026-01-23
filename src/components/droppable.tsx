import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

interface DroppableProps {
  id: string;
  children: ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = { opacity: isOver ? 1 : 1 };

  return (
    <div ref={setNodeRef} style={style} className='bg-amber-400 w-55 aspect-3/2 items-center flex justify-center rounded-xl drop-shadow-sm/50'>
      {children}
    </div>
  );
}