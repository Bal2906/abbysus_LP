"use client"

import { motion } from "framer-motion"
import { X, Plus } from "lucide-react"
import { ImpactButton } from "../impact-button"
import type { SaveSlot } from "../types"

import { MenuState, ConfirmationType } from "../types"

interface SaveSlotsMenuProps {
  saveSlots: SaveSlot[]
  onNavigate: (menu: MenuState) => void
  onConfirmation: (type: ConfirmationType, slotId?: number) => void
}

export function SaveSlotsMenu({ saveSlots, onNavigate, onConfirmation }: SaveSlotsMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
      onClick={() => onNavigate("narrative")}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="glass-effect rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-elegant font-bold text-crimson text-center mb-8">Guardar Partida</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {saveSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-effect rounded-lg overflow-hidden cursor-pointer group hover:border-crimson/60 transition-all duration-300"
              onClick={() => onConfirmation(slot.isEmpty ? "saveGame" : "overwriteSave", slot.id)}
            >
              {!slot.isEmpty ? (
                <>
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={slot.thumbnail || "/placeholder.svg"}
                      alt={slot.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-white font-medium text-sm mb-1">{slot.name}</h4>
                    <p className="text-gray-400 text-xs">{slot.date}</p>
                  </div>
                </>
              ) : (
                <div className="h-32 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="h-8 w-8 text-crimson mx-auto mb-1" />
                    <span className="text-gray-300 text-sm">Nuevo Guardado</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ImpactButton onClick={() => onNavigate("narrative")} variant="secondary" icon={X}>
            Cancelar
          </ImpactButton>
        </div>
      </motion.div>
    </motion.div>
  )
}
