import { useDraggable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

interface DraggableProps {
    id: string;
    children: ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style: React.CSSProperties = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            position: 'relative',
            zIndex: 10,
        }
        : {
            position: 'relative',
            zIndex: 10,
        };

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