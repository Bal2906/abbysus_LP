"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { characters } from "@/data/characters"
import { CharacterModal } from "./character-modal"
import { useGameStore } from "@/lib/store"
import { ChevronLeft, ChevronRight, User, Crown, Shield, Skull } from "lucide-react"
import { useRouter } from "next/navigation"

const roleIcons = {
  Protagonista: Crown,
  Antagonista: Skull,
  Aliada: Shield,
  Mentor: User,
}

export function CharactersSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { setSelectedCharacter, setCharacterModalOpen } = useGameStore()
  const router = useRouter()

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character)
    setCharacterModalOpen(true)
  }

  const navigateToCharacterPage = (character: any) => {
    router.push(`/characters/${character.id}`)
  }

  const nextCharacter = () => {
    setSelectedIndex((prev) => (prev + 1) % characters.length)
  }

  const prevCharacter = () => {
    setSelectedIndex((prev) => (prev - 1 + characters.length) % characters.length)
  }

  return (
    <section id="characters" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-purple/5 to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 glass-effect rounded-full mb-8"
          >
            <User className="h-12 w-12 text-crimson" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-elegant font-bold mb-8 text-gradient">Almas Atormentadas</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-elegant italic">
            "Cada personaje esconde secretos que podrían cambiar el curso de tu investigación. En un lugar donde nada es
            lo que parece, ¿en quién puedes confiar?"
          </p>
        </motion.div>

        {/* Main Character Display */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Character Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={characters[selectedIndex].imageUrl || "/placeholder.svg"}
                  alt={characters[selectedIndex].name}
                  className="w-full h-[600px] object-cover"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent"></div>

                {/* Character Role Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                    {(() => {
                      const IconComponent = roleIcons[characters[selectedIndex].role as keyof typeof roleIcons] || User
                      return <IconComponent className="h-5 w-5 text-crimson" />
                    })()}
                    <span className="text-white font-medium">{characters[selectedIndex].role}</span>
                  </div>
                </div>

                {/* Character Name Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-elegant font-bold text-white mb-2"
                  >
                    {characters[selectedIndex].name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-300 text-lg"
                  >
                    {characters[selectedIndex].description}
                  </motion.p>
                </div>

                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 bg-crimson/20"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 8 }}
                />
              </div>
            </motion.div>

            {/* Character Details */}
            <motion.div
              key={`details-${selectedIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl font-bold text-crimson mb-4">Personalidad</h4>
                <div className="flex flex-wrap gap-3">
                  {characters[selectedIndex].personality.map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gray-300 border border-crimson/30 hover:border-crimson/60 transition-all duration-300"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-crimson mb-4">Historia</h4>
                <p className="text-gray-300 leading-relaxed text-lg">{characters[selectedIndex].backstory}</p>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCharacterClick(characters[selectedIndex])}
                  className="flex-1 bg-gradient-to-r from-crimson to-blood-red text-white font-bold px-6 py-4 rounded-lg horror-shadow"
                >
                  Conocer Más
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateToCharacterPage(characters[selectedIndex])}
                  className="flex-1 border-2 border-crimson text-crimson hover:bg-crimson hover:text-white font-bold px-6 py-4 rounded-lg transition-colors duration-300"
                >
                  Perfil Completo
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCharacter}
              className="p-4 glass-effect rounded-full hover:border-crimson/50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-crimson" />
            </motion.button>

            {/* Character Indicators */}
            <div className="flex space-x-4">
              {characters.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-crimson shadow-lg shadow-crimson/50" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCharacter}
              className="p-4 glass-effect rounded-full hover:border-crimson/50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-crimson" />
            </motion.button>
          </div>
        </div>

        {/* Character Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                index === selectedIndex
                  ? "ring-2 ring-crimson shadow-lg shadow-crimson/30"
                  : "hover:ring-1 hover:ring-crimson/50"
              }`}
            >
              <img
                src={character.imageUrl || "/placeholder.svg"}
                alt={character.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-sm font-medium truncate">{character.name}</p>
                <p className="text-gray-300 text-xs">{character.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CharacterModal />
    </section>
  )
}
