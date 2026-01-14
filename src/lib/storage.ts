export type SavedResult = {
  id: string
  date: number
  answers?: string[]
}

const STORAGE_KEY = 'quiz:history'

export function getHistory(): SavedResult[]{
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) as SavedResult[] : []
  } catch {
    return []
  }
}

export function saveResult(entry: SavedResult) {
  try {
    const list = getHistory();
    list.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    // ignore
  }
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
} 