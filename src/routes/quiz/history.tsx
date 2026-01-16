import { createFileRoute } from '@tanstack/react-router'
import WolfComponent from '@/components/wolf-component';
import { getHistory, clearHistory } from '@/lib/storage';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { SavedResult } from '@/lib/storage';
import { Accordion } from 'radix-ui';
import { ArrowDown } from 'lucide-react';

export const Route = createFileRoute('/quiz/history')({
  component: RouteComponent,
})

function RouteComponent() {
  const [history, setHistory] = useState<SavedResult[]>([])

  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center m-2 *:m-2">
        <h1 className="font-bold uppercase mb-4 text-3xl text-center">
          Resultat-historik
        </h1>
        <Accordion.Root type="multiple" className='*:m-2 *:rounded-sm w-full'>
          <Accordion.Item value="item-1" className='bg-amber-100 cursor-pointer p-2 flex flex-col'>
            <Accordion.Trigger className='flex justify-center'>
              Quiz-resultat
              <ArrowDown />
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="flex flex-col items-center justify-center">
                {history.length === 0 ? (
                  <div className='*:m-2 flex flex-col items-center'>
                    <p className='text-center'>Inga tidigare resultat</p>
                    <Link to="/quiz">
                      <Button className='cursor-pointer'>Gör quizzet</Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
                      {history.map((result, index) => (
                        <div key={index} className='flex flex-col items-center gap-2'>
                          <WolfComponent id={result.id} />
                          <p className='text-sm text-muted-foreground'>
                            {formatDate(result.date)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={handleClear}
                      variant="destructive"
                      className='cursor-pointer mt-6'
                    >
                      Rensa historik
                    </Button>
                  </>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>
           <Accordion.Item value="item-2" className='bg-amber-100 cursor-pointer p-2 flex flex-col'>
            <Accordion.Trigger className='flex justify-center'>
              Memory-resultat
              <ArrowDown />
            </Accordion.Trigger>
            <Accordion.Content>
                Add memory results here plsss
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <Link to="/">
          <Button className='cursor-pointer mt-6'>Tillbaka hem</Button>
        </Link>
      </div>
    </main>
  )
}


