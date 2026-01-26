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

/* ---------------- Player storage helpers ---------------- */

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
