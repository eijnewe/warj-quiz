import { questions, type Question } from "@/assets/data";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

type Props = {
  onAnswer: (answerKey: string) => void;
};

function getRandomQuestion(remainingQuestions: typeof questions) {
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  return remainingQuestions[randomIndex];
}

export function QuestionComponent({ onAnswer }: Props) {
  const navigate = useNavigate()

  const [remainingQuestions, setRemainingQuestions] = useState(questions)
  const [question, setQuestion] = useState<Question | null>(() =>
    getRandomQuestion(questions),
  )
  /*  useEffect(() => {
    if (!question) {
      const timeout = setTimeout(() => {
        navigate({ to: '/quiz/results', search: { answeredQuestions } })
      }, 2800)
      return () => clearTimeout(timeout)
    }
  }, [question, navigate])
 */
  function handleClick(answerKey: string) {
    onAnswer(answerKey);

    setRemainingQuestions((prev) => {
      const updated = prev.filter((q) => q !== question);

      setQuestion(updated.length ? getRandomQuestion(updated) : null);
      return updated;
    });
  }
  const answers = useMemo(() => {
    if (!question) return [];

    return [
      { key: 'a1', value: question.a1 },
      { key: 'a2', value: question.a2 },
      { key: 'a3', value: question.a3 },
      { key: 'a4', value: question.a4 },
    ].sort(() => Math.random() - 0.5)
  }, [question])

  if (!question) return null

  return (
    <div className="flex flex-col justify-center m-2 *:m-2">
      <h1 className="font-bold uppercase mb-4 text-center">{question.question}</h1>
      { (
        answers.map((answer) => (
          <Button key={answer.key} variant={"quiz"} className="cursor-pointer wrap-break-words whitespace-normal h-fit" onClick={() => handleClick(answer.key)}>
            {answer.value}
          </Button>
        ))
        /*  <div className="flex justify-center items-center flex-col">
          <Loader2 className="h-7 w-7 animate-spin" />
          <span className="text-sm italic">Kalkylerar personlighet ...</span>
        </div> */
      )}
    </div>
  );
}
