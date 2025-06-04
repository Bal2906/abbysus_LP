"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Clock, User, Eye, Tag } from "lucide-react"
import { newsItems } from "@/data/news"
import { Button } from "@/components/ui/button"
import { useGameStore } from "@/lib/store"
import { NewsModal } from "./news-modal"

export function NewsSection() {
  const { setSelectedNews, setNewsModalOpen } = useGameStore()

  const handleReadMore = (newsItem: any) => {
    setSelectedNews(newsItem)
    setNewsModalOpen(true)
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
    <section id="news" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-purple/5 to-transparent"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson rounded-full opacity-20"
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            <Eye className="h-12 w-12 text-crimson" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-elegant font-bold mb-8 text-gradient">Últimas Revelaciones</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-elegant italic">
            "Descubre los secretos que se ocultan detrás del desarrollo de Mortis Sabbat. Cada noticia revela una nueva
            pieza del rompecabezas que es nuestro mundo de terror psicológico."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              {/* Card Container */}
              <div className="glass-effect rounded-2xl overflow-hidden hover:border-crimson/50 transition-all duration-500 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden h-56">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="h-full">
                    <img
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                        item.category,
                      )} text-white text-sm rounded-full font-medium shadow-lg`}
                    >
                      {item.category}
                    </motion.div>
                  </div>

                  {/* Reading time */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 glass-effect px-2 py-1 rounded-full text-xs text-white">
                      <Clock className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 5) + 3} min</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta information */}
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-crimson" />
                      <span>
                        {new Date(item.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-crimson" />
                      <span className="text-xs">Redacción</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-crimson transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 flex-1">{item.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Terror", "Psicológico", "Innovación"].slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 bg-deep-purple/30 border border-crimson/20 rounded-full text-xs text-gray-400"
                      >
                        <Tag className="h-2 w-2" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more button */}
                  <motion.div whileHover={{ x: 5 }} className="mt-auto">
                    <Button
                      variant="ghost"
                      onClick={() => handleReadMore(item)}
                      className="text-crimson hover:text-white hover:bg-crimson p-0 h-auto font-medium group/btn w-full justify-start"
                    >
                      <span className="flex items-center gap-2">
                        Leer artículo completo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-crimson/0 group-hover:border-crimson/30 transition-all duration-500 pointer-events-none"
                whileHover={{
                  boxShadow: "0 0 30px rgba(220, 20, 60, 0.3)",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto border border-crimson/20">
            <h3 className="text-3xl font-elegant font-bold text-gradient mb-4">Mantente Informado</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Suscríbete a nuestro boletín para recibir las últimas noticias, actualizaciones exclusivas y contenido
              detrás de escenas de Mortis Sabbat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-black/50 border border-crimson/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crimson transition-colors"
              />
              <Button className="bg-gradient-to-r from-crimson to-blood-red text-white font-bold px-6 py-3 rounded-lg horror-shadow">
                Suscribirse
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <NewsModal />
    </section>
  )
}
