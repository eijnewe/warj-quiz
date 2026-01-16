import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import GridComponent from '@/components/grid-component'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pointer, RotateCcw } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Dialog as DialogPrimitive } from "radix-ui"


export const Route = createFileRoute('/memory/')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter();
  return (
    <main>
    <DialogPrimitive.Root defaultOpen={true}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/85 z-40" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 flex flex-col text-center items-center *:m-2 border-2">
          <DialogPrimitive.Close aria-label="Close">
            <Button className='cursor-pointer text-2xl p-7'>
              Starta Memoryspel!
              <Pointer />
            </Button>
          </DialogPrimitive.Close>
          <Button variant={'default'} className='flex flex-row items-center text-xs cursor-pointer' onClick={() => router.history.back()}>
            <ArrowLeft />
            Tillbaka
          </Button>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
      <div className="flex justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/">
              <Button variant={'ghost'}>
                <ArrowLeft />
                Avsluta spelet
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Avsluta spel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} size={'icon'} onClick={() => globalThis.location.reload()}>
              <RotateCcw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Starta om spel</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <GridComponent/>
    </main>
  )
}
