"use client"

import { motion } from "framer-motion"
import { Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Reducir la cantidad de partículas en móviles
  const particleCount = isMobile ? 10 : 25
  const orbCount = isMobile ? 5 : 12
  const horrorElementCount = isMobile ? 6 : 15

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(48,25,52,0.1),transparent)]"></div>
      </div>

      {/* Enhanced Particle System - Optimizado para móviles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson rounded-full opacity-60"
            animate={{
              y: [0, -60, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: isMobile ? 4 : 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Horror Elements - Optimizado para móviles */}
      <div className="absolute inset-0">
        {[...Array(horrorElementCount)].map((_, i) => (
          <motion.div
            key={`horror-${i}`}
            className="absolute w-2 h-2 bg-deep-purple rounded-full opacity-40"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: isMobile ? 5 : 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs - Optimizado para móviles */}
      <div className="absolute inset-0">
        {[...Array(orbCount)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-crimson/20 to-deep-purple/20 blur-xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: isMobile ? 7 : 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * (isMobile ? 30 : 50)}px`,
              height: `${20 + Math.random() * (isMobile ? 30 : 50)}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-elegant font-bold mb-6 sm:mb-8 relative"
          >
            <span className="relative inline-block">
              <span className="text-crimson">Mortis Sabbat</span>
              <motion.div
                className="absolute inset-0 text-crimson opacity-20"
                animate={{
                  x: [0, 2, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                }}
              >
                Mortis Sabbat
              </motion.div>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-elegant italic px-4">
              "La mente es el laberinto más peligroso"
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Sumérgete en una experiencia de terror psicológico donde la realidad se desvanece y cada decisión puede
              ser la diferencia entre la cordura y la locura. En Mortis Sabbat, tus peores pesadillas cobran vida.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-crimson hover:bg-blood-red text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg horror-shadow relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Play className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 relative z-10" />
              <span className="relative z-10">Entrar al Abismo</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-crimson text-crimson hover:bg-crimson hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-crimson"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Download className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 relative z-10" />
              <span className="relative z-10">Demo Gratuita</span>
            </Button>
          </motion.div>

          {/* Platform Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-center px-4"
          >
            
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-crimson rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1 h-2 sm:h-3 bg-crimson rounded-full mt-1 sm:mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
