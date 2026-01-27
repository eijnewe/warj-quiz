import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pointer, RotateCcw } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { questions } from '@/assets/data'
import { QuestionComponent } from '@/components/question-component'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { getResult } from '@/lib/quiz-utils'
import { useStopwatch } from 'react-timer-hook'
import { ConfirmationPopup } from '@/components/confirmation-popup'
import { CreateProfile } from '@/components/create-profile'
import { DisplayProfile } from '@/components/display-profile'
import { ProfileSelector } from '@/components/profile-selector'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export const Route = createFileRoute('/quiz/')({
  component: RouteComponent,
})

function RouteComponent() {
  const totalQuestions = questions.length
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([])

  const answeredCount = answeredQuestions.length
  const currentQuestion = Math.min(answeredCount + 1, totalQuestions)
  const progressValue = (answeredCount / totalQuestions) * 100
  const isComplete = answeredCount === totalQuestions

  function handleAnswer(answerKey: string) {
    setAnsweredQuestions((prev) => [...prev, answerKey])
  }
  const { start } = useStopwatch({
    autoStart: false,
  })

  const wolfId = isComplete ? getResult(answeredQuestions) : ''

  const router = useRouter()
  return (
    <main className='p-4 h-[80vh] flex flex-col'>
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
          <DialogPrimitive.Close aria-label="Close" asChild>
            <Button className="text-2xl p-7">
              Starta Quizzet!
              <Pointer />
            </Button>
          </DialogPrimitive.Close>
          <Button
            variant={'default'}
            className="flex flex-row items-center text-xs"
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
              <DialogPrimitive.Trigger asChild>
                <Button variant={'ghost'} size={'icon'}>
                  <ArrowLeft />
                </Button>
              </DialogPrimitive.Trigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Avsluta quiz</p>
            </TooltipContent>
          </Tooltip>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-3 rounded-lg shadow-lg z-60 flex flex-col items-center *:m-2 border-2 text-sm sm:w-[60vw] w-[80%]">
            <ConfirmationPopup linkTo="/" onStart={start} />
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
              <p>Starta om quiz</p>
            </TooltipContent>
          </Tooltip>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border-border p-3 rounded-lg shadow-lg z-60 flex flex-col items-center *:m-2 border-2 text-sm sm:w-[60vw] w-[80%]">
            <ConfirmationPopup restartGameMem onStart={start} />
          </DialogPrimitive.Content>
        </DialogPrimitive.Root>

      </div>
      {!isComplete && (
        <h2 className="font-semibold p-3 text-shadow-white text-shadow-lg/50 dark:text-shadow-4xl/80 dark:text-shadow-amber-900 tracking-wide">
          Fråga {currentQuestion} av {totalQuestions}
        </h2>
      )}

      {isComplete ?
        <div className="flex flex-col justify-center items-center m-2 *:m-2">
          <Button className="text-xl p-6" asChild>
            <Link to="/quiz/results/$wolfId" params={{ wolfId }}>
              Se ditt resultat!
            </Link>
          </Button>
        </div>
        : <QuestionComponent onAnswer={handleAnswer} />}

      <Progress value={progressValue} className="w-[80%] mx-auto mt-auto" />

       <CreateProfile /> 
       <DisplayProfile/>
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
     <ProfileSelector/>
      </DropdownMenuContent>
        </DropdownMenu>
    </main>
  )
}
