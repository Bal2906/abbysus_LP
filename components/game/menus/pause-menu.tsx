"use client"

import { motion } from "framer-motion"
import { Play, Save, Settings, Home } from "lucide-react"
import { ImpactButton } from "../impact-button"

interface PauseMenuProps {
  onNavigate: (menu: string) => void
}

export function PauseMenu({ onNavigate }: PauseMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
      onClick={() => onNavigate("narrative")}
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
          <ImpactButton onClick={() => onNavigate("narrative")} variant="primary" size="large" icon={Play}>
            Continuar
          </ImpactButton>
          <ImpactButton onClick={() => onNavigate("saveSlots")} variant="secondary" size="large" icon={Save}>
            Guardar Partida
          </ImpactButton>
          <ImpactButton onClick={() => onNavigate("settings")} variant="secondary" size="large" icon={Settings}>
            Configuración
          </ImpactButton>
          <ImpactButton onClick={() => onNavigate("main")} variant="outline" size="large" icon={Home}>
            Menú Principal
          </ImpactButton>
        </div>
      </motion.div>
    </motion.div>
  )
}
