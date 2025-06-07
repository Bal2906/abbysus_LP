"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ImpactButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "large"
  disabled?: boolean
  className?: string
  icon?: React.ComponentType<{ className?: string }>
}

export function ImpactButton({
  children,
  onClick,
  variant = "primary",
  size = "default",
  disabled = false,
  className = "",
  icon: Icon,
}: ImpactButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`relative overflow-hidden ${size === "large" ? "w-full" : ""}`}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
        relative overflow-hidden group transition-all duration-500
        ${size === "large" ? "w-full py-6 text-lg" : "py-4"}
        ${
          variant === "primary"
            ? "bg-gradient-to-r from-crimson via-blood-red to-crimson bg-size-200 bg-pos-0 hover:bg-pos-100 text-white border-0 shadow-lg shadow-crimson/30 hover:shadow-crimson/50"
            : variant === "secondary"
              ? "bg-gradient-to-r from-crimson/80 to-deep-purple/80 border-2 border-crimson/60 text-white hover:bg-gradient-to-r hover:from-crimson hover:to-blood-red hover:border-crimson shadow-lg shadow-crimson/20 hover:shadow-crimson/40"
              : variant === "outline"
                ? "bg-gradient-to-r from-crimson/10 to-deep-purple/10 border-2 border-crimson/30 text-white hover:bg-gradient-to-r hover:from-crimson/20 hover:to-blood-red/20 hover:border-crimson/60 shadow-md shadow-crimson/10 hover:shadow-crimson/30 backdrop-blur-sm"
                : "glass-effect border border-crimson/30 text-white hover:bg-crimson/20 hover:border-crimson/60 shadow-md shadow-crimson/10 hover:shadow-crimson/20"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      >
        {/* Efecto de brillo animado mejorado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Contenido del botón */}
        <span className="relative z-10 flex items-center justify-center gap-3 font-elegant font-medium">
          {Icon && <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />}
          {children}
        </span>

        {/* Partículas en hover mejoradas */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Efecto de resplandor en los bordes */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 20px ${variant === "primary" ? "#DC143C" : variant === "outline" ? "#DC143C" : "#8B0000"}40`,
          }}
        />
      </Button>
    </motion.div>
  )
}
