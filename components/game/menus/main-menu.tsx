"use client"

import { motion } from "framer-motion"
import { Play, ImageIcon, Settings, Home } from "lucide-react"
import { ImpactButton } from "../impact-button"

interface MainMenuProps {
  onNavigate: (menu: string) => void
  onReturnToLanding: () => void
}

export function MainMenu({ onNavigate, onReturnToLanding }: MainMenuProps) {
      // Función para renderizar el título con colores específicos
      const renderTitle = () => {
        const title = "Morti Sabbat"
        return title.split("").map((char, index) => {
          const isMS = char === "M" || char === "S"
          return (
            <span key={index} className={isMS ? "text-crimson" : "text-white"}>
              {char}
            </span>
          )
        })
      }
      
  return (
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
          onClick={onReturnToLanding}
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
            <span className="text-white font-elegant text-4xl font-bold tracking-wider">MS</span>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -inset-2 border border-transparent rounded-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-elegant font-bold mb-4 tracking-wide text-center">{renderTitle()}</h1>
        <p className="text-gray-300 text-center text-xl font-elegant italic">Demo Interactiva</p>
      </motion.div>

      {/* Menu Options mejorado */}
      <div className="space-y-6 w-full max-w-md">
        {[
          { icon: Play, label: "Juego", action: () => onNavigate("game"), description: "Comienza tu pesadilla" },
          {
            icon: ImageIcon,
            label: "Galería",
            action: () => onNavigate("gallery"),
            description: "Recuerdos visuales",
          },
          {
            icon: Settings,
            label: "Configuración",
            action: () => onNavigate("settings"),
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
}
