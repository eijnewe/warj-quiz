import { useState, useEffect } from "react"
import { MemoryCard } from "@/components/memory-card-component"
import { memoryIcons } from "@/assets/data"
import { MemoryIcons1 } from "@/assets/data"
import { Card } from "@/components/memory-card-component"

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

  function NewGame() {
    setTimeout(() => {
      const randomOrder = MemoryIcons1.sort(() => 0.5 - Math.random())
      setCardsArray(randomOrder)
      setMoves(0)
      setFirstCard(null)
      setSecondCard(null)
      setWon(0)
    }, 1200)
  }

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
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true }
            } else { 
              return unit 
            }
          })
        })
        setWon((preVal) => preVal + 1)
        removeSelection()
      } else {
        setTimeout(() => {
          removeSelection()
        }, 1000)
      }
    }
  }, [firstCard, secondCard])

  function removeSelection() {
    setFirstCard(null)
    setSecondCard(null)
    setStopFlip(false)
    setMoves((prevValue) => prevValue + 1)
  }

  useEffect(() => {
    NewGame();
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      <div className="board">
        {
          cardsArray.map((item) => (
            <Card
            item={item}
            key={item.id}
            handleSelectedCards={handleSelectedCards}
            toggled={
              item === firstCard ||
              item === secondCard ||
              item.matched === true
            }
            stopFlip={stopFlip}
            />
          ))
        }
      </div>

      {won !== 6 ? (
        <div className="comments">Moves : {moves}</div>
      ) : (
        <div className="comments">
          ???????? Du vann på {moves} försök ????????
        </div>
      )}
      <button className="button" onClick={NewGame}>
        Spela igen
        </button>
    </div>
    
  )

}