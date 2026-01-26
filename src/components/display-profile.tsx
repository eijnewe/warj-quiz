import { Button } from '@/components/ui/button'
import { ProfileSelector } from './profile-selector'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemHeader,
  ItemTitle,
} from './ui/item'
import { getCurrentPlayer } from '@/lib/storage'
import { ChevronDownIcon, UserPen } from 'lucide-react'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CreateProfile } from './create-profile'
export function DisplayProfile() {
  const currentPlayer = getCurrentPlayer()
  return (
    <div className="flex">
      <Item>
        <ItemHeader>
          <p>Score: 100</p>
        </ItemHeader>
        <ItemContent>
          {currentPlayer ?
            <ItemTitle>{currentPlayer.name}</ItemTitle>
          : <ItemTitle>Player</ItemTitle>}
        </ItemContent>
        <ItemActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size={'icon-sm'}>
                <UserPen />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ProfileSelector />
            </DropdownMenuContent>
          </DropdownMenu>
          <CreateProfile/>
        </ItemActions>
      </Item>
    </div>
  )
}
