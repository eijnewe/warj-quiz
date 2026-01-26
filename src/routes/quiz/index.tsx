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
import { CreateProfile } from '@/components/create-profile'

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

  const wolfId = isComplete ? getResult(answeredQuestions) : ''

  const router = useRouter()
  return (
    <main>
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 text-card-foreground border border-border p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
          <DialogPrimitive.Close aria-label="Close" asChild>
            <Button className="cursor-pointer text-2xl p-7">
              Starta Quizzet!
              <Pointer />
            </Button>
          </DialogPrimitive.Close>
          <Button
            variant={'default'}
            className="flex flex-row items-center text-xs cursor-pointer"
            onClick={() => router.history.back()}
          >
            <ArrowLeft />
            Tillbaka
          </Button>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
      <div className="flex justify-between p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/">
              <Button variant={'ghost'}>
                <ArrowLeft />
                Avbryt quiz
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Avsluta quiz</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'icon'}
              onClick={() => window.location.reload()}
            >
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Starta om quiz</p>
          </TooltipContent>
        </Tooltip>
      </div>
      {!isComplete && (
        <h2 className="font-semibold p-3">
          Fråga {currentQuestion} av {totalQuestions}
        </h2>
      )}

      {isComplete ?
        <div className="flex flex-col justify-center items-center m-2 *:m-2">
          <Button className="cursor-pointer text-xl p-6" asChild>
            <Link to="/quiz/results/$wolfId" params={{ wolfId }}>
              Se ditt resultat!
            </Link>
          </Button>
        </div>
      : <QuestionComponent onAnswer={handleAnswer} />}

      <Progress value={progressValue} className="w-[80%] mx-auto" />

      <CreateProfile />

      {/* <ButtonGroup>
        <Button>
          <ArrowLeft />
          Back
        </Button>
        <Button>
          <RotateCcw />
          Restart Quiz
        </Button>
        <Button>
          Next
          <ArrowRight />
        </Button>
      </ButtonGroup> */}
    </main>
  )
}
