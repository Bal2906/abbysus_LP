"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, Tag, Share2, Bookmark, Eye } from "lucide-react"
import { useGameStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function NewsModal() {
  const { selectedNews, isNewsModalOpen, setNewsModalOpen } = useGameStore()
  const savedScrollPosition = useRef<number>(0)

  // Prevent body scroll when modal is open and save current position
  useEffect(() => {
    if (isNewsModalOpen) {
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
  }, [isNewsModalOpen])

  if (!selectedNews) return null

  const handleClose = () => {
    setNewsModalOpen(false)
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "gameplay":
        return "from-crimson to-blood-red"
      case "audio":
        return "from-deep-purple to-midnight"
      case "lanzamiento":
        return "from-crimson to-deep-purple"
      default:
        return "from-crimson to-blood-red"
    }
  }

  return (
    <AnimatePresence>
      {isNewsModalOpen && (
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
            className="absolute inset-0 bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Particle effect in backdrop */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-crimson rounded-full opacity-30"
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
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

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.6,
            }}
            className="relative w-full h-full max-w-5xl max-h-[95vh] m-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-crimson/60 via-deep-purple/60 to-crimson/60 rounded-2xl"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "gradientMove 10s linear infinite",
                }}
              />
            </div>

            {/* Modal Content */}
            <div className="glass-effect rounded-2xl overflow-hidden flex flex-col h-full relative">
              {/* Header Section */}
              <div className="relative">
                {/* Hero Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full"
                  >
                    <img
                      src={selectedNews.imageUrl || "/placeholder.svg"}
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent"></div>

                  {/* Close button */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-crimson/20 rounded-full bg-black/50 backdrop-blur-sm w-12 h-12"
                      onClick={handleClose}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="absolute top-4 left-4"
                  >
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(
                        selectedNews.category,
                      )} rounded-full text-white font-medium text-sm shadow-lg`}
                    >
                      {selectedNews.category}
                    </div>
                  </motion.div>

                  {/* Article Meta Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-2xl lg:text-4xl font-elegant font-bold text-white mb-4 leading-tight"
                    >
                      {selectedNews.title}
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="flex flex-wrap items-center gap-4 text-gray-300 text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-crimson" />
                        <span>
                          {new Date(selectedNews.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-crimson" />
                        <span>{selectedNews.author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-crimson" />
                        <span>{selectedNews.readTime} min de lectura</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-crimson" />
                        <span>{Math.floor(Math.random() * 1000) + 500} vistas</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-6 lg:p-8 space-y-6">
                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-wrap gap-2"
                  >
                    {selectedNews.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-1 px-3 py-1 bg-deep-purple/30 border border-crimson/30 rounded-full text-xs text-gray-300 hover:border-crimson/60 transition-all duration-300"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Article Content */}
                  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
>
  <div
    className="prose prose-invert prose-crimson max-w-none"
    style={{
      "--tw-prose-body": "rgb(209 213 219)",
      "--tw-prose-headings": "rgb(248 248 255)",
      "--tw-prose-lead": "rgb(156 163 175)",
      "--tw-prose-links": "rgb(220 20 60)",
      "--tw-prose-bold": "rgb(248 248 255)",
      "--tw-prose-counters": "rgb(156 163 175)",
      "--tw-prose-bullets": "rgb(220 20 60)",
      "--tw-prose-hr": "rgb(75 85 99)",
      "--tw-prose-quotes": "rgb(248 248 255)",
      "--tw-prose-quote-borders": "rgb(220 20 60)",
      "--tw-prose-captions": "rgb(156 163 175)",
      "--tw-prose-code": "rgb(248 248 255)",
      "--tw-prose-pre-code": "rgb(209 213 219)",
      "--tw-prose-pre-bg": "rgb(31 41 55)",
      "--tw-prose-th-borders": "rgb(75 85 99)",
      "--tw-prose-td-borders": "rgb(55 65 81)",
    } as React.CSSProperties}
    dangerouslySetInnerHTML={{ __html: selectedNews.content }}
  />
</motion.div>


                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-wrap gap-4 pt-6 border-t border-crimson/20"
                  >
                    <Button
                      variant="outline"
                      className="border-crimson/50 text-crimson hover:bg-crimson hover:text-white flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </Button>

                    <Button
                      variant="outline"
                      className="border-crimson/50 text-crimson hover:bg-crimson hover:text-white flex items-center gap-2"
                    >
                      <Bookmark className="h-4 w-4" />
                      Guardar
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}