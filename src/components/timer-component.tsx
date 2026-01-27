import { Button } from './ui/button';
import { Pause, Play } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export function TimerComponent({
    minutes,
    seconds,
    onStart,
    onPause,
    isRunning,
    isRow
}: {
    minutes: number;
    seconds: number;
    onStart: () => void;
    onPause: () => void;
    isRunning: boolean;
    isRow?: boolean
}) {
    return (
        <div className={`flex items-center w-fit ${isRow ? 'flex-row' : 'flex-col'}`}>
            <div className='text-xl w-13 font-bold mr-3 mt-1'>
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
            <div className='*:m-0.5 *:w-8 *:h-8 *:p-0.5 *:border-2 *:drop-shadow-sm/30 *:rounded-lg *:border-black'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={onStart} className={`${isRunning ? 'bg-amber-300 text-black hover:bg-amber-300' : 'hover:bg-amber-300 hover:text-black'} cursor-pointer`}
                        >
                            <Play />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Starta timern
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={onPause} className={`${isRunning ? 'hover:bg-amber-300 hover:text-black' : 'bg-amber-300 text-black hover:bg-amber-300 hover:text-black'} cursor-pointer`}>
                            <Pause />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Pausa timern
                    </TooltipContent>
                </Tooltip>
            </div>

        </div>
    );
}