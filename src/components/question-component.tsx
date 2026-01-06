import { questions } from "@/assets/data";
import { Button } from "@/components/ui/button";

function GetRandomQuestion() {
    const random = Math.floor(Math.random() * questions.length);
    return questions[random];
}
const currentQuestion = GetRandomQuestion();

export function QuestionComponent() {
    return (
        <div className="flex flex-col justify-center items-center m-2 *:m-2">
            <h1 className="font-bold uppercase mb-4">{currentQuestion.question}</h1>
            <Button variant={"outline"} className="cursor-pointer">
                <b>A:</b> {currentQuestion.A}
            </Button>
            <Button variant={"outline"} className="cursor-pointer">
                <b>B:</b> {currentQuestion.B}
            </Button>
            <Button variant={"outline"} className="cursor-pointer">
                <b>C:</b> {currentQuestion.C}
            </Button>
            <Button variant={"outline"} className="cursor-pointer">
                <b>D:</b> {currentQuestion.D}
            </Button>
        </div>
    )
}