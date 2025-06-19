"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useRouter } from "next/navigation"

// Componente de pantalla de título
import { TitleScreen } from "./game/title-screen"

// Componentes modulares - Menús
import { MainMenu } from "./game/menus/main-menu"
import { GameMenu } from "./game/menus/game-menu"
import { GalleryMenu } from "./game/menus/gallery-menu"
import { LoadSlotsMenu } from "./game/menus/load-slots-menu"
import { SaveSlotsMenu } from "./game/menus/save-slots-menu"
import { PauseMenu } from "./game/menus/pause-menu"
import { CreditsMenu } from "./game/menus/credits-menu"

// Componentes modulares - Modales
import { ImageViewer } from "./game/modals/image-viewer"
import { LoadingScreen } from "./game/modals/loading-screen"
import { ConfirmationModal } from "./game/modals/confirmation-modal"

// Componentes principales
import { NarrativeEngine } from "./game/narrative-engine"
import { GameEndScreen } from "./game/game-end-screen"
import { GameEndTitle } from "./game/game-end-title"
import { SettingsPanel } from "./game/settings-panel"

// Tipos y datos
import type {
  MenuState,
  ConfirmationType,
  LoadingType,
  SaveSlot,
  GalleryImage,
  GameSettings,
  NarrativeState,
} from "./game/types"
import { initialSaveSlots } from "./game/data"
import { galleryImages } from "../data/gallery"

