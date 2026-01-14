import { createFileRoute } from '@tanstack/react-router'
import WolfComponent from '@/components/wolf-component';
import { getHistory, clearHistory } from '@/lib/storage';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/quiz/history')({
  component: RouteComponent,
})

// <header> Dina tidigare resultat </header>
// <WolfComponents /> från usestate eller nåt
// Om quizzet inte gjorts innan: visa "Inga tidigare resultat" + "Gör quizzet"-knapp
// Tillbaka-knapp till Hem 

function RouteComponent() {
  const [history, setHistory] = useState<{ id: string; date: number }[]>([])

  useEffect(() => {
    setHistory(getHistory())
  }, [])
  
  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  return <>
    <div>Hello "/quiz/history"!</div>
    <div className="flex flex-col justify-center items-center m-2 *:m-2"> 
      <h1 className="font-bold uppercase mb-4 text-3xl">
        Dina tidigare resultat
      </h1>
      <WolfComponent id='wolf5' />
    </div>
    </>
}


