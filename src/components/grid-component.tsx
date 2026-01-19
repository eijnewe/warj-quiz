import { useState, useEffect } from "react"
import { MemoryCard } from "@/components/memory-card-component"
import { memoryIcons } from "@/assets/data"
import { MemoryIcons1 } from "@/assets/data"
import { Card } from "@/components/memory-card-component"
import type { MemoryIconsProps } from "@/assets/data"

export function GridComponent() {
  const [shuffledIcons] = useState(() => {
    const doubledIcons = [...memoryIcons, ...memoryIcons]
    return doubledIcons.sort(() => Math.random() - 0.5)
  })
  
  return (
    <main className='flex items-center justify-center p-4'>
      <div className='grid grid-cols-4 gap-4 max-w-2xl'>
        {shuffledIcons.map((icon, index) => (
          <MemoryCard key={index} icon={icon}/>
        ))}
      </div>
    </main>
  )
}

export function GridComponent1() {
  const [cardsArray, setCardsArray] = useState([])
  const [moves, setMoves] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [stopFlip, setStopFlip] = useState(false)
  const [won, setWon] = useState(0);

  function handleSelectedCards(item) {
    console.log(typeof item);
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item)
    } else {
      setFirstCard(item)
    }
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true)
      if (firstCard.name ===)
    }
  })
}