"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface TitleScreenProps {
  onContinue: () => void
}

export function TitleScreen({ onContinue }: TitleScreenProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const particleCount = isMobile ? 15 : 25

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
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="min-h-screen relative overflow-hidden cursor-pointer"
      onClick={onContinue}
    >
      {/* Background con gradiente más dramático */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Sistema de partículas característico del juego */}
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
      {/* Partículas adicionales más sutiles */}
      <div className="absolute inset-0">
        {[...Array(Math.floor(particleCount * 0.6))].map((_, i) => (
          <motion.div
            key={`subtle-${i}`}
            className="absolute w-0.5 h-0.5 bg-deep-purple rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Logo principal con MS */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className="mb-12 relative"
        >
          {/* Anillos decorativos alrededor del logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -inset-8 border border-transparent rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -inset-12 border border-transparent rounded-full"
          />

          {/* Logo MS con efectos */}
          <motion.div
            className="w-40 h-40 bg-gradient-to-br from-crimson via-blood-red to-deep-purple rounded-3xl flex items-center justify-center relative overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 30px rgba(220, 20, 60, 0.4)",
                "0 0 60px rgba(220, 20, 60, 0.8)",
                "0 0 30px rgba(220, 20, 60, 0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {/* Efecto de brillo interno */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <span className="text-white font-elegant text-5xl font-bold tracking-wider relative z-10">MS</span>
          </motion.div>
        </motion.div>

        {/* Título del juego con fuente personalizada y colores específicos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-elegant font-bold mb-6 tracking-wide">{renderTitle()}</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 2 }}
            className="h-1 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-4"
          />
          <p className="text-gray-300 text-xl md:text-2xl font-elegant italic tracking-wide">Demo Interactiva</p>
        </motion.div>

        {/* Mensaje de continuar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center"
        >
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-white text-lg md:text-xl font-elegant mb-4"
          >
            Pulsa para continuar
          </motion.p>

          {/* Indicador visual */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-6 h-6 mx-auto border-2 border-crimson rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-crimson rounded-full" />
          </motion.div>
        </motion.div>

        {/* Texto atmosférico en la parte inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-500 text-sm font-elegant italic">
            "En las sombras de Ravenshollow, los secretos aguardan..."
          </p>
        </motion.div>
      </div>

      {/* Efecto de velo que se desvanece al hacer clic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />
    </motion.div>
  )
}
