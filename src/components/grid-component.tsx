import { useEffect, useState } from "react";
import { MemoryCard } from "@/components/memory-card-component";
import { memoryIcons } from "@/assets/data";

type Card = {
  id: number;
  icon: string;
};

interface GridComponentProps {
  onPointsChange: (newP: number) => void;
  onGameComplete: () => void;
}

export function GridComponent({ 
  onPointsChange, 
  onGameComplete, 
}: GridComponentProps) {
  const [cards] = useState<Card[]>(() => {
    const doubledIcons = [...memoryIcons, ...memoryIcons];
    return doubledIcons
      .map((icon, index) => ({
        id: index,
        icon,
      }))
      .sort(() => Math.random() - 0.5);
  });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [wrongCards, setWrongCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  
  
  useEffect(() => {
    setTimeout(() => {
      if (flippedCards.length === 2) {
        setIsChecking(true);

        const [firstIndex, secondIndex] = flippedCards;
        const firstCard = cards[firstIndex];
        const secondCard = cards[secondIndex];
        
        if (firstCard.icon === secondCard.icon) {
          setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
          setFlippedCards([]);
          setIsChecking(false);
          onPointsChange(5);
          console.log('match')
          console.log(matchedCards)
          console.log(flippedCards)
        } else {
          setWrongCards([firstIndex, secondIndex]);
          setTimeout(() => {
            setWrongCards([]);
            setFlippedCards([]);
            setIsChecking(false);
            onPointsChange(-1)
            console.log('not a match')
          }, 700);
        }
      }
    }, 600);
  }, [flippedCards, cards, onPointsChange]);
  
  const handleCardClick = (index: number) => {
    if (
      matchedCards.includes(index) ||
      flippedCards.includes(index) ||
      isChecking ||
      flippedCards.length >= 2
    ) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      onGameComplete();
    }
  }, [matchedCards, cards.length, onGameComplete]);
  
  return (
    <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-4">
      <div className="grid grid-cols-4 gap-4 sm:gap-4 md:gap-5 max-w-lg sm:max-w-2xl w-full justify-items-center">
        {cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            icon={card.icon}
            isFlipped={
              flippedCards.includes(index) || matchedCards.includes(index)
            }
            isMatched={matchedCards.includes(index)}
            isWrong={wrongCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
