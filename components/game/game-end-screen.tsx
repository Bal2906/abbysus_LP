"use client"

import { motion } from "framer-motion"
import { Trophy, Heart, Star, RotateCcw, Home, Award } from "lucide-react"
import { ImpactButton } from "./impact-button"

interface GameEndScreenProps {
  onContinue: () => void
  onMainMenu: () => void
  onRestart: () => void
  stats: {
    endingType: "good" | "bad" | "neutral"
    playerChoices: number
    completionTime: string
  }
}

export function GameEndScreen({
  onContinue,
  onMainMenu,
  onRestart,
  stats,
}: GameEndScreenProps) {
  const getEndingData = () => {
    switch (stats.endingType) {
      case "good":
        return {
          title: "Final Esperanzador",
          subtitle: "Has encontrado la luz en la oscuridad",
          description: "Tus decisiones han llevado a Elena hacia un destino de redención y esperanza.",
          color: "#4ADE80",
          icon: Trophy,
          particles: "✨",
        }
      case "bad":
        return {
          title: "Final Siniestro",
          subtitle: "La oscuridad ha prevalecido",
          description: "Las sombras de Morti Sabbat han reclamado otra alma perdida.",
          color: "#DC143C",
          icon: Heart,
          particles: "🔥",
        }
      default:
        return {
          title: "Final Incierto",
          subtitle: "El destino permanece en las sombras",
          description: "Elena ha encontrado respuestas, pero el precio de la verdad aún está por verse.",
          color: "#8B5CF6",
          icon: Star,
          particles: "💫",
        }
    }
  }

  const endingData = getEndingData()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian flex items-center justify-center"
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            animate={{
              y: [window.innerHeight + 50, -50],
              x: [0, Math.sin(i) * 100],
              rotate: [0, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {endingData.particles}
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 text-center">
        {/* Icono principal */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", damping: 15 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32">
            <motion.div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${endingData.color}40, ${endingData.color}20)`,
                border: `2px solid ${endingData.color}60`,
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${endingData.color}40`,
                  `0 0 40px ${endingData.color}60`,
                  `0 0 20px ${endingData.color}40`,
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <endingData.icon className="h-16 w-16" style={{ color: endingData.color }} />
            </motion.div>

            {/* Anillos animados */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 border border-crimson/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-2 border border-deep-purple/20 rounded-full"
            />
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-elegant font-bold text-gradient mb-4">{endingData.title}</h1>
          <h2 className="text-xl md:text-2xl font-elegant italic" style={{ color: endingData.color }}>
            {endingData.subtitle}
          </h2>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto font-elegant"
        >
          {endingData.description}
        </motion.p>

        {/* Estadísticas del juego */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="glass-effect p-4 rounded-xl border border-crimson/20">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-6 w-6 text-crimson mr-2" />
              <span className="text-crimson font-elegant font-bold">Final Alcanzado</span>
            </div>
            <p className="text-white text-lg font-elegant">{endingData.title}</p>
          </div>

          <div className="glass-effect p-4 rounded-xl border border-crimson/20">
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-6 w-6 text-crimson mr-2" />
              <span className="text-crimson font-elegant font-bold">Decisiones</span>
            </div>
            <p className="text-white text-lg font-elegant">{stats.playerChoices} elecciones</p>
          </div>

          <div className="glass-effect p-4 rounded-xl border border-crimson/20">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-crimson mr-2" />
              <span className="text-crimson font-elegant font-bold">Tiempo</span>
            </div>
            <p className="text-white text-lg font-elegant">{stats.completionTime}</p>
          </div>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ImpactButton onClick={onContinue} variant="primary" size="large" icon={Trophy}>
              Ver Créditos
            </ImpactButton>

            <ImpactButton onClick={onRestart} variant="secondary" size="large" icon={RotateCcw}>
              Jugar de Nuevo
            </ImpactButton>

            <ImpactButton onClick={onMainMenu} variant="outline" size="large" icon={Home}>
              Menú Principal
            </ImpactButton>
          </div>
        </motion.div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-8"
        >
          <p className="text-gray-400 font-elegant italic text-sm">
            "Cada final es un nuevo comienzo en las sombras de Morti Sabbat..."
          </p>
        </motion.div>
      </div>

      {/* Efecto de resplandor de fondo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at center, ${endingData.color}10 0%, transparent 50%)`,
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
    </motion.div>
  )
}
