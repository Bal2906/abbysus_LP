"use client"

import { motion } from "framer-motion"
import { Plus, Upload, ArrowLeft } from "lucide-react"
import { ImpactButton } from "../impact-button"

import { MenuState, ConfirmationType } from "../types"

interface GameMenuProps {
  onNavigate: (menu: MenuState) => void
  onConfirmation: (type: ConfirmationType) => void
}

export function GameMenu({ onNavigate, onConfirmation }: GameMenuProps) {
  return (
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
            action: () => onConfirmation("newGame"),
            icon: Plus,
            description: "Inicia una nueva historia",
          },
          {
            label: "Cargar Partida",
            action: () => onNavigate("loadSlots"),
            icon: Upload,
            description: "Continúa tu pesadilla",
          },
          {
            label: "Atrás",
            action: () => onNavigate("main"),
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
}
