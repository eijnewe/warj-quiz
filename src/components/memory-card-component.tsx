import { useState } from "react"

export interface MemoryCardProps {
    icon: string
}

export const MemoryCard = ({ icon }: MemoryCardProps) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
        onClick={() => setFlipped(!flipped)}
        className={`bg-amber-200 rounded-md p-1 max-w-[100px] max-h-[100px] min-w-[60px] min-h-[60px] flex items-center justify-center cursor-pointer ${flipped ? "rotate-y-180" : ""}`}
        >
        {flipped ? (
            <img src={icon} alt="Memory Card" width={80} height={80} />
        ) : (
            <span>
                <img src="/src/assets/question-icon.png" alt="Memory Card" width={80} height={80} className="p-2" />
            </span>
        )
    }
        </div>
    )
}
