import { useState } from "react"
import { MemoryCard } from "@/components/memory-card-component"
import { memoryIcons } from "@/assets/data"

export default function GridComponent() {
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