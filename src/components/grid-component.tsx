import { useEffect, useState } from "react";
import { MemoryCard } from "@/components/memory-card-component";
import { MemoryCardsFullList } from "@/assets/data";

type Card = { id: number; icon: string };

interface GridComponentProps {
  onPointsChange: (newP: number) => void;
  onGameComplete: () => void;
  totalSeconds: number;
}

export function GridComponent({ onPointsChange, onGameComplete, totalSeconds }: GridComponentProps) {
  const [difficulty, setDifficulty] = useState<'lätt' | 'medel' | 'svår'>("medel");

  function chooseDifficulty(d: 'lätt' | 'medel' | 'svår') {
    setDifficulty(d)
    generateCards(d)
    console.log(d);
  }

  const generateCards = (difficulty: 'lätt' | 'medel' | 'svår'): Card[] => {
    const doubledIcons = [...MemoryCardsFullList, ...MemoryCardsFullList];

    let numUniqueCards: number;
    switch (difficulty) {
      case "lätt":
        numUniqueCards = 4;
        break;
      case "medel":
        numUniqueCards = 8;
        break;
      case "svår":
        numUniqueCards = 16;
        break;
      default:
        numUniqueCards = 8;
    }
    const uniqueIcons = doubledIcons.slice(0, numUniqueCards);
    const selectedCards = [...uniqueIcons, ...uniqueIcons]
      .map((icon, index) => ({ id: index, icon }))
      .sort(() => Math.random() - 0.5);

    return selectedCards
  };



  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [wrongCards, setWrongCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  useEffect(() => {
    setCards(generateCards(difficulty));
  }, [difficulty]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isGameComplete || flippedCards.length !== 2) return;

      setIsChecking(true);
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.icon === secondCard.icon) {
        setMatchedCards((prev) => {
          const newMatched = [...prev, firstIndex, secondIndex];
          const finished = newMatched.length === cards.length;

          if (finished && !isGameComplete) {
            setIsGameComplete(true);
            setTimeout(() => onGameComplete(totalSeconds), 300);
          }

          return newMatched;
        });

        setFlippedCards([]);
        setIsChecking(false);
        onPointsChange(5);
      } else {
        setWrongCards([firstIndex, secondIndex]);
        setTimeout(() => {
          setWrongCards([]);
          setFlippedCards([]);
          setIsChecking(false);
          onPointsChange(-1)
        }, 700);
      }
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [flippedCards, cards.length, onPointsChange, onGameComplete, isGameComplete, cards]);

  const handleCardClick = (index: number) => {
    if (
      isGameComplete ||
      matchedCards.includes(index) ||
      flippedCards.includes(index) ||
      isChecking ||
      flippedCards.length >= 2
    ) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]);
  };

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-4">
      <div className="grid grid-cols-4 gap-4 sm:gap-4 md:gap-5 max-w-lg sm:max-w-2xl w-full justify-items-center">
        {cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            icon={card.icon}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            isMatched={matchedCards.includes(index)}
            isWrong={wrongCards.includes(index)}
            isGameComplete={isGameComplete}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
