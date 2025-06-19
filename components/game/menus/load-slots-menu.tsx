"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Plus } from "lucide-react"
import { ImpactButton } from "../impact-button"
import type { SaveSlot } from "../types"

import { MenuState, ConfirmationType } from "../types"

interface LoadSlotsMenuProps {
  saveSlots: SaveSlot[]
  onNavigate: (menu: MenuState) => void
  onConfirmation: (type: ConfirmationType, slotId?: number) => void
}

export function LoadSlotsMenu({ saveSlots, onNavigate, onConfirmation }: LoadSlotsMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative z-10 p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-elegant font-bold text-crimson text-center mb-12"
        >
          Cargar Partida
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {saveSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-effect rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 ${slot.isEmpty ? "opacity-50" : "hover:border-crimson/60"}`}
              onClick={() => !slot.isEmpty && onConfirmation("loadGame", slot.id)}
            >
              {!slot.isEmpty ? (
                <>
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={slot.thumbnail || "/placeholder.svg"}
                      alt={slot.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2">{slot.name}</h3>
                    <p className="text-crimson text-sm mb-1">{slot.scene}</p>
                    <p className="text-gray-400 text-xs">{slot.date}</p>
                  </div>
                </>
              ) : (
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                    <span className="text-gray-600 font-medium">Slot Vacío</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => onNavigate("game")} variant="secondary" icon={ArrowLeft}>
            Volver
          </ImpactButton>
        </div>
      </div>
    </motion.div>
  )
}
