import { createFileRoute } from '@tanstack/react-router'
import { MemoryCard } from '@/components/memory-card-component'

export const Route = createFileRoute('/quiz/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/quiz/test"!</div>
    {MemoryCard("/src/assets/wolf-icon (1).png")}
  </>
}
