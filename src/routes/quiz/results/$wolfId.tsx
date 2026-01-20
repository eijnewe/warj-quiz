import { createFileRoute } from '@tanstack/react-router'
import WolfComponent from '@/components/wolf-component'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import JSConfetti from 'js-confetti'
import { saveResult } from '@/lib/storage'
import type { WolfType } from '@/lib/quiz-utils'

export const Route = createFileRoute('/quiz/results/$wolfId')({
  component: RouteComponent,
})

const jsConfetti = new JSConfetti()

function RouteComponent() {
  const { wolfId } = Route.useParams()
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (!wolfId) return
    const id = wolfId as WolfType
    jsConfetti.addConfetti({ emojis: ['🐺'] })
    // schedule state update asynchronously to avoid cascading renders
    const t = setTimeout(() => setShowResult(true), 0)
    saveResult({ id, date: Date.now() })
    return () => clearTimeout(t)
  }, [wolfId])

  return (
    <main>
      <div className="flex flex-col justify-center items-center m-2 *:m-2">
        <h1 className="font-bold uppercase mb-4 text-3xl">Du är...</h1>

        {showResult ?
          <WolfComponent id={wolfId} />
        : <div>Beräknar resultat...</div>}
      </div>
    </main>
  )
}
