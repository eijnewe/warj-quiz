import { createFileRoute } from '@tanstack/react-router'
import { QuestionComponent } from '@/components/question-component'

export const Route = createFileRoute('/quiz/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/quiz/test"!</div>
    <QuestionComponent />
  </>
}
