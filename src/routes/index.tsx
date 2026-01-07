import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/index"!</div>
    <div className="flex flex-col justify-center items-center m-2 *:m-2">
      <h1 className="font-bold uppercase mb-4 text-3xl">
        Vargquiz
      </h1>
      <p>
        Vilken varg är du?
      </p>
      <p>
        * Import random img component here *
      </p>
      <Link to="/quiz">
        <Button variant={"outline"} className='uppercase cursor-pointer'>
          Gör varg-quizzet!
        </Button>
      </Link>
      <p className='text-xs'>
        Har du redan gjort quizzet?
        <br />
        Se dina <Link to="/quiz/history" className='underline'>tidigare resultat här</Link>
      </p>
    </div>
  </>
}
