"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, User, Crown, Shield, Skull, ExternalLink } from "lucide-react"
import { useGameStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const roleIcons = {
  Protagonista: Crown,
  Antagonista: Skull,
  Aliada: Shield,
  Mentor: User,
}

export function CharacterModal() {
  const { selectedCharacter, isCharacterModalOpen, setCharacterModalOpen } = useGameStore()
  const router = useRouter()
  const savedScrollPosition = useRef<number>(0)

  // Prevent body scroll when modal is open and save current position
  useEffect(() => {
    if (isCharacterModalOpen) {
      // Save current scroll position
      savedScrollPosition.current = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${savedScrollPosition.current}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Restore scroll position
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""

      // Restore to the saved scroll position
      if (savedScrollPosition.current > 0) {
        window.scrollTo({
          top: savedScrollPosition.current,
          behavior: "instant",
        })
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [isCharacterModalOpen])

  if (!selectedCharacter) return null

  const handleViewFullProfile = () => {
    setCharacterModalOpen(false)
    // Small delay to ensure modal closes before navigation
    setTimeout(() => {
      router.push(`/characters/${selectedCharacter.id}`)
    }, 100)
  }

  const handleClose = () => {
    setCharacterModalOpen(false)
  }

  const IconComponent = roleIcons[selectedCharacter.role as keyof typeof roleIcons] || User

  return (
    <AnimatePresence>
      {isCharacterModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          {/* Enhanced Backdrop with particles */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Particle effect in backdrop */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-crimson rounded-full opacity-40"
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
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
          </motion.div>

          {/* Modal Container - Fixed positioning and scrolling */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.5,
            }}
            className="relative w-full h-full max-w-6xl max-h-[95vh] m-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-crimson/50 via-deep-purple/50 to-crimson/50 rounded-xl"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "gradientMove 8s linear infinite",
                }}
              />
            </div>

            {/* Modal Content with proper scrolling */}
            <div className="glass-effect rounded-xl overflow-hidden flex flex-col h-full">
              {/* Close button - Fixed position */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-20"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-crimson/20 rounded-full bg-black/50 backdrop-blur-sm"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-2 min-h-full">
                  {/* Enhanced Image Section */}
                  <div className="relative h-[300px] lg:h-auto overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/30 to-transparent z-0"></div>

                    {/* Character image with parallax effect */}
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full"
                    >
                      <img
                        src={selectedCharacter.imageUrl || "/placeholder.svg"}
                        alt={selectedCharacter.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent"></div>

                    {/* Character role badge with icon */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute top-4 left-4 flex items-center space-x-2"
                    >
                      <div className="flex items-center space-x-2 glass-effect px-3 py-1.5 rounded-full border border-crimson/30">
                        <IconComponent className="h-4 w-4 text-crimson" />
                        <span className="text-white font-medium text-sm">{selectedCharacter.role}</span>
                      </div>
                    </motion.div>

                    {/* Character name with animated reveal */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-2xl lg:text-3xl font-elegant font-bold text-white mb-2"
                      >
                        {selectedCharacter.name}
                      </motion.h2>

                      {/* Animated underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "40%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-[2px] bg-gradient-to-r from-crimson to-transparent"
                      />
                    </div>

                    {/* Subtle glitch effect */}
                    <motion.div
                      className="absolute inset-0 bg-crimson/10"
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 8 }}
                    />
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-4 lg:p-8 space-y-6 relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 to-transparent z-0"></div>

                    {/* Floating orbs */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`orb-${i}`}
                        className="absolute rounded-full bg-gradient-to-r from-crimson/5 to-deep-purple/5 blur-xl"
                        animate={{
                          x: [0, 20, 0],
                          y: [0, -20, 0],
                          scale: [0.9, 1.1, 0.9],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 15 + Math.random() * 10,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 5,
                        }}
                        style={{
                          right: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: `${30 + Math.random() * 60}px`,
                          height: `${30 + Math.random() * 60}px`,
                        }}
                      />
                    ))}

                    {/* Description section with animated reveal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative z-10"
                    >
                      <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 flex items-center">
                        <span className="inline-block w-1 h-5 bg-crimson mr-3"></span>
                        Descripción
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {selectedCharacter.description}
                      </p>
                    </motion.div>

                    {/* Personality traits with staggered animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="relative z-10"
                    >
                      <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 flex items-center">
                        <span className="inline-block w-1 h-5 bg-crimson mr-3"></span>
                        Personalidad
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCharacter.personality.map((trait, index) => (
                          <motion.span
                            key={trait}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            className="px-2 py-1 lg:px-3 lg:py-1 bg-deep-purple/30 border border-crimson/30 rounded-full text-xs lg:text-sm text-gray-300 hover:border-crimson/60 transition-all duration-300"
                          >
                            {trait}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Backstory with animated reveal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="relative z-10"
                    >
                      <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 flex items-center">
                        <span className="inline-block w-1 h-5 bg-crimson mr-3"></span>
                        Historia
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {selectedCharacter.backstory}
                      </p>
                    </motion.div>

                    {/* View full profile button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="pt-4 relative z-10"
                    >
                      <Button
                        onClick={handleViewFullProfile}
                        className="w-full bg-gradient-to-r from-crimson to-blood-red text-white font-bold py-4 lg:py-6 rounded-lg horror-shadow group relative overflow-hidden text-sm lg:text-base"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          Ver Perfil Completo
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
