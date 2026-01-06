import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/history')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/previous-results"!</div>
}
