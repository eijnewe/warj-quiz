import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PointBarProps {
  points: number;
}

export function PointBar({ points }: PointBarProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="m-1 h-8 pr-2 w-29 pl-2 p-0.5 border-2 drop-shadow-sm/30 bg-amber-300 rounded-lg border-black flex justify-between items-center *: dark:text-black">
          <span className="font-bold mr-1">Poäng:</span>
          <span>{points}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>Dina poäng</TooltipContent>
    </Tooltip>
  );
}
