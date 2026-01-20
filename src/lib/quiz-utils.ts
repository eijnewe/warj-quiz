type Answer = "A1" | "A2" | "A3" | "A4"
export type WolfType =
  | "wolf1" | "wolf2" | "wolf3" | "wolf4" | "wolf5"
  | "wolf6" | "wolf7" | "wolf8" | "wolf9" | "wolf10"

const comboToWolf: Record<string, WolfType> = {
  "A1-A2": "wolf5",
  "A1-A3": "wolf6",
  "A1-A4": "wolf7",
  "A2-A3": "wolf8",
  "A2-A4": "wolf9",
  "A3-A4": "wolf10",
}

export function getResult(answers: string[]): WolfType {
  const counts: Record<Answer, number> = {
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
  }

  answers.forEach((answer) => {
    const upperAnswer = answer.toUpperCase() as Answer
    if (counts[upperAnswer] !== undefined) {
      counts[upperAnswer]++
    }
  })

  const sorted = (Object.entries(counts) as [Answer, number][])
    .sort((a, b) => b[1] - a[1])

  const [topAnswer, topCount] = sorted[0]
  const [secondAnswer, secondCount] = sorted[1]

  if (topCount > secondCount) {
    switch (topAnswer) {
      case "A1": return "wolf1"
      case "A2": return "wolf2"
      case "A3": return "wolf3"
      case "A4": return "wolf4"
    }
  }

  if (topCount === secondCount) {
    const key = [topAnswer, secondAnswer].sort().join("-")
    const wolf = comboToWolf[key]
    if (wolf) return wolf
  }

  throw new Error("Ingen varg kunde tilldelas...")
}
