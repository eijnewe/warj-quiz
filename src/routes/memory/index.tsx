import { useState } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { GridComponent } from '@/components/grid-component'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pointer, RotateCcw } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { TimerComponent } from '@/components/timer-component'
import { useStopwatch } from 'react-timer-hook'
import { SettingsDialog } from '@/components/settings-component'
import { ConfirmationPopup } from '@/components/confirmation-popup'
import { DifficultyBar } from '@/components/difficulty-bar'
import { CreateProfile } from '@/components/create-profile'
import { ProfileSelector } from '@/components/profile-selector'
import { DisplayProfile } from '@/components/display-profile'

export const Route = createFileRoute('/memory/')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  // stopwatch stuff
  const { seconds, minutes, pause, start, isRunning } = useStopwatch({
    autoStart: false,
  })

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

    const prev = JSON.parse(localStorage.getItem('memoryResults') ?? '[]')

    localStorage.setItem('memoryResults', JSON.stringify([...prev, newResult]))
  }

  // topplista (topp 5)
  const topResults: {
    score: number
    time: number
    date: string
  }[] = JSON.parse(localStorage.getItem('memoryResults') ?? '[]')
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60

    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <main>
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
          <DialogPrimitive.Close aria-label="Close">
            <Button className="cursor-pointer text-2xl p-7" onClick={start}>
              Starta Memoryspel!
              <Pointer />
            </Button>
          </DialogPrimitive.Close>
          <div className="flex flex-row items-start">
            <Button
              variant={'default'}
              className=" m-1 h-8 p-0.5 text-xs cursor-pointer"
              onClick={() => router.history.back()}
            >
              <ArrowLeft />
              Tillbaka
            </Button>
            <SettingsDialog onStart={start} onPause={pause} isMainMenu />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
      <div className="flex justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            {/* <Link to="/">
              <Button variant={'ghost'}>
                <ArrowLeft />
                Avsluta spelet
              </Button>
            </Link> */}
            <DialogPrimitive.Root>
              <DialogPrimitive.Trigger>
                <Button
                  className="cursor-pointer"
                  variant={'ghost'}
                  onClick={pause}
                >
                  <ArrowLeft />
                  Avsluta spelet
                </Button>
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
              <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                <ConfirmationPopup linkTo="/" isExitNext onStart={start} />
              </DialogPrimitive.Content>
            </DialogPrimitive.Root>
          </TooltipTrigger>
          <TooltipContent>
            <p>Avsluta spel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'icon'}
              onClick={() => globalThis.location.reload()}
            >
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Starta om spel</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col *:items-start">
        <div className="flex flex-row justify-between">
          <SettingsDialog onStart={start} onPause={pause} />
          <DifficultyBar />
          <TimerComponent
            minutes={minutes}
            seconds={seconds}
            onStart={start}
            onPause={pause}
            isRunning={isRunning}
          />
        </div>
        <GridComponent />
        <div className='flex'>
        <DisplayProfile />
        <DisplayProfile />
        </div>
        {/*  <ProfileSelector /> */}
        <Button onClick={finishGame} className="w-fit self-">
          Visa resultat
        </Button>

        {/* Resultat */}
        {result && (
          <div className="mt-4 border p-3 rounded-lg text-right">
            <p>
              <span className="font-bold">Poäng:</span> {result.score}
            </p>
            <p>
              <span className="font-bold">Tid:</span>{' '}
              {formatTime(result.time)}{' '}
            </p>
            <p>
              <span className="font-bold"> Datum:</span>{' '}
              {new Date(result.date).toLocaleString('sv-SE', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        )}

        {/* Topplista */}
        <h2 className="mt-6 font-bold">Topplista</h2>

        {topResults.length === 0 ?
          <p className="text-sm">Inga resultat ännu</p>
        : <ol>
            {topResults.map((r, i) => (
              <li key={i}>
                {r.score} p · {r.time}s
              </li>
            ))}
          </ol>
        }
      </div>
    </main>
  )
}
