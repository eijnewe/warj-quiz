/* ======================================================
   QUIZ – RESULTAT (History)
====================================================== */

export type SavedResult = {
  id: string
  date: number
  answers?: string[]
}

const STORAGE_KEY = 'quiz:history'

export function getHistory(): SavedResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as SavedResult[]) : []
  } catch {
    return []
  }
}

export function saveResult(entry: SavedResult) {
  try {
    const list = getHistory()
    list.unshift(entry)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    // ignore
  }
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
}


/* ======================================================
   MEMORY – RESULTAT (History)
====================================================== */

export type MemoryResult = {
  points: number
  time: number
  date: number
  difficulty: 'easy' | 'medium' | 'hard'

}

const MEMORY_KEY = 'quiz:memory'

export function getMemoryHistory(): MemoryResult[] {
  try {
    const raw = localStorage.getItem(MEMORY_KEY)
    return raw ? (JSON.parse(raw) as MemoryResult[]) : []
  } catch {
    return []
  }
}

export function saveMemoryResult(entry: MemoryResult) {
  try {
    const list = getMemoryHistory()
    list.unshift(entry)
    localStorage.setItem(MEMORY_KEY, JSON.stringify(list))
  } catch {
    // ignore
  }
}

export function clearMemoryHistory() {
  localStorage.removeItem(MEMORY_KEY)
}


/* ======================================================
   MATCHA VARG – RESULTAT (History)
====================================================== */

export type MatchaVarg = {
  score: number
  date: number
}

const MATCHA_VARG_KEY = 'quiz:matcha_varg'

export function getMatchaVargHistory(): MatchaVarg[] {
  try {
    const raw = localStorage.getItem(MATCHA_VARG_KEY)
    return raw ? (JSON.parse(raw) as MatchaVarg[]) : []
  } catch {
    return []
  }
}

export function saveMatchaVargResult(entry: MatchaVarg) {
  try {
    const list = getMatchaVargHistory()
    list.unshift(entry)
    localStorage.setItem(MATCHA_VARG_KEY, JSON.stringify(list))
  } catch {}
}

export function clearMatchaVargHistory() {
  localStorage.removeItem(MATCHA_VARG_KEY)
}

/* ======================================================
  PLAYER STORAGE HELPERS - PROFILER
====================================================== */

export type Player = {
  id: string
  name: string
  birthdate?: number
  avatarUrl?: string
  createdAt: number
}

const PLAYERS_KEY = 'players:list'

export function getPlayers(): Player[] {
  try {
    const raw = localStorage.getItem(PLAYERS_KEY)
    return raw ? (JSON.parse(raw) as Player[]) : []
  } catch {
    return []
  }
}

export function savePlayer(player: Player) {
  try {
    const list = getPlayers()
    list.unshift(player)
    localStorage.setItem(PLAYERS_KEY, JSON.stringify(list))
  } catch {
    // ignore
  }
}

export function updatePlayer(player: Player) {
  try {
    const list = getPlayers()
    const idx = list.findIndex((p) => p.id === player.id)
    if (idx > -1) list[idx] = player
    else list.unshift(player)
    localStorage.setItem(PLAYERS_KEY, JSON.stringify(list))
  } catch {}
}

export function deletePlayer(id: string) {
  try {
    const list = getPlayers().filter((p) => p.id !== id)
    localStorage.setItem(PLAYERS_KEY, JSON.stringify(list))
  } catch {}
}

export function clearPlayers() {
  localStorage.removeItem(PLAYERS_KEY)
}

const CURRENT_PLAYER_KEY = 'players:current'

export function setCurrentPlayerId(id: string | null) {
  try {
    if (id === null) localStorage.removeItem(CURRENT_PLAYER_KEY)
    else localStorage.setItem(CURRENT_PLAYER_KEY, id)
  } catch {}
}

export function getCurrentPlayerId(): string | null {
  try {
    return localStorage.getItem(CURRENT_PLAYER_KEY)
  } catch {
    return null
  }
}

export function getCurrentPlayer(): Player | undefined {
  try {
    const id = getCurrentPlayerId()
    if (!id) return undefined
    return getPlayers().find((p) => p.id === id)
  } catch {
    return undefined
  }
}
