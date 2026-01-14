import WolfComponent from '@/components/wolf-component'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import JSConfetti from 'js-confetti'
import { saveResult } from '@/lib/storage'
import { QuestionComponent } from '@/components/question-component'

export const Route = createFileRoute('/quiz/results')({
  component: RouteComponent,
})

type Answer = "A1" | "A2" | "A3" | "A4"
type WolfType =
  | "wolf1" | "wolf2" | "wolf3" | "wolf4" | "wolf5"
  | "wolf6" | "wolf7" | "wolf8" | "wolf9" | "wolf10"

const comboToWolf: Record<string, WolfType> = {
  "A1-A2": "wolf5",
  "A1-A3": "wolf6",
  "A1-A4": "wolf7",
  "A2-A3": "wolf8",
  "A2-A4": "wolf9",
  "A3-A4": "wolf10",
}

function getResult(answers: Answer[]): WolfType {
  const counts: Record<Answer, number> = {
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
  }

  answers.forEach((answer) => {
    counts[answer]++;
  })

  const sorted = (Object.entries(counts) as [Answer, number][])
    .sort((a, b) => b[1] - a[1])

  const [topAnswer, topCount] = sorted[0]
  const [secondAnswer, secondCount] = sorted[1]

  if (topCount > secondCount) {
    switch (topAnswer) {
      case "A1": return "wolf1"
      case "A2": return "wolf2"
      case "A3": return "wolf3"
      case "A4": return "wolf4"
    }
  }

  if (topCount === secondCount) {
    const key = [topAnswer, secondAnswer].sort().join("-")
    const wolf = comboToWolf[key]

    if (wolf) return wolf;
  }

  throw new Error("Ingen varg kunde tilldelas...")
}

const testData: Answer[] = ["A2", "A2", "A3", "A4", "A4"]
const data: Answer[] = QuestionComponent
const jsConfetti = new JSConfetti();

function RouteComponent() {
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<WolfType | null>(null)

  const handleShowResult = () => {
    const wolf = getResult(testData)
    setResult(wolf)

    jsConfetti.addConfetti({ emojis: ['🐺'] })
    setShowResult(true)
    saveResult({ id: wolf, date: Date.now() })
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center m-2 *:m-2">
        <span>Ditt resultat är redo!</span>
        <h1 className="font-bold uppercase mb-4 text-3xl">
          Du är...
        </h1>

        {!showResult && (
            <Button onClick={handleShowResult} className='cursor-pointer'>
              Visa mig!
            </Button>
        )}

        {showResult && result && (
          <WolfComponent id={result} />
        )}
      </div>
    </main>
  )
}
