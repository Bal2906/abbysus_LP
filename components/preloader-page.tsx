"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface PreloaderPageProps {
  onLoadComplete: () => void
}

export function PreloaderPage({ onLoadComplete }: PreloaderPageProps) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mensajes temáticos de terror psicológico
  const messages = [
    "Iniciando simulación mental...",
    "Calibrando niveles de cordura...",
    "Cargando pesadillas personalizadas...",
    "Analizando tus miedos más profundos...",
    "Preparando laberintos psicológicos...",
    "Desvaneciendo la línea entre realidad y ficción...",
    "Bienvenido a MortiSabbat...",
  ]

  // Reducir la cantidad de partículas en móviles
  const particleCount = isMobile ? 10 : 20
  const orbCount = isMobile ? 3 : 6
  const horrorElementCount = isMobile ? 5 : 10

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Esperar un momento antes de completar la carga
          setTimeout(() => {
            onLoadComplete()
          }, 1000)
          return 100
        }
        return prev + Math.floor(Math.random() * 3) + 1
      })
    }, 100)

    // Cambiar mensajes
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 2500)

    return () => {
      clearInterval(interval)
      clearInterval(messageInterval)
    }
  }, [onLoadComplete, messages.length])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-void overflow-hidden"
      >
        {/* Fondo cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-dark-void to-shadow-gray"></div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]"></div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Subtle radial gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.15),transparent_70%)]"></div>
        </div>

        {/* Enhanced Particle System - Más elegante */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-crimson rounded-full opacity-20"
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: isMobile ? 10 : 15 + Math.random() * 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                ease: [0.43, 0.13, 0.23, 0.96], // Easing personalizado para movimiento más elegante
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Horror Elements - Más sutiles y elegantes */}
        <div className="absolute inset-0">
          {[...Array(horrorElementCount)].map((_, i) => (
            <motion.div
              key={`horror-${i}`}
              className="absolute w-1 h-1 bg-deep-purple rounded-full opacity-15"
              animate={{
                x: [0, 15, 0],
                y: [0, -15, 0],
                opacity: [0.05, 0.15, 0.05],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: isMobile ? 12 : 18 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Orbs - Más elegantes */}
        <div className="absolute inset-0">
          {[...Array(orbCount)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-crimson/5 to-deep-purple/5 blur-xl"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [0.9, 1.05, 0.9],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: isMobile ? 15 : 25 + Math.random() * 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * (isMobile ? 30 : 60)}px`,
                height: `${20 + Math.random() * (isMobile ? 30 : 60)}px`,
              }}
            />
          ))}
        </div>

        {/* Contenedor principal con efecto de vidrio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center"
        >
          {/* Logo con animación elegante */}
          <motion.div
            className="relative mb-10"
            animate={{
              filter: [
                "drop-shadow(0 0 8px rgba(220,20,60,0.3))",
                "drop-shadow(0 0 12px rgba(220,20,60,0.5))",
                "drop-shadow(0 0 8px rgba(220,20,60,0.3))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              {/* Logo base */}
              <div className="absolute inset-0 bg-gradient-to-br from-crimson to-deep-purple rounded-lg"></div>

              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Borde animado */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border border-crimson/20 rounded-lg"
              />

              {/* Segundo borde animado */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border border-deep-purple/10 rounded-lg"
                style={{ margin: "-3px" }}
              />

              {/* Letra R central */}
              <div className="absolute inset-0 flex items-center justify-center text-white/80 font-elegant text-4xl font-bold">
                R
              </div>
            </div>

            {/* Efecto de glitch sutil */}
            <AnimatePresence>
              {Math.random() > 0.97 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 bg-crimson/30 mix-blend-overlay"
                  style={{ filter: "blur(1px)" }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Game Title con efecto elegante */}
          <motion.h1
            animate={{
              textShadow: ["0 0 3px rgba(220,20,60,0.3)", "0 0 6px rgba(220,20,60,0.4)", "0 0 3px rgba(220,20,60,0.3)"],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-elegant font-bold mb-10 text-crimson relative z-10 tracking-wider"
          >
            MortiSabbat
          </motion.h1>

          {/* Loading Messages con transiciones elegantes */}
          <div className="h-8 mb-10 text-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-gray-300 font-elegant italic text-lg sm:text-xl"
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar elegante */}
          <div className="w-full max-w-xs mb-4 relative">
            {/* Barra de fondo con efecto de vidrio */}
            <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                className="h-full bg-gradient-to-r from-crimson to-deep-purple"
              />
            </div>

            {/* Efecto de brillo en la barra */}
            <motion.div
              className="absolute top-0 left-0 h-1 w-10 bg-white/20 blur-sm"
              animate={{
                x: ["-100%", `${progress}%`],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            />
          </div>

          {/* Progress Percentage con estilo elegante */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span className="font-medium tracking-wider">{progress}%</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-1 bg-crimson rounded-full"
            />
            <span className="text-xs text-gray-500">CARGANDO</span>
          </div>
        </motion.div>

        {/* Líneas horizontales sutiles */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/10 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/10 to-transparent"></div>

        {/* Glitch Effect - Elegante y sutil */}
        <AnimatePresence>
          {progress > 95 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, repeat: 2 }}
              className="fixed inset-0 bg-crimson/5 pointer-events-none z-20"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
