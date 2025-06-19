"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GameInterface } from "@/components/game-interface"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

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

  useEffect(() => {
    // Simular carga del juego
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Reducir partículas en móviles
  const particleCount = isMobile ? 8 : 15

  return (
    <>
      {/* NO NAVBAR - La demo es completamente inmersiva */}

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-dark-void flex items-center justify-center"
          >
            {/* Particle effects durante la carga */}
            <div className="absolute inset-0">
              {[...Array(particleCount)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-crimson rounded-full opacity-40"
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-crimson to-deep-purple rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-elegant text-2xl font-bold">MS</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-elegant font-bold tracking-wide text-center mb-4">{renderTitle()}</h1>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="text-gray-300 font-elegant italic"
              >
                Iniciando experiencia...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Interface */}
      {!isLoading && <GameInterface />}
    </>
  )
}
