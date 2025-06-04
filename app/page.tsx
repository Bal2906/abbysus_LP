"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GameDescription } from "@/components/game-description"
import { CharactersSection } from "@/components/characters-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"
import { PreloaderPage } from "@/components/preloader-page"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Función para manejar la finalización de la carga
  const handleLoadComplete = () => {
    setIsLoading(false)
    // Guardar en localStorage que ya se mostró el preloader
    if (typeof window !== "undefined") {
      localStorage.setItem("preloaderShown", "true")
    }
  }

  // Verificar si ya se mostró el preloader en esta sesión
  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window !== "undefined") {
      // Verificar si es una navegación interna (no un refresh o primera carga)
      const isInternalNavigation = performance?.navigation?.type === 1 || !localStorage.getItem("preloaderShown")

      // Si ya se mostró el preloader y no es un refresh, saltarlo
      if (localStorage.getItem("preloaderShown") && !isInternalNavigation) {
        setIsLoading(false)
      } else {
        // Asegurarse de que el preloader se muestre por al menos un tiempo mínimo
        const timer = setTimeout(() => {
          // Esto mantiene el preloader visible por al menos 3 segundos
        }, 3000)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <PreloaderPage onLoadComplete={handleLoadComplete} />
      ) : (
        <main className="min-h-screen">
          <Navbar />
          <HeroSection />
          <GameDescription />
          <CharactersSection />
          <NewsSection />
          <Footer />
        </main>
      )}
    </>
  )
}
