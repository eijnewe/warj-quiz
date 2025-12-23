import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'

//TODO: replace type + props with correct types after implementation
type Result = {
  id: number
  username: string
  avatar?: string
  personality?: string
  date: string
}

type ResultItemProps = {
  result: Result
}

// TODO: Fetch previous results from localStorage

const results = [
  {
    id: 1,
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    personality: 'WARJ 1',
    date: '2025-12-23 14:35',
  },
  {
    id: 2,
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    personality: 'WARJ 2',
    date: '2025-12-23 14:35',
  },
  {
    id: 3,
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    personality: 'WARJ 3',
    date: '2025-12-23 14:35',
  },
]

export function PreviousResults() {
  // TODO: Replace static array with dynamic data
  return (
    <ItemGroup>
      {results.map((result) => (
        <ResultItem key={result.id} result={result} />
      ))}
    </ItemGroup>
  )
}

export function ResultItem({ result }: ResultItemProps) {
  return (
    <Item variant={'outline'}>
      <ItemMedia>
        <Avatar>
          <AvatarImage src={result.avatar} className="grayscale" />
          <AvatarFallback>{result.username.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent className="gap-1">
        <ItemTitle>
          {result.username}{' '}
          <span className="text-muted-foreground">{result.date}</span>
        </ItemTitle>
        <ItemDescription>{result.personality}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRight />
      </ItemActions>
    </Item>
  )
}
