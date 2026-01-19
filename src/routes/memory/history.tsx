import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

// Skapar routen /memory/history
export const Route = createFileRoute('/memory/history')({
  component: RouteComponent,
})

function RouteComponent() {
  // Hämta sparade memory-resultat från localStorage
  const results: {
    score: number
    time: number
    date: string
  }[] = JSON.parse(localStorage.getItem('memoryResults') ?? '[]')

  // Sortera resultaten så att högst poäng kommer först
  const sortedResults = [...results].sort(
    (a, b) => b.score - a.score
  )

  return (
    <div>
      <h1>Resultathistorik</h1>

      {sortedResults.length === 0 && (
        <p>Inga resultat ännu</p>
      )}

      <ul>
        {sortedResults.map((r, i) => (
          <li key={i}>
            🏆 {r.score} poäng – {r.time}s –{' '}
            {new Date(r.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Button onClick={() => history.back()}>
        Tillbaka
      </Button>
    </div>
  )
}
