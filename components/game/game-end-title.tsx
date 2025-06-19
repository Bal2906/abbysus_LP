"use client"

import { motion } from "framer-motion"
import { ImpactButton } from "./impact-button"

interface GameEndTitleProps {
  onContinue: () => void
}

export function GameEndTitle({ onContinue }: GameEndTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian flex items-center justify-center"
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson rounded-full opacity-20"
            animate={{
              y: [window.innerHeight + 50, -50],
              x: [0, Math.sin(i) * 100],
              opacity: [0, 0.4, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-8xl font-elegant font-bold text-gradient mb-8">Fin del Juego</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <p className="text-gray-300 text-xl md:text-2xl font-elegant italic mb-12">
            "Las sombras de Morti Sabbat guardan tus secretos..."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-12"
        >
          <p className="text-gray-400 font-elegant mb-8">Gracias por jugar</p>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block"
          >
            <ImpactButton onClick={onContinue} variant="primary">
              Continuar
            </ImpactButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de resplandor de fondo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: "radial-gradient(circle at center, rgba(220, 20, 60, 0.1) 0%, transparent 50%)",
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
    </motion.div>
  )
}
