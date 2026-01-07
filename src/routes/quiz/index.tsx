import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { QuestionComponent } from '@/components/question-component'
import { Dialog as DialogPrimitive } from "radix-ui"
export const Route = createFileRoute('/quiz/')({
  component: RouteComponent,
})

function RouteComponent() {
  //TODO: replace mock data with real data and setcurrentquestion
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = 10
  const progressValue = (currentQuestion / totalQuestions) * 100
  return (
    <main>
      <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/90 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2 w-[50vw]">
          <DialogPrimitive.Close aria-label="Close">
            <Button variant={'outline'} className='cursor-pointer'>
              Starta Quizzet!
            </Button>
          </DialogPrimitive.Close>
          <Button variant={'default'} className='cursor-pointer'>
            <Link to="/">Tillbaka</Link>
            </Button>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
      <div className="flex justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'}>
              <ArrowLeft />
              Tillbaka
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tidigare fråga</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Starta om quiz</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <h2 className="font-semibold">Fråga {currentQuestion}</h2>
      <QuestionComponent />
      <Progress value={progressValue} />
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
