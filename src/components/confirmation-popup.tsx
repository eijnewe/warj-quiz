import { Dialog as DialogPrimitive } from "radix-ui";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";



export function ConfirmationPopup({ chosenDiff, chosenPlayers, linkTo }: { chosenDiff?: string, chosenPlayers?: string, linkTo?: string }) {

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2 w-[40vw]">
            {chosenDiff || chosenPlayers
                ? chosenPlayers
                    ? <h1>
                        Är du säker på att du vill starta ett nytt spel med <span className="lowercase font-bold">{chosenPlayers}</span>?
                    </h1>
                    : <h1>
                        Är du säker på att du vill starta ett nytt spel på <span className="lowercase font-bold">{chosenDiff}</span> svårighetsnivå?
                    </h1>
                : <h1>
                    Är du säker på att du vill lämna spelet?
                </h1>
            }
            <div className="flex *:m-1 mt-2">
                <Link to={linkTo}>
                <Button className="cursor-pointer"> 
                    Ja
                </Button>
                </Link>
                <DialogPrimitive.Close aria-label="Close" className="self-end">
                    <Button className="cursor-pointer">
                        Avbryt
                    </Button>
                </DialogPrimitive.Close>
            </div>
        </div>
    )
}