"use client"

import { motion } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"
import { ImpactButton } from "../impact-button"
import type { GalleryImage } from "../types"
import { galleryImages, getUnlockedCount, getTotalCount } from "../../../data/gallery"

import { MenuState } from "../types"

interface GalleryMenuProps {
  galleryImages: GalleryImage[]
  onNavigate: (menu: MenuState) => void
  onImageSelect: (image: GalleryImage | null) => void
}

export function GalleryMenu({ onNavigate, onImageSelect }: GalleryMenuProps) {
  const unlockedCount = getUnlockedCount()
  const totalCount = getTotalCount()

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative z-10 p-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-elegant font-bold text-crimson text-center mb-8 relative"
        >
          Galería de Recuerdos
          {/* Contador de imágenes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 right-0 bg-black/60 backdrop-blur-sm border border-crimson/30 rounded-lg px-3 py-1"
          >
            <span className="text-sm font-medium text-gray-300">
              <span className="text-crimson font-bold">{unlockedCount}</span>
              <span className="text-gray-500 mx-1">/</span>
              <span className="text-gray-400">{totalCount}</span>
            </span>
          </motion.div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 mb-12 font-elegant italic text-lg"
        >
          "Cada imagen cuenta una historia... algunas mejor olvidadas"
        </motion.p>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => image.unlocked && onImageSelect(image)}
            >
              <div
                className={`relative overflow-hidden rounded-xl ${image.unlocked ? "hover:scale-105" : ""} transition-all duration-500`}
              >
                <img
                  src={image.thumbnail || "/placeholder.svg"}
                  alt={image.title}
                  className={`w-full h-48 object-cover ${!image.unlocked ? "filter grayscale brightness-50" : ""}`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ${image.unlocked ? "group-hover:from-crimson/20" : ""}`}
                ></div>

                {!image.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <div className="text-center">
                      <X className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-400 text-sm font-medium">Bloqueado</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-medium text-sm mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                </div>

                {image.unlocked && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => onNavigate("main")} variant="secondary" icon={ArrowLeft}>
            Volver al Menú Principal
          </ImpactButton>
        </div>
      </div>
    </motion.div>
  )
}
