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
    <div className="flex flex-col justify-center m-2 *:m-2 items-center">
      <h1 className="font-bold uppercase mb-4 text-center text-lg text-shadow-white text-shadow-lg/50 dark:text-shadow-4xl/80 dark:text-shadow-amber-900">{question.question}</h1>
      {(
        answers.map((answer) => (
          <Button key={answer.key} variant={"outline"} className="wrap-break-words whitespace-normal h-fit drop-shadow-md w-[80vw] bg-card" onClick={() => handleClick(answer.key)}>
            {answer.value}
          </Button>
        ))
      )}
    </div>
  );
}
