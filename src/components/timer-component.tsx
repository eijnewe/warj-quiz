import { Button } from './ui/button';
import { Pause, Play } from 'lucide-react';

export function TimerComponent({
    minutes,
    seconds,
    onStart,
    onPause,
    isRunning
}: {
    minutes: number;
    seconds: number;
    onStart: () => void;
    onPause: () => void;
    isRunning: boolean;
}) {
    return (
        <div className='flex flex-col items-center w-fit'>
            <div className='*:m-1 *:w-8 *:h-8 *:p-0.5 *:border-2 *:drop-shadow-sm/30 *:rounded-lg *:border-black'>
                <Button onClick={onStart} className={`${isRunning ? 'bg-amber-300 text-black hover:text-white' : ''} cursor-pointer`}
                >
                    <Play />
                </Button>
                <Button onClick={onPause} className={`${isRunning ? '' : 'bg-amber-300 text-black hover:text-white'} cursor-pointer`}>
                    <Pause />
                </Button>
            </div>
            <p className='text-xl'>
                <b>
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </b>
            </p>
        </div>
    );
}