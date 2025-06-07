export type MenuState =
  | "main"
  | "game"
  | "gallery"
  | "settings"
  | "narrative"
  | "saveSlots"
  | "loadSlots"
  | "pause"
  | "credits"
  | "imageViewer"
  | "gameEnd"

export type ConfirmationType = "newGame" | "loadGame" | "exit" | "saveGame" | "overwriteSave" | null
export type LoadingType = "newGame" | "loadGame" | "saveGame" | null

export interface SaveSlot {
  id: number
  name: string
  date: string
  scene: string
  thumbnail: string
  isEmpty: boolean
}

export interface GalleryImage {
  id: string
  title: string
  thumbnail: string
  fullImage: string
  unlocked: boolean
  description: string
}

export interface GameSettings {
  volumeGeneral: number[]
  volumeMusic: number[]
  volumeEffects: number[]
  volumeVoices: number[]
  language: string
  textSpeed: number[]
  fullscreen: boolean
  theme: "dark" | "light"
  autoSave: boolean
  skipRead: boolean
  showHints: boolean
  accessibility: boolean
  fontSize: number[]
  contrast: number[]
}

export interface NarrativeState {
  currentChapter: string
  currentScene: string
  currentDialogueIndex: number
  characterName: string
  dialogueText: string
  backgroundImage: string
  characterImage: string
  showChoices: boolean
  choices: any[]
}
