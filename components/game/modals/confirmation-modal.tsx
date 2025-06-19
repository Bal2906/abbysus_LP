"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"
import { ImpactButton } from "../impact-button"
import type { ConfirmationType } from "../types"

interface ConfirmationModalProps {
  confirmation: ConfirmationType
  onConfirm: (confirmed: boolean) => void
  onCancel: () => void
}

export function ConfirmationModal({ confirmation, onConfirm, onCancel }: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {confirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onCancel}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="glass-effect border border-crimson/30 rounded-xl p-6 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-elegant font-bold text-crimson mb-4 text-center">Confirmación</h3>

            <p className="text-gray-300 text-center mb-6">
              {confirmation === "newGame" && "¿Deseas comenzar un nuevo juego?"}
              {confirmation === "loadGame" && "¿Deseas cargar esta partida guardada?"}
              {confirmation === "saveGame" && "¿Deseas guardar en este slot?"}
              {confirmation === "overwriteSave" && "¿Deseas sobreescribir esta partida guardada?"}
              {confirmation === "exit" && "¿Deseas salir del juego?"}
            </p>

            <div className="flex gap-4">
              <ImpactButton onClick={() => onConfirm(true)} variant="primary" icon={Check}>
                Sí
              </ImpactButton>
              <ImpactButton onClick={() => onConfirm(false)} variant="outline" icon={X}>
                No
              </ImpactButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
