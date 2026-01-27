import { PointBar } from '@/components/point-counter-component';
import { TimerComponent } from '@/components/timer-component'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useStopwatch } from 'react-timer-hook';
import { ConfirmationPopup } from '@/components/confirmation-popup'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Dialog as DialogPrimitive } from "radix-ui"
import { Button } from '@/components/ui/button'
import { ArrowLeft, CircleQuestionMark, Pointer, RotateCcw, Settings, X } from 'lucide-react'
import { DndGrid } from '@/components/dnd-grid-component';
import { SettingsDialog } from '@/components/settings-component';

export const Route = createFileRoute('/dnd/')({
    component: RouteComponent,
})

function RouteComponent({
    onStart,
    onPause,
    isMainMenu,
}: {
    onStart: () => void;
    onPause: () => void;
    isMainMenu?: boolean
}) {
    const router = useRouter()
    const { seconds, minutes, pause, start, isRunning } = useStopwatch({ autoStart: false });

    return <main className='p-4'>
        <DialogPrimitive.Root defaultOpen={true}>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
            <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                <DialogPrimitive.Close aria-label="Close" asChild>
                    <Button className="cursor-pointer text-2xl p-7" onClick={start}>
                        Spela Matcha Varg!
                        <Pointer />
                    </Button>
                </DialogPrimitive.Close>
                <Button
                    variant={'default'}
                    className=" m-1 h-8 p-0.5 text-xs cursor-pointer"
                    onClick={() => router.history.back()}
                >
                    <ArrowLeft />
                    Tillbaka
                </Button>
            </DialogPrimitive.Content>
        </DialogPrimitive.Root>
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
                <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                    <ConfirmationPopup linkTo='/' leaveGameMem onStart={start} />
                </DialogPrimitive.Content>
            </DialogPrimitive.Root>

            <DialogPrimitive.Root>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogPrimitive.Trigger asChild>
                            <Button variant={"ghost"} size={"icon"}>
                                <RotateCcw />
                            </Button>
                        </DialogPrimitive.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Starta om spel</p>
                    </TooltipContent>
                </Tooltip>
                <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
                <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
                    <ConfirmationPopup restartGameMem onStart={start} />
                </DialogPrimitive.Content>
            </DialogPrimitive.Root>
        </div>

        <div className='flex justify-between'>
            <DialogPrimitive.Root>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogPrimitive.Trigger asChild>
                            <Button className="cursor-pointer m-1 w-8 h-8 p-0.5  hover:bg-amber-300 hover:text-black border-2 drop-shadow-sm/30 rounded-lg border-black">
                                <CircleQuestionMark />
                            </Button>
                        </DialogPrimitive.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        Hjälp
                    </TooltipContent>
                </Tooltip>
                <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
                <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-6 rounded-lg shadow-lg z-60 flex flex-col items-center *:m-2 border-2 text-sm sm:w-[80vw]">
                    <DialogPrimitive.Close aria-label="Close" className="self-end">
                        <Button className="cursor-pointer w-7 h-7" onClick={isMainMenu ? onPause : onStart}
                        >
                            <X />
                        </Button>
                    </DialogPrimitive.Close>
                    <h1 className='text-2xl'>Matcha Varg</h1>

                    <b>Här gäller det att hitta par!</b>
                    <ul className='list-disc *:m-2'>
                        <li><b>Dra en varg</b> (eller dess kompanjon) till en gul ruta.</li>
                        <li>Hitta <b>en match för bilden</b> i den gula rutan och dra den dit. <p className='text-xs'>Obs! En bild kan inte placeras med fel match i rutan.</p></li>
                        <li>Matcha alla vargar så snabbt som möjligt för att vinna!</li>
                    </ul>
                </DialogPrimitive.Content>
            </DialogPrimitive.Root>
            <PointBar />
            <TimerComponent minutes={minutes} seconds={seconds} onStart={start} onPause={pause} isRunning={isRunning} isRow />
        </div>
        <DndGrid />
    </main>
}
