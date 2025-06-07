"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  ImageIcon,
  Settings,
  ArrowLeft,
  Save,
  Volume2,
  Globe,
  Type,
  Monitor,
  X,
  Check,
  Home,
  Upload,
  Plus,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useRouter } from "next/navigation"

// Componentes modulares
import { ImpactButton } from "./game/impact-button"
import { NarrativeEngine } from "./game/narrative-engine"
// Importar los nuevos componentes
import { GameEndScreen } from "./game/game-end-screen"
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
import { initialSaveSlots, galleryImages } from "./game/data"

export function GameInterface() {
  const [currentMenu, setCurrentMenu] = useState<MenuState>("main")
  const [confirmation, setConfirmation] = useState<ConfirmationType>(null)
  const [loading, setLoading] = useState<LoadingType>(null)
  const [selectedSaveSlot, setSelectedSaveSlot] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const router = useRouter()

  // Actualizar el estado de settings para incluir las nuevas propiedades
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

  const renderMainMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10"
    >
      {/* Botón de regreso a landing */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", damping: 20 }}
        className="absolute top-6 left-6 z-20"
      >
        <motion.button
          onClick={handleReturnToLanding}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-crimson hover:text-white hover:bg-crimson/20 border border-crimson/30 hover:border-crimson/60 transition-all duration-300 group"
        >
          <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Volver al Inicio
          </div>
        </motion.button>
      </motion.div>

      {/* Logo mejorado */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-12"
      >
        <div className="relative">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-crimson via-blood-red to-deep-purple rounded-2xl mb-6 mx-auto flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 20px rgba(220, 20, 60, 0.5)",
                "0 0 40px rgba(220, 20, 60, 0.8)",
                "0 0 20px rgba(220, 20, 60, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-white font-elegant text-4xl font-bold">R</span>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -inset-2 border border-deep-purple/20 rounded-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-elegant font-bold text-gradient text-center mb-4">Mortis Sabbat</h1>
        <p className="text-gray-300 text-center text-xl font-elegant italic">Demo Interactiva</p>
      </motion.div>

      {/* Menu Options mejorado */}
      <div className="space-y-6 w-full max-w-md">
        {[
          { icon: Play, label: "Juego", action: () => setCurrentMenu("game"), description: "Comienza tu pesadilla" },
          {
            icon: ImageIcon,
            label: "Galería",
            action: () => setCurrentMenu("gallery"),
            description: "Recuerdos visuales",
          },
          {
            icon: Settings,
            label: "Configuración",
            action: () => setCurrentMenu("settings"),
            description: "Personaliza tu experiencia",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            <ImpactButton onClick={item.action} variant="secondary" size="large" icon={item.icon}>
              <div className="text-left">
                <div className="text-lg font-bold">{item.label}</div>
                <div className="text-sm opacity-80">{item.description}</div>
              </div>
            </ImpactButton>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderGameMenu = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10"
    >
      <div className="w-full max-w-md space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-elegant font-bold text-crimson text-center mb-12"
        >
          Juego
        </motion.h2>

        {[
          {
            label: "Nuevo Juego",
            action: () => handleConfirmation("newGame"),
            icon: Plus,
            description: "Inicia una nueva historia",
          },
          {
            label: "Cargar Partida",
            action: () => setCurrentMenu("loadSlots"),
            icon: Upload,
            description: "Continúa tu pesadilla",
          },
          {
            label: "Atrás",
            action: () => setCurrentMenu("main"),
            icon: ArrowLeft,
            description: "Volver al menú principal",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ImpactButton
              onClick={item.action}
              variant={item.label === "Nuevo Juego" ? "primary" : "secondary"}
              size="large"
              icon={item.icon}
            >
              <div className="text-left">
                <div className="text-lg font-bold">{item.label}</div>
                <div className="text-sm opacity-80">{item.description}</div>
              </div>
            </ImpactButton>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderGallery = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative z-10 p-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-elegant font-bold text-crimson text-center mb-8"
        >
          Galería de Recuerdos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 mb-12 font-elegant italic text-lg"
        >
          "Cada imagen cuenta una historia... algunas mejor olvidadas"
        </motion.p>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => image.unlocked && setSelectedImage(image)}
            >
              <div
                className={`relative overflow-hidden rounded-xl ${image.unlocked ? "hover:scale-105" : ""} transition-all duration-500`}
              >
                <img
                  src={image.thumbnail || "/placeholder.svg"}
                  alt={image.title}
                  className={`w-full h-48 object-cover ${!image.unlocked ? "filter grayscale brightness-50" : ""}`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ${image.unlocked ? "group-hover:from-crimson/20" : ""}`}
                ></div>

                {!image.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <div className="text-center">
                      <X className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-400 text-sm font-medium">Bloqueado</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                </div>

                {image.unlocked && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => setCurrentMenu("main")} variant="secondary" icon={ArrowLeft}>
            Volver al Menú Principal
          </ImpactButton>
        </div>
      </div>
    </motion.div>
  )

  const renderImageViewer = () => (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.fullImage || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />

            <div className="absolute bottom-0 left-0 right-0 glass-effect p-6 rounded-b-xl">
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-crimson/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const renderLoadSlots = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative z-10 p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-elegant font-bold text-crimson text-center mb-12"
        >
          Cargar Partida
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {saveSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-effect rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 ${slot.isEmpty ? "opacity-50" : "hover:border-crimson/60"}`}
              onClick={() => !slot.isEmpty && handleConfirmation("loadGame", slot.id)}
            >
              {!slot.isEmpty ? (
                <>
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={slot.thumbnail || "/placeholder.svg"}
                      alt={slot.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2">{slot.name}</h3>
                    <p className="text-crimson text-sm mb-1">{slot.scene}</p>
                    <p className="text-gray-400 text-xs">{slot.date}</p>
                  </div>
                </>
              ) : (
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                    <span className="text-gray-600 font-medium">Slot Vacío</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => setCurrentMenu("game")} variant="secondary" icon={ArrowLeft}>
            Volver
          </ImpactButton>
        </div>
      </div>
    </motion.div>
  )

  const renderSaveSlots = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
      onClick={() => setCurrentMenu("narrative")}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="glass-effect rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-elegant font-bold text-crimson text-center mb-8">Guardar Partida</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {saveSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-effect rounded-lg overflow-hidden cursor-pointer group hover:border-crimson/60 transition-all duration-300"
              onClick={() => handleConfirmation(slot.isEmpty ? "saveGame" : "overwriteSave", slot.id)}
            >
              {!slot.isEmpty ? (
                <>
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={slot.thumbnail || "/placeholder.svg"}
                      alt={slot.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-white font-medium text-sm mb-1">{slot.name}</h4>
                    <p className="text-gray-400 text-xs">{slot.date}</p>
                  </div>
                </>
              ) : (
                <div className="h-32 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="h-8 w-8 text-crimson mx-auto mb-1" />
                    <span className="text-gray-300 text-sm">Nuevo Guardado</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => setCurrentMenu("narrative")} variant="secondary" icon={X}>
            Cancelar
          </ImpactButton>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderPauseMenu = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
      onClick={() => setCurrentMenu("narrative")}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="glass-effect rounded-xl p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-elegant font-bold text-crimson text-center mb-8">Pausa</h2>

        <div className="space-y-4">
          <ImpactButton onClick={() => setCurrentMenu("narrative")} variant="primary" size="large" icon={Play}>
            Continuar
          </ImpactButton>
          <ImpactButton onClick={() => setCurrentMenu("saveSlots")} variant="secondary" size="large" icon={Save}>
            Guardar Partida
          </ImpactButton>
          <ImpactButton onClick={() => setCurrentMenu("settings")} variant="secondary" size="large" icon={Settings}>
            Configuración
          </ImpactButton>
          <ImpactButton onClick={() => setCurrentMenu("main")} variant="outline" size="large" icon={Home}>
            Menú Principal
          </ImpactButton>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderCredits = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative z-10 flex items-center justify-center p-6"
    >
      <div className="text-center max-w-2xl">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-elegant font-bold text-gradient mb-8">Créditos</h1>

          <div className="space-y-8 text-gray-300">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Dirección</h3>
              <p className="text-lg">Estudio Ravenshollow</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Música</h3>
              <p className="text-lg">Akira Yamaoka</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Arte</h3>
              <p className="text-lg">Equipo de Arte Ravenshollow</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Agradecimientos Especiales</h3>
              <p className="text-lg">A todos los que se atrevieron a entrar en Ravenshollow</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-12">
            <ImpactButton onClick={() => setCurrentMenu("main")} variant="primary" icon={Home}>
              Volver al Menú Principal
            </ImpactButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )

  const renderSettings = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-elegant font-bold text-crimson text-center mb-8">Configuración</h2>

        <div className="glass-effect p-6 rounded-xl space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-elegant font-semibold text-white mb-4 flex items-center">
              <Volume2 className="mr-2 h-5 w-5 text-crimson" />
              Audio
            </h3>

            {[
              { label: "Volumen General", key: "volumeGeneral" },
              { label: "Música", key: "volumeMusic" },
              { label: "Efectos", key: "volumeEffects" },
              { label: "Voces", key: "volumeVoices" },
            ].map((item) => (
              <div key={item.key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-gray-300 font-medium">{item.label}</label>
                  <span className="text-crimson font-bold">{(settings[item.key as keyof typeof settings] as number[])[0]}%</span>
                </div>
                <Slider
                  value={settings[item.key as keyof typeof settings] as number[]}
                  onValueChange={(value) => setSettings((prev) => ({ ...prev, [item.key]: value }))}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t border-crimson/20 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 font-medium flex items-center mb-2">
                  <Globe className="mr-2 h-4 w-4 text-crimson" />
                  Idioma
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings((prev) => ({ ...prev, language: e.target.value }))}
                  className="w-full bg-black/50 border border-crimson/30 rounded-lg px-3 py-2 text-white"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 font-medium flex items-center mb-2">
                  <Type className="mr-2 h-4 w-4 text-crimson" />
                  Velocidad de Texto
                </label>
                <Slider
                  value={settings.textSpeed}
                  onValueChange={(value) => setSettings((prev) => ({ ...prev, textSpeed: value }))}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-gray-300 font-medium flex items-center">
                <Monitor className="mr-2 h-4 w-4 text-crimson" />
                Pantalla Completa
              </label>
              <ImpactButton
                onClick={() => setSettings((prev) => ({ ...prev, fullscreen: !prev.fullscreen }))}
                variant={settings.fullscreen ? "primary" : "outline"}
              >
                {settings.fullscreen ? "Activado" : "Desactivado"}
              </ImpactButton>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ImpactButton onClick={() => setCurrentMenu("main")} variant="secondary" size="large" icon={ArrowLeft}>
            Volver al Menú Principal
          </ImpactButton>
        </div>
      </div>
    </motion.div>
  )

  const renderLoading = () => (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark-void flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-crimson to-deep-purple rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-elegant text-3xl font-bold">R</span>
            </motion.div>

            <h2 className="text-2xl font-elegant font-bold text-crimson mb-4">
              {loading === "newGame" && "Iniciando Nueva Partida..."}
              {loading === "loadGame" && "Cargando Partida..."}
              {loading === "saveGame" && "Guardando Partida..."}
            </h2>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="text-gray-300 font-elegant italic"
            >
              {loading === "newGame" && "Preparando tu descenso a la locura..."}
              {loading === "loadGame" && "Restaurando tus pesadillas..."}
              {loading === "saveGame" && "Preservando tu progreso..."}
            </motion.div>

            <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-crimson to-deep-purple"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: loading === "newGame" ? 3 : loading === "loadGame" ? 2.5 : 2,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const renderConfirmation = () => (
    <AnimatePresence>
      {confirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setConfirmation(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="glass-effect border border-crimson/30 rounded-xl p-6 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-elegant font-bold text-crimson mb-4 text-center">Confirmación</h3>

            <p className="text-gray-300 text-center mb-6">
              {confirmation === "newGame" && "¿Deseas comenzar un nuevo juego?"}
              {confirmation === "loadGame" && "¿Deseas cargar esta partida guardada?"}
              {confirmation === "saveGame" && "¿Deseas guardar en este slot?"}
              {confirmation === "overwriteSave" && "¿Deseas sobreescribir esta partida guardada?"}
              {confirmation === "exit" && "¿Deseas salir del juego?"}
            </p>

            <div className="flex gap-4">
              <ImpactButton onClick={() => handleConfirmAction(true)} variant="primary" icon={Check}>
                Sí
              </ImpactButton>
              <ImpactButton onClick={() => handleConfirmAction(false)} variant="outline" icon={X}>
                No
              </ImpactButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

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

      {/* Menu Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {currentMenu === "main" && renderMainMenu()}
          {currentMenu === "game" && renderGameMenu()}
          {currentMenu === "gallery" && renderGallery()}
          {/* Reemplazar el renderSettings actual con: */}
          {/* {currentMenu === "settings" && renderSettings()} */}
          {currentMenu === "settings" && (
            <SettingsPanel settings={settings} setSettings={setSettings} onBack={() => setCurrentMenu("main")} />
          )}
          {currentMenu === "narrative" && (
            <NarrativeEngine
              narrativeState={narrativeState}
              setNarrativeState={setNarrativeState}
              setCurrentMenu={setCurrentMenu}
            />
          )}
          {currentMenu === "loadSlots" && renderLoadSlots()}
          {currentMenu === "saveSlots" && renderSaveSlots()}
          {currentMenu === "pause" && renderPauseMenu()}
          {currentMenu === "credits" && renderCredits()}
          {/* Y agregar el renderizado de la nueva pantalla en el AnimatePresence: */}
          {currentMenu === "gameEnd" && (
            <GameEndScreen
              onContinue={() => setCurrentMenu("credits")}
              onMainMenu={() => setCurrentMenu("main")}
              onRestart={() => {
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
              }}
              endingType="neutral"
              playerChoices={5}
              completionTime="45:30"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Image Viewer */}
      {renderImageViewer()}

      {/* Loading Screen */}
      {renderLoading()}

      {/* Confirmation Modal */}
      {renderConfirmation()}

      {/* Glitch Effect */}
      <AnimatePresence>
        {Math.random() > 0.98 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 bg-crimson/20 pointer-events-none z-40"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
