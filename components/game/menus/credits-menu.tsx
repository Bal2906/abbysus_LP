"use client"

import { motion } from "framer-motion"
import { ImpactButton } from "../impact-button"

import { MenuState } from "../types"

interface CreditsMenuProps {
  onNavigate: (menu: MenuState) => void
}

export function CreditsMenu({ onNavigate }: CreditsMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative z-10 flex items-center justify-center p-6"
    >
      <div className="text-center max-w-2xl">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-elegant font-bold text-gradient mb-8">Créditos</h1>

          <div className="space-y-8 text-gray-300">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Dirección</h3>
              <p className="text-lg">Estudio Morti Sabbat</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Música</h3>
              <p className="text-lg">Akira Yamaoka</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Arte</h3>
              <p className="text-lg">Equipo de Arte Morti Sabbat</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-4">Agradecimientos Especiales</h3>
              <p className="text-lg">A todos los que se atrevieron a entrar en Morti Sabbat</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="mt-12">
            <ImpactButton onClick={() => onNavigate("gameResults")} variant="primary">
              Continuar
            </ImpactButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
