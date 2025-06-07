"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { MainMenu } from "@/components/main-menu"
import { GameScene } from "@/components/game-scene"

export default function GamePage() {
  const router = useRouter()
  const [isGameOpen, setIsGameOpen] = useState(true)

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {isGameOpen ? (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[90vh] bg-dark-void/90 rounded-lg border border-red-500/20 overflow-hidden">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsGameOpen(false)
                  router.push('/')
                }}
                className="text-red-400 hover:bg-red-500/20"
              >
                <X size={24} />
              </Button>
            </div>
            <div className="h-full w-full">
              <MainMenu />
              <GameScene />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-crimson mb-4">¡Bienvenido a MortiSabbat!</h1>
          <p className="text-ghost-white mb-6">Para comenzar a jugar, haz clic en el botón "Jugar Demo" en la barra de navegación.</p>
          <Button 
            className="bg-crimson hover:bg-blood-red text-white font-medium"
            onClick={() => setIsGameOpen(true)}
          >
            Jugar Demo
          </Button>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
