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
        <div className='flex flex-col items-center w-fit m-2'>
            <p className='text-xl'>
                <b>
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </b>
            </p>
            <div className='*:m-0.5 *:w-7 *:h-7'>
                <Button onClick={onStart} className={`${isRunning ? 'bg-amber-400' : ''} cursor-pointer`}
                >
                    <Play />
                </Button>
                <Button onClick={onPause} className={`${isRunning ? '' : 'bg-amber-400'} cursor-pointer`}>
                    <Pause />
                </Button>
            </div>
        </div>
    );
}