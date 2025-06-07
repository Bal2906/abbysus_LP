"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useSound } from "use-sound"

export function MainMenu() {
  const [currentMenu, setCurrentMenu] = useState<"main" | "game" | "gallery" | "settings">("main")
  const [playHoverSound] = useSound("/sounds/hover.wav", { volume: 0.5 })
  const [playSelectSound] = useSound("/sounds/select.wav", { volume: 0.5 })

  type MenuOption = {
    text: string;
    action: () => void;
  };

  const menuOptions: Record<"main" | "game" | "gallery" | "settings", MenuOption[]> = {
    main: [
      { text: "Juego", action: () => setCurrentMenu("game") },
      { text: "Galería", action: () => setCurrentMenu("gallery") },
      { text: "Configuración", action: () => setCurrentMenu("settings") }
    ],
    game: [
      { text: "Nuevo Juego", action: () => console.log("New game") },
      { text: "Cargar Partida", action: () => console.log("Load game") },
      { text: "Atrás", action: () => setCurrentMenu("main") }
    ],
    gallery: [
      { text: "CGs", action: () => console.log("View CGs") },
      { text: "Música", action: () => console.log("View music") },
      { text: "Atrás", action: () => setCurrentMenu("main") }
    ],
    settings: [
      { text: "Volumen", action: () => console.log("Volume settings") },
      { text: "Idioma", action: () => console.log("Language settings") },
      { text: "Velocidad de texto", action: () => console.log("Text speed") },
      { text: "Modo de pantalla", action: () => console.log("Screen mode") },
      { text: "Atrás", action: () => setCurrentMenu("main") }
    ]
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with particle effects from hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(48,25,52,0.1),transparent)]"></div>
        </div>
      </div>

      {/* Menu Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {menuOptions[currentMenu].map((option, index) => (
                <motion.button
                  key={option.text}
                  onClick={() => {
                    playSelectSound()
                    option.action()
                  }}
                  onMouseEnter={() => playHoverSound()}
                  className="w-full p-4 text-center rounded-lg bg-dark-void/50 backdrop-blur-sm transition-all duration-300 hover:bg-dark-void/70 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.text}
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {currentMenu === "game" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-void/90 p-6 rounded-lg border border-red-500/20 backdrop-blur-sm"
            >
              <p className="text-center mb-4">¿Deseas cargar la partida?</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="destructive"
                  onClick={() => {
                    playSelectSound()
                    console.log("Loading game...")
                  }}
                >
                  SÍ
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    playSelectSound()
                    setCurrentMenu("main")
                  }}
                >
                  NO
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
