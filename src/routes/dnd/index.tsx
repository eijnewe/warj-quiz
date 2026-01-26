import { PointBar } from '@/components/point-counter-component';
import { TimerComponent } from '@/components/timer-component'
import { createFileRoute } from '@tanstack/react-router'
import { useStopwatch } from 'react-timer-hook';
import { ConfirmationPopup } from '@/components/confirmation-popup'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Dialog as DialogPrimitive } from "radix-ui"
import { Button } from '@/components/ui/button'
import { ArrowLeft, RotateCcw, Settings } from 'lucide-react'
import { DndGrid } from '@/components/dnd-grid-component';


export const Route = createFileRoute('/dnd/')({
    component: RouteComponent,
})



function RouteComponent() {
    const { seconds, minutes, pause, start, isRunning } = useStopwatch({ autoStart: false });

    return <div>
        <div className="flex justify-between">
            <DialogPrimitive.Root>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogPrimitive.Trigger>
                            <Button className="cursor-pointer" variant={'ghost'} onClick={pause}>
                                <ArrowLeft />
                            </Button>
                        </DialogPrimitive.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Avsluta spel</p>
                    </TooltipContent>
                </Tooltip>
                <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
                <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                    <ConfirmationPopup linkTo='/' leaveGameMem onStart={start} />
                </DialogPrimitive.Content>
            </DialogPrimitive.Root>

            <DialogPrimitive.Root>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogPrimitive.Trigger>
                            <Button variant={"ghost"} size={"icon"}>
                                <RotateCcw />
                            </Button>
                        </DialogPrimitive.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Starta om spel</p>
                    </TooltipContent>
                </Tooltip>
                <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
                <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                    <ConfirmationPopup restartGameMem onStart={start} />
                </DialogPrimitive.Content>
            </DialogPrimitive.Root>
        </div>

        <div className='flex justify-between'>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="cursor-pointer m-1 w-8 h-8 p-0.5  hover:bg-amber-300 hover:text-black border-2 drop-shadow-sm/30 rounded-lg border-black">
                        <Settings />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Inställningar
                </TooltipContent>
            </Tooltip>
            <PointBar />
            <TimerComponent minutes={minutes} seconds={seconds} onStart={start} onPause={pause} isRunning={isRunning} />
        </div>
        <DndGrid />
    </div>
}
