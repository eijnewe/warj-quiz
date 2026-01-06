import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/quiz"!</div>
    <div className="flex flex-col justify-center items-center m-2 *:m-2">
      <Button>
        <Link to="/quiz/test">
          Starta Quizzet
        </Link>
      </Button>
    </div>
  </>
}
