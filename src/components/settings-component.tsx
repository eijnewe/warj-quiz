import { Dialog as DialogPrimitive } from "radix-ui";
import { Button } from "./ui/button";
import { X, Settings } from "lucide-react";
import { ConfirmationPopup } from "./confirmation-popup";


const difficultyArray: string[] = [
    "Lätt",
    "Medel",
    "Svår"
]

const playerArray: string[] = [
    "En spelare",
    "Två spelare"
]

export function SettingsDialog({
    onStart,
    onPause,
    isMainMenu,
}: {
    onStart: () => void;
    onPause: () => void;
    isMainMenu?: boolean
}) {
    return (
        <DialogPrimitive.Root>
            <DialogPrimitive.Trigger>
                <Button className="cursor-pointer" onClick={onPause}>
                    <Settings />
                </Button>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
            <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2 w-[40vw]">
                <DialogPrimitive.Close aria-label="Close" className="self-end">
                    <Button className="cursor-pointer w-7 h-7" onClick={isMainMenu ? onPause : onStart}
                    >
                        <X />
                    </Button>
                </DialogPrimitive.Close>
                <div>
                    <h1 className="text-2xl font-black">
                        Inställningar
                    </h1>
                    <div className="flex flex-col items-center w-fit *:m-2">
                        <div>
                            <p>Svårighet:</p>
                            <div className="flex flex-row *:m-1">
                                {difficultyArray.map((difficulty, index) => (
                                    <DialogPrimitive.Root key={index}>
                                        <DialogPrimitive.Trigger>
                                            <Button className="cursor-pointer">
                                                {difficulty}
                                            </Button>
                                        </DialogPrimitive.Trigger>
                                        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
                                        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                                            <ConfirmationPopup chosenDiff={difficulty} />
                                        </DialogPrimitive.Content>
                                    </DialogPrimitive.Root>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p>Antal Spelare:</p>
                            <div className="flex flex-row *:m-1">
                                {playerArray.map((players, index) => (
                                    <DialogPrimitive.Root key={index}>
                                        <DialogPrimitive.Trigger>
                                            <Button className="cursor-pointer">
                                                {players}
                                            </Button>
                                        </DialogPrimitive.Trigger>
                                        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
                                        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center border-2">
                                            <ConfirmationPopup chosenPlayers={players} />
                                        </DialogPrimitive.Content>
                                    </DialogPrimitive.Root>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPrimitive.Content>
        </DialogPrimitive.Root>
    )
}