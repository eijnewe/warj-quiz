import { createFileRoute } from '@tanstack/react-router'
import { MemoryCard } from '@/components/memory-card-component'
import { DifficultyBar } from '@/components/difficulty-component'
import { GridComponent1 } from '@/components/grid-component'

export const Route = createFileRoute('/quiz/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/quiz/test"!</div>
  </>
}
