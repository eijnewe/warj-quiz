import { questions } from "@/assets/data";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

function GetRandomQuestion(remainingQuestions: typeof questions) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions[randomIndex];
}

export function QuestionComponent() {
    const navigate = useNavigate();

    const [remainingQuestions, setRemainingQuestions] = useState(questions);
    const [question, setQuestion] = useState(() => GetRandomQuestion(questions));
    const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);

    useEffect(() => {
        if (question === null) {
            const timeout = setTimeout(() => {
                navigate({ to: "/quiz/results", search: { answeredQuestions } });
            }, 2800);
            return () => clearTimeout(timeout);
        }
    }, [question, navigate, answeredQuestions]);

    function clickedAnswer(answerKey: string) {
        setAnsweredQuestions(previousAnswers => [...previousAnswers, answerKey]);

        setRemainingQuestions(prevRemaining => {
            const newRemaining = prevRemaining.filter(q => q !== question);

            if (newRemaining.length > 0) {
                setQuestion(GetRandomQuestion(newRemaining));
            }
            else {
                setQuestion(null);
            }
            return newRemaining;
        });
    }

    const answers = question
        ? [
            { key: "a1", value: question.a1 },
            { key: "a2", value: question.a2 },
            { key: "a3", value: question.a3 },
            { key: "a4", value: question.a4 }
        ]
        : [];

    const randomizedAnswers = [...answers].sort(() => Math.random() - 0.5);

    return (
        <div className="flex flex-col justify-center items-center m-2 *:m-2">
            <h1 className="font-bold uppercase mb-4 text-center">
                {question?.question}
            </h1>
            {question ? (
                randomizedAnswers.map((answer) => (
                    <Button key={answer.key} variant={"outline"} className="cursor-pointer max-w-[75vw] wrap-break-words whitespace-normal h-fit" onClick={() => clickedAnswer(answer.key)}>
                        {answer.value}
                    </Button>
                ))
            ) : (
                <div className="flex justify-center items-center flex-col">
                    <Loader2 className="h-7 w-7 animate-spin" />
                    <span className="text-sm italic">Kalkylerar personlighet ...</span>
                </div>
            )}
        </div>
    )
}