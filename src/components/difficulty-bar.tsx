import { Dice1, Dice3, Dice6 } from "lucide-react";
import type React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";

type Difficulty = {
  grade: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const difficultyLevels: Difficulty[] = [
  {
    grade: "Lätt",
    icon: Dice1,
  },
  {
    grade: "Medel",
    icon: Dice3,
  },
  {
    grade: "Svår",
    icon: Dice6,
  }
]

export function DifficultyBar() {
  // const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const selectedDifficulty = "Medel"; //placeholder selection

  return (<div className="flex flex-row w-fit p-0.5 rounded-lg">
    {difficultyLevels.map((difficulty, index) => (
      <Tooltip key={index} >
        <TooltipTrigger asChild>
          <div>
            < difficulty.icon className={`bg-amber-100 drop-shadow-sm/50 m-1 w-8 h-8 p-0.5 rounded-lg ${difficulty.grade === selectedDifficulty
              ? "border-2 border-black text-black drop-shadow-sm/50 bg-amber-300"
              : "border-none text-gray-400"
              }`}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {difficulty.grade}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
  )
} 