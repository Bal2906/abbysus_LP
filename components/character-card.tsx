"use client"

import { motion } from "framer-motion"
import { useGameStore } from "@/lib/store"
import type { Character } from "@/data/characters"

interface CharacterCardProps {
  character: Character
  index: number
}

export function CharacterCard({ character, index }: CharacterCardProps) {
  const { setSelectedCharacter, setCharacterModalOpen } = useGameStore()

  const handleClick = () => {
    setSelectedCharacter(character)
    setCharacterModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-effect rounded-lg overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={character.imageUrl || "/placeholder.svg"}
          alt={character.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-crimson/80 text-white text-sm rounded-full mb-2">
            {character.role}
          </span>
          <h3 className="text-xl font-elegant font-bold text-white">{character.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{character.description}</p>
        <motion.div className="mt-4 text-crimson font-medium text-sm" whileHover={{ x: 5 }}>
          Conocer más →
        </motion.div>
      </div>
    </motion.div>
  )
}
