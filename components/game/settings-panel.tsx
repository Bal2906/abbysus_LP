"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Volume2,
  VolumeX,
  Globe,
  Type,
  Monitor,
  Palette,
  Gamepad2,
  Save,
  RotateCcw,
  ArrowLeft,
  Settings,
  Eye,
  Zap,
  Moon,
  Sun,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { ImpactButton } from "./impact-button"
import type { GameSettings } from "./types"

interface SettingsPanelProps {
  settings: GameSettings
  setSettings: (settings: GameSettings | ((prev: GameSettings) => GameSettings)) => void
  onBack: () => void
}

export function SettingsPanel({ settings, setSettings, onBack }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState<"audio" | "display" | "gameplay" | "accessibility">("audio")
  const [hasChanges, setHasChanges] = useState(false)
  const [originalSettings, setOriginalSettings] = useState<GameSettings>(settings)

  useEffect(() => {
    setOriginalSettings(settings)
  }, [])

  useEffect(() => {
    setHasChanges(JSON.stringify(settings) !== JSON.stringify(originalSettings))
  }, [settings, originalSettings])

  const resetSettings = () => {
    setSettings({
      volumeGeneral: [80],
      volumeMusic: [70],
      volumeEffects: [85],
      volumeVoices: [90],
      language: "es",
      textSpeed: [50],
      fullscreen: false,
      theme: "dark",
      autoSave: true,
      skipRead: false,
      showHints: true,
      accessibility: false,
      fontSize: [16],
      contrast: [100],
    })
    setHasChanges(false)
  }

  const saveSettings = () => {
    setOriginalSettings(settings)
    setHasChanges(false)
    // Aquí podrías guardar en localStorage o enviar al servidor
    localStorage.setItem("gameSettings", JSON.stringify(settings))
  }

  const tabs = [
    { id: "audio", label: "Audio", icon: Volume2, color: "#DC143C" },
    { id: "display", label: "Pantalla", icon: Monitor, color: "#8B5CF6" },
    { id: "gameplay", label: "Juego", icon: Gamepad2, color: "#10B981" },
    { id: "accessibility", label: "Accesibilidad", icon: Eye, color: "#F59E0B" },
  ] as const

  const renderAudioSettings = () => (
    <div className="space-y-6">
      {[
        { label: "Volumen General", key: "volumeGeneral", icon: Volume2 },
        { label: "Música", key: "volumeMusic", icon: Volume2 },
        { label: "Efectos de Sonido", key: "volumeEffects", icon: Zap },
        { label: "Voces", key: "volumeVoices", icon: Volume2 },
      ].map((item) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-effect p-4 rounded-xl border border-crimson/20 hover:border-crimson/40 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <item.icon className="h-5 w-5 text-crimson" />
              <label className="text-white font-elegant font-medium">{item.label}</label>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-crimson font-bold text-lg min-w-[3rem] text-right">
                {(settings[item.key as keyof typeof settings] as number[])[0]}%
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    [item.key]: (prev[item.key as keyof typeof prev] as number[])[0] === 0 ? [80] : [0],
                  }))
                }
                className="w-8 h-8 glass-effect rounded-full flex items-center justify-center text-crimson hover:bg-crimson/20 transition-colors"
              >
                {(settings[item.key as keyof typeof settings] as number[])[0] === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </motion.button>
            </div>
          </div>
          <Slider
            value={settings[item.key as keyof typeof settings] as number[]}
            onValueChange={(value) => setSettings((prev) => ({ ...prev, [item.key]: value }))}
            max={100}
            step={1}
            className="w-full"
          />
        </motion.div>
      ))}
    </div>
  )

  const renderDisplaySettings = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Monitor className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Pantalla Completa</label>
          </div>
          <ImpactButton
            onClick={() => setSettings((prev) => ({ ...prev, fullscreen: !prev.fullscreen }))}
            variant={settings.fullscreen ? "primary" : "outline"}
            size="default"
          >
            {settings.fullscreen ? "Activado" : "Desactivado"}
          </ImpactButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Palette className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Tema</label>
          </div>
          <div className="flex space-x-2">
            <ImpactButton
              onClick={() => setSettings((prev) => ({ ...prev, theme: "dark" }))}
              variant={settings.theme === "dark" ? "primary" : "outline"}
              size="default"
              icon={Moon}
            >
              Oscuro
            </ImpactButton>
            <ImpactButton
              onClick={() => setSettings((prev) => ({ ...prev, theme: "light" }))}
              variant={settings.theme === "light" ? "primary" : "outline"}
              size="default"
              icon={Sun}
            >
              Claro
            </ImpactButton>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Type className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Tamaño de Fuente</label>
          </div>
          <span className="text-crimson font-bold">{settings.fontSize[0]}px</span>
        </div>
        <Slider
          value={settings.fontSize}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, fontSize: value }))}
          min={12}
          max={24}
          step={1}
          className="w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Contraste</label>
          </div>
          <span className="text-crimson font-bold">{settings.contrast[0]}%</span>
        </div>
        <Slider
          value={settings.contrast}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, contrast: value }))}
          min={50}
          max={150}
          step={5}
          className="w-full"
        />
      </motion.div>
    </div>
  )

  const renderGameplaySettings = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Type className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Velocidad de Texto</label>
          </div>
          <span className="text-crimson font-bold">
            {settings.textSpeed[0] < 30 ? "Lenta" : settings.textSpeed[0] < 70 ? "Normal" : "Rápida"}
          </span>
        </div>
        <Slider
          value={settings.textSpeed}
          onValueChange={(value) => setSettings((prev) => ({ ...prev, textSpeed: value }))}
          max={100}
          step={1}
          className="w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Save className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Guardado Automático</label>
          </div>
          <ImpactButton
            onClick={() => setSettings((prev) => ({ ...prev, autoSave: !prev.autoSave }))}
            variant={settings.autoSave ? "primary" : "outline"}
            size="default"
          >
            {settings.autoSave ? "Activado" : "Desactivado"}
          </ImpactButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Zap className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Saltar Texto Leído</label>
          </div>
          <ImpactButton
            onClick={() => setSettings((prev) => ({ ...prev, skipRead: !prev.skipRead }))}
            variant={settings.skipRead ? "primary" : "outline"}
            size="default"
          >
            {settings.skipRead ? "Activado" : "Desactivado"}
          </ImpactButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Mostrar Pistas</label>
          </div>
          <ImpactButton
            onClick={() => setSettings((prev) => ({ ...prev, showHints: !prev.showHints }))}
            variant={settings.showHints ? "primary" : "outline"}
            size="default"
          >
            {settings.showHints ? "Activado" : "Desactivado"}
          </ImpactButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Idioma</label>
          </div>
          <select
            value={settings.language}
            onChange={(e) => setSettings((prev) => ({ ...prev, language: e.target.value }))}
            className="bg-black/50 border border-crimson/30 rounded-lg px-4 py-2 text-white font-elegant hover:border-crimson/60 focus:border-crimson transition-colors"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </motion.div>
    </div>
  )

  const renderAccessibilitySettings = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="h-5 w-5 text-crimson" />
            <label className="text-white font-elegant font-medium">Modo Accesibilidad</label>
          </div>
          <ImpactButton
            onClick={() => setSettings((prev) => ({ ...prev, accessibility: !prev.accessibility }))}
            variant={settings.accessibility ? "primary" : "outline"}
            size="default"
          >
            {settings.accessibility ? "Activado" : "Desactivado"}
          </ImpactButton>
        </div>
        <p className="text-gray-400 text-sm mt-2 font-elegant">
          Activa contrastes altos y reduce efectos visuales para mejor legibilidad
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="glass-effect p-4 rounded-xl border border-crimson/20"
      >
        <h4 className="text-white font-elegant font-bold mb-3 flex items-center">
          <Settings className="h-5 w-5 text-crimson mr-2" />
          Atajos de Teclado
        </h4>
        <div className="space-y-2 text-sm font-elegant">
          <div className="flex justify-between">
            <span className="text-gray-300">Avanzar diálogo:</span>
            <span className="text-crimson">Espacio / Enter</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Menú de pausa:</span>
            <span className="text-crimson">Escape</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Guardado rápido:</span>
            <span className="text-crimson">Ctrl + S</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Carga rápida:</span>
            <span className="text-crimson">Ctrl + L</span>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative z-10 p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h2 className="text-4xl font-elegant font-bold text-gradient mb-2">Configuración</h2>
          <p className="text-gray-300 font-elegant italic">Personaliza tu experiencia en Ravenshollow</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-elegant font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "glass-effect border-2 text-white"
                  : "glass-effect border border-crimson/20 text-gray-400 hover:text-white hover:border-crimson/40"
              }`}
              style={{
                borderColor: activeTab === tab.id ? tab.color : undefined,
                color: activeTab === tab.id ? tab.color : undefined,
              }}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {activeTab === "audio" && renderAudioSettings()}
          {activeTab === "display" && renderDisplaySettings()}
          {activeTab === "gameplay" && renderGameplaySettings()}
          {activeTab === "accessibility" && renderAccessibilitySettings()}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <div className="flex gap-4">
            {hasChanges && (
              <ImpactButton onClick={saveSettings} variant="primary" icon={Save}>
                Guardar Cambios
              </ImpactButton>
            )}

            <ImpactButton onClick={resetSettings} variant="outline" icon={RotateCcw}>
              Restablecer
            </ImpactButton>

            <ImpactButton onClick={onBack} variant="secondary" icon={ArrowLeft}>
              Volver
            </ImpactButton>
          </div>

          {hasChanges && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-yellow-400 text-sm font-elegant italic"
            >
              Tienes cambios sin guardar
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
