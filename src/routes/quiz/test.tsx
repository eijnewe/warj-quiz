import { DifficultyBar } from '@/components/difficulty-bar'
import { PointBar } from '@/components/point-counter-component'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/quiz/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>Hello "/quiz/test"!
  <PointBar />
    </>
}
