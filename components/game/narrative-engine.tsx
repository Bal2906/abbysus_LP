"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Save, Pause, Eye, Heart, ChevronRight } from "lucide-react"
import { ImpactButton } from "./impact-button"
import { getCharacterById, getSceneById, getNextDialogue, hasChoices, emotionIcons } from "@/data/gameDemo"
import type { NarrativeState, MenuState } from "./types"

interface NarrativeEngineProps {
  narrativeState: NarrativeState
  setNarrativeState: (state: NarrativeState | ((prev: NarrativeState) => NarrativeState)) => void
  setCurrentMenu: (menu: MenuState) => void
}

export function NarrativeEngine({ narrativeState, setNarrativeState, setCurrentMenu }: NarrativeEngineProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showUI, setShowUI] = useState(true)
  const [canAdvance, setCanAdvance] = useState(false)
  const typingRef = useRef<NodeJS.Timeout>()

  const currentScene = getSceneById(narrativeState.currentScene)
  const currentDialogue = currentScene?.dialogue[narrativeState.currentDialogueIndex]
  const currentCharacter = currentDialogue ? getCharacterById(currentDialogue.characterId) : null

  // Efecto de escritura suave y natural
  useEffect(() => {
    if (currentDialogue) {
      setDisplayedText("")
      setIsTyping(true)
      setCanAdvance(false)

      const text = currentDialogue.text
      let currentIndex = 0

      const typeText = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++

          // Velocidad variable según el carácter
          const char = text[currentIndex - 1]
          let delay = 30

          if (char === "." || char === "!" || char === "?") delay = 300
          else if (char === "," || char === ";") delay = 150
          else if (char === " ") delay = 50

          typingRef.current = setTimeout(typeText, delay)
        } else {
          setIsTyping(false)
          setCanAdvance(true)
        }
      }

      // Pequeño delay antes de empezar a escribir
      setTimeout(typeText, 500)

      return () => {
        if (typingRef.current) {
          clearTimeout(typingRef.current)
        }
      }
    }
  }, [currentDialogue])

  // Actualizar datos de la escena
  useEffect(() => {
    if (currentDialogue && currentCharacter && currentScene) {
      setNarrativeState((prev) => ({
        ...prev,
        characterName: currentCharacter.name,
        dialogueText: currentDialogue.text,
        characterImage: currentCharacter.avatar,
        backgroundImage: currentScene.background || "/placeholder.svg?height=800&width=1400",
      }))
    }
  }, [narrativeState.currentScene, narrativeState.currentDialogueIndex])

  const advanceDialogue = () => {
    if (!canAdvance || !currentScene) return

    // Si está escribiendo, completar el texto inmediatamente
    if (isTyping) {
      if (typingRef.current) clearTimeout(typingRef.current)
      setDisplayedText(currentDialogue?.text || "")
      setIsTyping(false)
      setCanAdvance(true)
      return
    }

    // Si hay opciones disponibles, mostrarlas
    if (narrativeState.currentDialogueIndex === currentScene.dialogue.length - 1 && hasChoices(currentScene)) {
      setNarrativeState((prev) => ({
        ...prev,
        showChoices: true,
        choices: currentScene.choices || [],
      }))
      return
    }

    // Avanzar al siguiente diálogo
    const nextDialogue = getNextDialogue(currentScene, narrativeState.currentDialogueIndex)
    if (nextDialogue) {
      setNarrativeState((prev) => ({
        ...prev,
        currentDialogueIndex: prev.currentDialogueIndex + 1,
        showChoices: false,
      }))
    } else {
      // Ir a la siguiente escena o terminar
      if (currentScene.nextScene) {
        const nextScene = getSceneById(currentScene.nextScene)
        if (nextScene) {
          setNarrativeState((prev) => ({
            ...prev,
            currentScene: currentScene.nextScene!,
            currentDialogueIndex: 0,
            showChoices: false,
          }))
        } else {
          // Cambiar aquí para ir a la pantalla de fin del juego
          setCurrentMenu("gameEndTitle")
        }
      } else {
        // Cambiar aquí para ir a la pantalla de fin del juego
        setCurrentMenu("gameEndTitle")
      }
    }
  }

  const handleChoice = (choiceId: string) => {
    const choice = narrativeState.choices.find((c) => c.id === choiceId)
    if (choice) {
      const nextScene = getSceneById(choice.nextScene)
      if (nextScene) {
        setNarrativeState((prev) => ({
          ...prev,
          currentScene: choice.nextScene,
          currentDialogueIndex: 0,
          showChoices: false,
          choices: [],
        }))
      }
    }
  }

  const skipText = () => {
    if (isTyping && typingRef.current) {
      clearTimeout(typingRef.current)
      setDisplayedText(currentDialogue?.text || "")
      setIsTyping(false)
      setCanAdvance(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={narrativeState.showChoices ? undefined : advanceDialogue}
      onMouseMove={() => setShowUI(true)}
      onMouseLeave={() => setTimeout(() => setShowUI(false), 2000)}
    >
      {/* Background con transiciones suaves */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={narrativeState.currentScene}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={narrativeState.backgroundImage || "/placeholder.svg"}
            alt="Scene background"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay emocional sutil */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background:
              currentDialogue?.emotion === "angry"
                ? "linear-gradient(135deg, rgba(220, 20, 60, 0.15), rgba(139, 0, 0, 0.1))"
                : currentDialogue?.emotion === "sad"
                  ? "linear-gradient(135deg, rgba(25, 25, 112, 0.15), rgba(48, 25, 52, 0.1))"
                  : currentDialogue?.emotion === "fear"
                    ? "linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(48, 25, 52, 0.2))"
                    : "linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(26, 26, 26, 0.1))",
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Partículas sutiles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-10"
              animate={{
                y: [window.innerHeight + 50, -50],
                x: [0, Math.sin(i) * 30],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Vignette sutil */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Character Image con efectos mejorados */}
      <AnimatePresence mode="wait">
        {narrativeState.characterImage && currentCharacter?.id !== "narrator" && (
          <motion.div
            key={narrativeState.currentScene + narrativeState.currentDialogueIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-8 bottom-0 h-full w-auto max-w-md z-10"
          >
            {/* Glow sutil detrás del personaje */}
            <motion.div
              className="absolute inset-0 blur-2xl opacity-20 rounded-full"
              animate={{
                background: `radial-gradient(circle, ${currentCharacter?.color || "#DC143C"}40, transparent 70%)`,
              }}
              transition={{ duration: 2 }}
            />

            <img
              src={narrativeState.characterImage || "/placeholder.svg"}
              alt={narrativeState.characterName}
              className="relative z-10 h-full w-auto object-contain filter drop-shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Superior elegante */}
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 z-30"
          >
            <div className="bg-gradient-to-b from-black/60 via-black/20 to-transparent p-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Info de escena */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="px-4 py-2 glass-effect rounded-full border border-crimson/20"
                    whileHover={{ scale: 1.02, borderColor: "rgba(220, 20, 60, 0.4)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-crimson font-elegant text-sm font-medium">
                      {currentScene?.title || "Escena Desconocida"}
                    </span>
                  </motion.div>

                  {/* Progreso sutil */}
                  <div className="flex items-center space-x-3">
                    <div className="w-24 h-1 bg-black/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-crimson/80 to-deep-purple/80"
                        animate={{
                          width: `${((narrativeState.currentDialogueIndex + 1) / (currentScene?.dialogue.length || 1)) * 100}%`,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs font-elegant">
                      {narrativeState.currentDialogueIndex + 1}/{currentScene?.dialogue.length || 1}
                    </span>
                  </div>
                </div>

                {/* Controles */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentMenu("saveSlots")
                    }}
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-crimson hover:bg-crimson/10 border border-crimson/20 hover:border-crimson/40 transition-all duration-300"
                  >
                    <Save className="h-4 w-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentMenu("pause")
                    }}
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-crimson hover:bg-crimson/10 border border-crimson/20 hover:border-crimson/40 transition-all duration-300"
                  >
                    <Pause className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialogue Box fijo en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Contenedor principal fijo */}
        <div className="relative">
          {/* Fondo elegante */}
          <div className="bg-gradient-to-t from-black/95 via-black/85 to-black/60 backdrop-blur-xl border-t border-crimson/10">
            {/* Línea decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

            <div className="p-6 max-w-6xl mx-auto">
              {/* Character Info con diseño mejorado */}
              <AnimatePresence mode="wait">
                {narrativeState.characterName && (
                  <motion.div
                    key={narrativeState.currentScene + narrativeState.currentDialogueIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Avatar elegante */}
                      <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <div
                          className="w-14 h-14 rounded-full overflow-hidden border-2 shadow-lg"
                          style={{ borderColor: currentCharacter?.color || "#DC143C" }}
                        >
                          <img
                            src={currentCharacter?.avatar || "/placeholder.svg"}
                            alt={narrativeState.characterName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Glow del avatar */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-md opacity-30"
                          animate={{
                            backgroundColor: currentCharacter?.color || "#DC143C",
                          }}
                          transition={{ duration: 1 }}
                        />
                      </motion.div>

                      {/* Nombre y emoción */}
                      <div>
                        <motion.h3
                          className="font-elegant font-bold text-xl"
                          style={{
                            color: currentCharacter?.color || "#DC143C",
                            textShadow: `0 0 10px ${currentCharacter?.color || "#DC143C"}40`,
                          }}
                        >
                          {narrativeState.characterName}
                        </motion.h3>

                        {/* Indicador de emoción elegante */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center space-x-2 mt-1"
                        >
                          {(() => {
                            const emotion = currentDialogue?.emotion ?? "normal"
                            const { icon, label, color } = emotionIcons[emotion] ?? emotionIcons["normal"]

                            return (
                              <span className={`${color} text-xs font-elegant`}>
                                {icon} {label}
                              </span>
                            )
                          })()}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Texto del diálogo con renderizado natural */}
              <div className="mb-4">
                <motion.div
                  key={narrativeState.currentScene + narrativeState.currentDialogueIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <p className="text-white text-lg md:text-xl leading-relaxed font-elegant min-h-[3rem]">
                    {displayedText}
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        className="inline-block w-0.5 h-5 bg-crimson ml-1 align-middle"
                      />
                    )}
                  </p>
                </motion.div>
              </div>

              {/* Choices con botones característicos del juego */}
              <AnimatePresence>
                {narrativeState.showChoices && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="text-center mb-4">
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="inline-flex items-center space-x-2 text-crimson"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="font-elegant text-sm">Elige tu camino</span>
                        <Heart className="h-4 w-4" />
                      </motion.div>
                    </div>

                    {narrativeState.choices.map((choice, index) => (
                      <motion.div
                        key={choice.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <ImpactButton
                          onClick={() => handleChoice(choice.id)}
                          variant="outline"
                          className="w-full text-left justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center text-crimson text-sm font-bold">
                              {index + 1}
                            </span>
                            <span className="font-elegant">{choice.text}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </ImpactButton>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Continue Indicator elegante */}
              {!narrativeState.showChoices && canAdvance && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center items-center mt-4"
                >
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-full border border-crimson/20 cursor-pointer hover:border-crimson/40 transition-colors"
                    onClick={advanceDialogue}
                  >
                    <Eye className="h-3 w-3 text-crimson" />
                    <span className="text-crimson text-xs font-elegant">Continuar</span>
                    <motion.span
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="text-crimson text-xs"
                    >
                      ▼
                    </motion.span>
                  </motion.div>
                </motion.div>
              )}

              {/* Skip text button */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={skipText}
                    className="px-3 py-1 glass-effect rounded-full border border-crimson/20 hover:border-crimson/40 text-crimson text-xs font-elegant transition-all duration-300"
                  >
                    Saltar
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
