import { createFileRoute, Link } from "@tanstack/react-router";
import WolfComponent from "@/components/wolf-component";
import {
  getHistory,
  clearHistory,
  getMemoryHistory,
  clearMemoryHistory,
  getMatchaVargHistory,
  clearMatchaVargHistory,
} from "@/lib/storage";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { SavedResult, MemoryResult, MatchaVarg } from "@/lib/storage";
import { Accordion } from "radix-ui";
import { ArrowDown } from "lucide-react";
import wolfHappy from "@/assets/wolfhappy.png";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const [history, setHistory] = useState<SavedResult[]>([])
  const [memoryHistory, setMemoryHistory] = useState<MemoryResult[]>([])
  const [matchaVargHistory, setMatchaVargHistory] = useState<MatchaVarg[]>([])

  useEffect(() => {
    setHistory(getHistory())
    setMemoryHistory(getMemoryHistory())
    setMatchaVargHistory(getMatchaVargHistory())
  }, []);

  const handleClear = () => {
    clearHistory();
    setHistory([]);
  };

  const handleClearMemory = () => {
    clearMemoryHistory()
    setMemoryHistory([])
  }

  const handleClearMatchaVarg = () => {
    clearMatchaVargHistory()
    setMatchaVargHistory([])
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [showWolf, setShowWolf] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setShowWolf(window.scrollY > 200);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  // Sortera resultaten så att högst poängen i memory kommer först
  // const sortedResults = [...results].sort(
  //   (a, b) => b.score - a.score
  // )

  return (
    <main className="flex justify-center p-4">
      <div className="flex flex-col justify-center items-center m-2 w-full max-w-3xl">
        <h2 className="font-bold uppercase mb-4 text-3xl text-center text-[clamp(1.3rem,2.5vw,1.25rem)] whitespace-nowrap">Resultat-historik</h2>
        <Accordion.Root type="multiple" className=" w-full
        *:bg-accent
        *:m-4
        *:p-4
        *:flex
        *:flex-col
        *:rounded-2xl
        *:border
        *:text-center
    *:hover:bg-accent/80
        ">
          {/* item 1 */}
          <Accordion.Item value="item-1" className="">
            <Accordion.Trigger className="flex justify-center cursor-pointer pb-2 ">
              Quiz
              <ArrowDown />
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex flex-col items-center justify-center p-4 ">
                {history.length === 0 ? (
                  <div className="*:m-2 flex flex-col items-center ">
                    <p className="">Inga tidigare resultat</p>
                    <Button className="cursor-pointer" asChild>
                      <Link to="/quiz">
                        Gör quizzet
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap justify-center gap-6 ">
                      {history.map((result, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                          <WolfComponent id={result.id} />
                          <p className="text-sm text-muted-foreground">{formatDate(result.date)}</p>
                        </div>
                      ))}
                    </div>
                    <Button onClick={handleClear} variant="destructive" className="cursor-pointer mt-6">
                      Rensa historik
                    </Button>
                  </>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>

          {/* item 2 */}
          <Accordion.Item value="item-2" className="">
            <Accordion.Trigger className="flex justify-center pb-2 cursor-pointer">
              Memory
              <ArrowDown />
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="p-4 space-y-3">
                {memoryHistory.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground">
                    Inga memory-resultat ännu
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {memoryHistory.map((r, i) => (
                      <li key={i} className="text-sm text-left flex flex-col gap-1 p-3">
                        <div className="flex items-center gap-2 font-medium">
                          🐺
                        </div>

                        <div>
                          <span className="font-bold">Poäng:</span> {r.points}
                        </div>

                        <div>
                          <span className="font-bold">Tid:</span> {r.time} sekunder
                        </div>

                        <div>
                          <span className="font-bold">Svårighet:</span> {r.difficulty}
                        </div>

                        <div className="text-xs text-muted-foreground">
                          {formatDate(r.date)}
                        </div>

                      </li>

                    ))}

                  </ul>

                  

                )}
              </div>


              <Button className="cursor-pointer" asChild>
                <Link to="/memory">
                  Spela memory
                </Link>
              </Button>
            </Accordion.Content>
          </Accordion.Item>

          {/* item 3 */}
          <Accordion.Item value="item-3">
            <Accordion.Trigger className="flex justify-center pb-2 cursor-pointer">
              Matcha varg
              <ArrowDown />
            </Accordion.Trigger>

            <Accordion.Content>
              <div className="p-4 space-y-3">
                {matchaVargHistory.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground">
                    Inga matcha-varg-resultat ännu
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {matchaVargHistory.map((r, i) => (
                      <li key={i} className="text-sm">
                        🐺 {r.score} poäng · {formatDate(r.date)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Button className="cursor-pointer" asChild>
                <Link to="/dnd">
                  Matcha varg
                </Link>
              </Button>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <Button className="cursor-pointer mt-6" asChild>
          <Link to="/">
            Tillbaka hem
          </Link>
        </Button>
<img
  src={wolfHappy}
  alt="Glad varg"
  className="  fixed
        bottom-0
        left-0
        w-32
        z-0
        pointer-events-none
        opacity-80"
/>
      </div>

 
    </main>
    
    
  );
}
