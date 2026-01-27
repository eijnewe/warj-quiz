import { useState, useCallback } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { GridComponent } from "@/components/grid-component";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pointer, RotateCcw } from "lucide-react";
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
import { PointBar } from '@/components/point-counter-component'
import { DisplayProfile } from '@/components/display-profile'
import { saveMemoryResult, getMemoryHistory } from "@/lib/storage";

export const Route = createFileRoute('/memory/')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  // point counter
  const [points, setPoints] = useState(0);
  const handlePointsChange = (newP: number) => {
    setPoints((prevP) => prevP + newP);
  };

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
  const finishGame = useCallback(() => {
    if (result) return;

    pause();

    const totalSeconds = minutes * 60 + seconds;

    const newResult = {
      score: points,
      time: totalSeconds,
      date: new Date().toISOString(),
    }

    setResult(newResult)

    saveMemoryResult({
      points,
      time: totalSeconds,
      difficulty: "medium",
      date: Date.now(),
    });
  }, [minutes, seconds, points, pause, result]);

  // topplista (topp 5)
  const topResults = getMemoryHistory()
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60

    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <main className="p-4">
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
          <DialogPrimitive.Close aria-label="Close" asChild>
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
        <DialogPrimitive.Root>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogPrimitive.Trigger asChild>
                <Button
                  className="cursor-pointer"
                  variant={'ghost'}
                  onClick={pause}
                >
                  <ArrowLeft />
                </Button>
              </DialogPrimitive.Trigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Avsluta spel</p>
            </TooltipContent>
          </Tooltip>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg dark-bg-amber-500 z-60 flex flex-col text-center items-center bg-card text-card-foreground border-2">
            <ConfirmationPopup linkTo="/" leaveGameMem onStart={start} />
          </DialogPrimitive.Content>
        </DialogPrimitive.Root>

        <DialogPrimitive.Root>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogPrimitive.Trigger asChild>
                <Button variant={'ghost'} size={'icon'}>
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

      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-between">
          <SettingsDialog onStart={start} onPause={pause} />
          <DifficultyBar />
          <PointBar points={points} />
          <div className="ml-auto sm:ml-0">
            <TimerComponent
              minutes={minutes}
              seconds={seconds}
              onStart={start}
              onPause={pause}
              isRunning={isRunning}
              isRow
            />
          </div>
        </div>
        <GridComponent
          onPointsChange={handlePointsChange}
          onGameComplete={finishGame}
        />
        {/* Resultat */}
        {result && (
          <div className="mt-4 justify-items-center">
            <h2>
              <span className="font-bold">Resultat:</span>
            </h2>
            <p>
              <span className="font-bold">Poäng:</span> {result.score}
            </p>
            <p>
              <span className="font-bold">Tid:</span>{" "}
              {formatTime(result.time)}{" "}
            </p>
            <p>
              <span className="font-bold"> Datum:</span>{" "}
              {new Date(result.date).toLocaleString("sv-SE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}

        <div className="mt-4 justify-items-center">
          <h2 className="font-bold">Topplista</h2>
          {topResults.length === 0 ? (
            <p className="text-sm">Inga resultat ännu</p>
          ) : (
            <ol className="list-decimal pl-4 space-y-1">
              {topResults.map((r, i) => (
                <li key={i}>
                  {r.points} p · {r.time}s
                </li>
              ))}
            </ol>
          )}
        </div>

      </div>
    </main>
  );
}
