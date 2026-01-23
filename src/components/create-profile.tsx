import { useState } from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDownIcon, User, UserPlus } from 'lucide-react'
import { savePlayer, setCurrentPlayerId } from '@/lib/storage'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { toast } from 'sonner'

export function CreateProfile() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    if (!name.trim()) {
      toast.error('Name is required')
      return
    }
    const player = {
      id: String(Date.now()),
      name: name.trim(),
      birthdate: date ? date.getTime() : undefined,
      avatarUrl: avatar || undefined,
      createdAt: Date.now(),
    }
    savePlayer(player)
    setCurrentPlayerId(player.id)
    toast.success('Profile created')

    setName('')
    setDate(undefined)
    setAvatar('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          type="button"
          size={'icon-sm'}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <UserPlus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <DialogHeader>
            <DialogTitle>Create new profile</DialogTitle>
          </DialogHeader>
          <InputGroup>
            <InputGroupInput
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputGroupAddon>
              <User />
            </InputGroupAddon>
          </InputGroup>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-48 justify-between font-normal"
                type="button"
              >
                {date ? date.toLocaleDateString() : 'Select date'}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(d) => {
                  setDate(d)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>

          <InputGroup>
            <InputGroupInput
              placeholder="Avatar URL (optional)"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </InputGroup>

          <DialogFooter>
            <Button type="submit">Create Profile</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
