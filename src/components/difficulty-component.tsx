import { Button } from "./ui/button";


export function DifficultyBar() {

    return (
        <div className="flex flex-col items-center w-fit">
            <p>Svårighet</p>
            <div className="flex flex-row *:h-7 *:m-1 *:cursor-pointer">
                <Button>
                    Lätt
                </Button>
                <Button>
                    Medel
                </Button>
                <Button>
                    Svårt
                </Button>
            </div>
        </div>
    )
}