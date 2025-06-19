"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { LoadingType } from "../types"

interface LoadingScreenProps {
  loading: LoadingType
}

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
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
              <span className="text-white font-elegant text-3xl font-bold">MS</span>
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
}
