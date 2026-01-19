import { useState } from 'react'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { GridComponent } from '@/components/grid-component'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pointer, RotateCcw } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Dialog as DialogPrimitive } from "radix-ui"
import { TimerComponent } from '@/components/timer-component'
import { useStopwatch } from 'react-timer-hook'


export const Route = createFileRoute('/memory/')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter();

  // stopwatch stuff
  const {
    seconds,
    minutes,
    pause,
    start,
    isRunning,
  } = useStopwatch({ autoStart: false });


  // state för resultat
  const [result, setResult] = useState<{
    score: number
    time: number
    date: string
  } | null>(null)

  // funktion för att avsluta spelet och spara resultat
  const finishGame = () => {
    const newResult = {
      score: 120,
      time: 85,
      date: new Date().toISOString(),
    }

    setResult(newResult)

    const prev =
      JSON.parse(localStorage.getItem('memoryResults') ?? '[]')

    localStorage.setItem(
      'memoryResults',
      JSON.stringify([...prev, newResult])
    )
  }

      // topplista (topp 5)
  const topResults: {
    score: number
    time: number
    date: string
  }[] = JSON.parse(localStorage.getItem('memoryResults') ?? '[]')
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  return (
    <main>
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
          <DialogPrimitive.Close aria-label="Close">
            <Button className='cursor-pointer text-2xl p-7' onClick={start}>
              Starta Memoryspel!
              <Pointer />
            </Button>
          </DialogPrimitive.Close>
          <Button variant={'default'} className='flex flex-row items-center text-xs cursor-pointer' onClick={() => router.history.back()}>
            <ArrowLeft />
            Tillbaka
          </Button>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
      <div className="flex justify-between">
        {/* <Button onClick={finishGame}>
          Avsluta spel (test)
        </Button> */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/">
              <Button variant={'ghost'}>
                <ArrowLeft />
                Avsluta spelet
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Avsluta spel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} size={'icon'} onClick={() => globalThis.location.reload()}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Starta om spel</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className='flex flex-col items-center'>
        <TimerComponent  minutes={minutes} seconds={seconds} onStart={start} onPause={pause} isRunning={isRunning}/>
        {result && (
  <div className="mt-4 border p-3 rounded-lg text-right">
    <p>Poäng: {result.score}</p>
    <p>Tid: {result.time} sek</p>
    <p>Datum: {new Date(result.date).toLocaleString()}</p>
  </div>
)}
        <GridComponent />
        <Button className="mt-4" onClick={finishGame}>
  Avsluta spel
</Button>
      </div>
      
    </main>
  )
}
