import { create } from "zustand"

interface Character {
  id: string
  name: string
  role: string
  description: string
  imageUrl: string
  personality: string[]
  backstory: string
}

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  category: string
  content: string
  author: string
  readTime: number
  tags: string[]
}

interface GameState {
  selectedCharacter: Character | null
  isCharacterModalOpen: boolean
  selectedNews: NewsItem | null
  isNewsModalOpen: boolean
  setSelectedCharacter: (character: Character | null) => void
  setCharacterModalOpen: (isOpen: boolean) => void
  setSelectedNews: (news: NewsItem | null) => void
  setNewsModalOpen: (isOpen: boolean) => void
}

export const useGameStore = create<GameState>((set) => ({
  selectedCharacter: null,
  isCharacterModalOpen: false,
  selectedNews: null,
  isNewsModalOpen: false,
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setCharacterModalOpen: (isOpen) => set({ isCharacterModalOpen: isOpen }),
  setSelectedNews: (news) => set({ selectedNews: news }),
  setNewsModalOpen: (isOpen) => set({ isNewsModalOpen: isOpen }),
}))
