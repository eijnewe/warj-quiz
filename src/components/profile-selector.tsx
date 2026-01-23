import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  getPlayers,
  getCurrentPlayerId,
  setCurrentPlayerId,
  deletePlayer,
} from '@/lib/storage'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from './ui/item'
import { Pen, Trash, UserPlus } from 'lucide-react'
import { DropdownMenuGroup, DropdownMenuItem } from './ui/dropdown-menu'

export function ProfileSelector() {
  const [players, setPlayers] = useState(getPlayers())
  const [currentId, setCurrentId] = useState<string | null>(
    getCurrentPlayerId(),
  )
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    setPlayers(getPlayers())
    setCurrentId(getCurrentPlayerId())
  }, [])

  function handleSelect(id: string) {
    setCurrentPlayerId(id)
    setCurrentId(id)
  }

  function handleDelete(id: string) {
    deletePlayer(id)
    const list = getPlayers()
    setPlayers(list)
    if (currentId === id) {
      setCurrentPlayerId(null)
      setCurrentId(null)
    }
  }

  return (
    <div className="space-y-2">
      {/* <div className="flex gap-2">
        <Button onClick={() => setCreating((c) => !c)}>
          {creating ? 'Cancel' : 'Create profile'}
        </Button>
      </div>

      {creating && (
        <div>
          <CreateProfile
            onCreated={() => {
              setPlayers(getPlayers())
              setCreating(false)
            }}
          />
        </div>
      )} */}
      <DropdownMenuGroup>
        {players.map((p) => (
          <DropdownMenuItem
            key={p.id}
            /*   variant={currentId === p.id ? 'outline' : 'muted'} */
            onClick={() => handleSelect(p.id)}
          >
            <Item>
              <ItemContent>
                <ItemTitle>{p.name}</ItemTitle>
                <div className="font-medium"></div>
                {p.birthdate && (
                  <div className="text-sm text-muted">
                    {new Date(p.birthdate).toLocaleDateString()}
                  </div>
                )}
              </ItemContent>
              <ItemActions>
                {/*  <Button size="icon-sm" onClick={() => handleDelete(p.id)}>
                  <Pen />
                </Button> */}
                <Button
                  variant="destructive"
                  size="icon-sm"
                  onClick={() => handleDelete(p.id)}
                >
                  <Trash />
                </Button>
              </ItemActions>
            </Item>
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>
    </div>
  )
}
