"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useSound } from "use-sound"

export function GameScene() {
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [playNextSound] = useSound("/sounds/next.wav", { volume: 0.3 })
  const [playTypeSound] = useSound("/sounds/type.wav", { volume: 0.1 })

  // Simulate typing effect
  useEffect(() => {
    if (isTextVisible && !isTyping) {
      setIsTyping(true)
      let text = "Esta es una prueba de texto de la escena del juego..."
      let i = 0
      
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setCurrentText(prev => prev + text[i])
          playTypeSound()
          i++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }
  }, [isTextVisible, isTyping, playTypeSound])

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Static background image */}
        <img 
          src="/backgrounds/forest.jpg" 
          alt="Forest scene"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Character sprites */}
      <div className="absolute bottom-1/4 left-1/4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64"
        >
          <img 
            src="/characters/character1.png" 
            alt="Character"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Text box */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-dark-void/90 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-400 font-bold">Nombre del personaje:</span>
            <span className="text-white">Personaje 1</span>
          </div>
          <div className="text-white text-lg leading-relaxed">
            {currentText}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            playNextSound()
            setIsTextVisible(false)
            setCurrentText("")
          }}
        >
          Atrás
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            playNextSound()
            setIsTextVisible(!isTextVisible)
          }}
        >
          Avanzar
        </Button>
      </div>

      {/* Quick menu */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full p-2"
          onClick={() => console.log("Open quick menu")}
        >
          ⋮
        </Button>
      </div>
    </div>
  )
}
