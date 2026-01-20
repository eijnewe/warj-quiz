import { MemoryCard } from "@/components/memory-card-component";
import { GetRandomImage } from "@/components/random-img";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center *:w-[fit] *:rounded-2xl *:mt-3 *:p-10 text-center">
      <h1 className="font-bold uppercase text-3xl">WARJ</h1>
      <div className="flex flex-col justify-center items-center bg-accent text-accent-foreground">
        <h2 className="text-2xl italic font-bold pb-2">Gör Varg-quizzet!</h2>
        <p className="pb-3">Vilken varg är du?</p>
        <GetRandomImage />
        <Link to="/quiz" className="pt-3">
          <Button variant={"outline"} className="uppercase cursor-pointer m-3">
            Ta quizzet nu!
          </Button>
        </Link>
        <p className="text-xs">
          Har du redan gjort quizzet?
          <br />
          Se dina{" "}
          <Link to="/quiz/history" className="underline">
            tidigare resultat här
          </Link>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-accent text-accent-foreground">
        <h2 className="text-2xl italic font-bold pb-2">Spela Varg-memory!</h2>
        <p className="pb-2">Finslipa ditt minne!</p>
        <img src="/src/assets/question-icon.png" alt="question-mark" width={80} className="p-3" />
        <Link to="/memory">
          <Button variant={"outline"} className="uppercase cursor-pointer mt-3">
            Spela nu!
          </Button>
        </Link>
      </div>
    </div>
  );
}