export function GameInterface() {
  // Estado para controlar si mostrar la pantalla de título
  const [showTitleScreen, setShowTitleScreen] = useState(true)
  const [currentMenu, setCurrentMenu] = useState<MenuState>("main")
  const [confirmation, setConfirmation] = useState<ConfirmationType>(null)
  const [loading, setLoading] = useState<LoadingType>(null)
  const [selectedSaveSlot, setSelectedSaveSlot] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const router = useRouter()

  // Estado para guardar las estadísticas del juego
  const [gameStats, setGameStats] = useState({
    playerChoices: 5,
    completionTime: "45:30",
    endingType: "neutral" as "good" | "bad" | "neutral",
  })

  const [settings, setSettings] = useState<GameSettings>({
    volumeGeneral: [80],
    volumeMusic: [70],
    volumeEffects: [85],
    volumeVoices: [90],
    language: "es",
    textSpeed: [50],
    fullscreen: false,
    theme: "dark",
    autoSave: true,
    skipRead: false,
    showHints: true,
    accessibility: false,
    fontSize: [16],
    contrast: [100],
  })

  const [narrativeState, setNarrativeState] = useState<NarrativeState>({
    currentChapter: "chapter1",
    currentScene: "scene1_1",
    currentDialogueIndex: 0,
    characterName: "",
    dialogueText: "",
    backgroundImage: "/placeholder.svg?height=800&width=1400",
    characterImage: "/placeholder.svg?height=600&width=400",
    showChoices: false,
    choices: [],
  })

  const [saveSlots, setSaveSlots] = useState<SaveSlot[]>(initialSaveSlots)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const particleCount = isMobile ? 10 : 20

  const handleConfirmation = (type: ConfirmationType, slotId?: number) => {
    setConfirmation(type)
    if (slotId) setSelectedSaveSlot(slotId)
  }

  const handleConfirmAction = (confirmed: boolean) => {
    if (confirmed) {
      switch (confirmation) {
        case "newGame":
          setLoading("newGame")
          setTimeout(() => {
            setLoading(null)
            setCurrentMenu("narrative")
            setNarrativeState({
              currentChapter: "chapter1",
              currentScene: "scene1_1",
              currentDialogueIndex: 0,
              characterName: "",
              dialogueText: "",
              backgroundImage: "/placeholder.svg?height=800&width=1400",
              characterImage: "/placeholder.svg?height=600&width=400",
              showChoices: false,
              choices: [],
            })
          }, 3000)
          break
        case "loadGame":
          setLoading("loadGame")
          setTimeout(() => {
            setLoading(null)
            setCurrentMenu("narrative")
          }, 2500)
          break
        case "saveGame":
          setLoading("saveGame")
          setTimeout(() => {
            setLoading(null)
            if (selectedSaveSlot) {
              setSaveSlots((prev) =>
                prev.map((slot) =>
                  slot.id === selectedSaveSlot
                    ? {
                        ...slot,
                        name: `Guardado ${selectedSaveSlot}`,
                        date: new Date().toLocaleString(),
                        scene: "Capítulo Actual",
                        thumbnail: "/placeholder.svg?height=200&width=300",
                        isEmpty: false,
                      }
                    : slot,
                ),
              )
            }
            setCurrentMenu("narrative")
          }, 2000)
          break
      }
    }
    setConfirmation(null)
    setSelectedSaveSlot(null)
  }

  const handleReturnToLanding = () => {
    router.push("/")
  }

  const handleContinueFromTitle = () => {
    setShowTitleScreen(false)
  }

  // Si estamos en la pantalla de título, mostrarla
  if (showTitleScreen) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          <TitleScreen onContinue={handleContinueFromTitle} />
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian"></div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson rounded-full opacity-40"
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content con transición suave */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {currentMenu === "main" && <MainMenu onNavigate={(menu) => setCurrentMenu(menu as MenuState)} onReturnToLanding={handleReturnToLanding} />}
          {currentMenu === "game" && <GameMenu onNavigate={(menu) => setCurrentMenu(menu as MenuState)} onConfirmation={handleConfirmation} />}
          {currentMenu === "gallery" && (
            <GalleryMenu galleryImages={galleryImages} onNavigate={(menu) => setCurrentMenu(menu as MenuState)} onImageSelect={setSelectedImage} />
          )}
          {currentMenu === "settings" && (
            <SettingsPanel settings={settings} setSettings={setSettings} onBack={() => setCurrentMenu("main")} />
          )}
          {currentMenu === "loadSlots" && (
            <LoadSlotsMenu saveSlots={saveSlots} onNavigate={(menu) => setCurrentMenu(menu as MenuState)} onConfirmation={handleConfirmation} />
          )}
          {currentMenu === "saveSlots" && (
            <SaveSlotsMenu saveSlots={saveSlots} onNavigate={(menu) => setCurrentMenu(menu as MenuState)} onConfirmation={handleConfirmation} />
          )}
          {currentMenu === "pause" && <PauseMenu onNavigate={(menu) => setCurrentMenu(menu as MenuState)} />}
          {currentMenu === "narrative" && (
            <NarrativeEngine
              narrativeState={narrativeState}
              setNarrativeState={setNarrativeState}
              setCurrentMenu={setCurrentMenu}
            />
          )}
          {currentMenu === "gameEndTitle" && <GameEndTitle onContinue={() => setCurrentMenu("credits")} />}
          {currentMenu === "credits" && <CreditsMenu onNavigate={setCurrentMenu} />}
          {currentMenu === "gameResults" && (
            <GameEndScreen
              stats={gameStats}
              onContinue={() => setCurrentMenu("credits")}
              onRestart={() => {
                setCurrentMenu("main")
                setNarrativeState({
                  currentChapter: "chapter1",
                  currentScene: "scene1_1",
                  currentDialogueIndex: 0,
                  characterName: "",
                  dialogueText: "",
                  backgroundImage: "/placeholder.svg?height=800&width=1400",
                  characterImage: "/placeholder.svg?height=600&width=400",
                  showChoices: false,
                  choices: [],
                })
              }}
              onMainMenu={() => setCurrentMenu("main")}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Modales */}
      <ImageViewer selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      <LoadingScreen loading={loading} />
      <ConfirmationModal
        confirmation={confirmation}
        onConfirm={handleConfirmAction}
        onCancel={() => setConfirmation(null)}
      />
    </div>
  )
}
