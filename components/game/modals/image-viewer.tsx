"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { GalleryImage } from "../types"

interface ImageViewerProps {
  selectedImage: GalleryImage | null
  onClose: () => void
}

export function ImageViewer({ selectedImage, onClose }: ImageViewerProps) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.fullImage || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />

            <div className="absolute bottom-0 left-0 right-0 glass-effect p-6 rounded-b-xl">
              <h3 className="text-2xl font-elegant font-bold text-crimson mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-crimson/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
