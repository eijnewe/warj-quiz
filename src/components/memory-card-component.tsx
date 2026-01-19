import { useState } from "react"
import type { MemoryIcons } from "@/assets/data";

export interface MemoryCardProps {
    icon: string
}

export const MemoryCard = ({ icon }: MemoryCardProps) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
        onClick={() => setFlipped(!flipped)}
        className={`bg-amber-200 rounded-md p-1 max-w-[100px] max-h-[100px] min-w-[60px] min-h-[60px] flex items-center justify-center ${flipped ? "rotate-y-180 cursor-not-allowed" : "hover:bg-amber-300 transition-colors duration-300 cursor-pointer"}`}
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
export interface CardProps {
    item: MemoryIcons
    handleSelectedCards: (item: MemoryIcons) => void
    toggled: boolean
    stopFlip: boolean
}

export function Card({ 
    item, 
    handleSelectedCards, 
    toggled, 
    stopFlip,
 }: CardProps) {
    return (
        <div className="item">
            <div className={toggled ? "toggled" : ""}>
                <img className="front" src={item.img} alt="front"/>
                <div 
                className="back" 
                onClick={() => !stopFlip && handleSelectedCards(item)}
                >
                    {" "}
                </div>
            </div>
        </div>
    )
}