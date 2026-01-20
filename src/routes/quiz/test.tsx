import { DifficultyBar } from '@/components/difficulty-bar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>Hello "/quiz/test"!
  <DifficultyBar/>
    </>
}
