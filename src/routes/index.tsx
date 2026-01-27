import { MemoryCard } from "@/components/memory-card-component";
import { GetRandomImage } from "@/components/random-img";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="p-4">
      <h1 className="text-4xl text-center">WARJ</h1>
      <div className="flex justify-center items-center py-4">
        <div className="cardcontainer grid sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          <Card className="pt-0 overflow-hidden min-w-2xs max-w-sm justify-between bg-amber-100">
            <GetRandomImage />
            <CardHeader>
              <CardTitle className="tex-lg">Quiz</CardTitle>
              <CardDescription>
                Vilken varg är du?
              </CardDescription>
              <CardAction>
                <Button asChild>
                  <Link to="/quiz">Ta quizzet nu!</Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p> Har du redan gjort quizzet?</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/history">Resultat</Link>
              </Button>
            </CardFooter>
          </Card>



          <Card className="pt-0 max-w-sm min-w-2xs justify-between bg-amber-100">
            <img src="/src/assets/question-icon.png" alt="question-mark" className="aspect-square p-4" />
            <CardHeader>
              <CardTitle className="tex-lg">Memory</CardTitle>
              <CardDescription>
                Finslipa ditt minne!
              </CardDescription>
              <CardAction>
                <Button asChild>
                  <Link to="/memory">Spela nu!</Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p> Har du redan spelat?</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/history">Resultat</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="pt-0 max-w-sm min-w-2xs justify-between bg-amber-100">
            <div className="relative aspect-square p-10">
              <img src="src\assets\wolf-pairs\pair-4-a.png" alt="Little Red Riding Hood" className="rounded-2xl border-4 border-black absolute top-5 left-5 sm:top-10 sm:left-10 w-45 h-45 object-cover drop-shadow-sm/50" />
              <img src="src\assets\wolf-pairs\pair-4-b.png" alt="Big Bad Wolf" className="rounded-2xl border-4 border-black absolute w-45 h-45 bottom-5 right-5 sm:bottom-10 sm:right-10 object-cover drop-shadow-sm/50" />
            </div>
            <CardHeader >
              <CardTitle className="tex-lg">Match</CardTitle>
              <CardDescription>
                Drag and drop-vargar!
              </CardDescription>
              <CardAction>
                <Button asChild>
                  <Link to="/dnd">Spela nu!</Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p> Har du redan spelat?</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/history">Resultat</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
