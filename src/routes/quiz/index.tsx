import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
      <div className="flex justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'}>
              <ArrowLeft />
              Back
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Previous question</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Restart quiz</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <h2 className="font-semibold">Question {currentQuestion}</h2>
      <div className="w-full h-32 bg-gray-300">
        frågekomponent istället för den här diven
      </div>
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
