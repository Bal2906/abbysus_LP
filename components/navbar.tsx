"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, BookOpen, Users, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

interface NavbarProps {
  isCharacterPage?: boolean
}

export function Navbar({ isCharacterPage = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "Inicio", href: "#hero", icon: Home },
    { name: "Historia", href: "#description", icon: BookOpen },
    { name: "Personajes", href: "#characters", icon: Users },
    { name: "Noticias", href: "#news", icon: Newspaper },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function for smooth scrolling or navigation
  const scrollToSection = (href: string) => {
    const isHomePage = pathname === "/"

    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const targetId = href.replace("#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // If we're on a different page, navigate to home first then scroll
      router.push("/")

      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const targetId = href.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }

    // Close mobile menu if open
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If on home page, scroll to hero
      scrollToSection("#hero")
    } else {
      // If on different page, navigate to home
      router.push("/")
    }
  }

  return (
    <>
      {/* Desktop/Mobile Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isCharacterPage ? "glass-effect" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-crimson to-deep-purple rounded-lg"></div>
              <span className="text-xl font-elegant font-bold text-crimson">Mortis Sabbat</span>
            </motion.div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.1 }}
                  className="text-ghost-white hover:text-crimson transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => router.push("/demo")}
                className="bg-crimson hover:bg-blood-red text-white font-medium"
              >
                Jugar Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-ghost-white hover:bg-crimson/20"
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-dark-void via-shadow-gray to-obsidian border-r border-crimson/30 z-50 lg:hidden"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-crimson/30">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
                  <div className="w-8 h-8 bg-gradient-to-br from-crimson to-deep-purple rounded-lg"></div>
                  <span className="text-xl font-elegant font-bold text-crimson">Mortis Sabbat</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-ghost-white hover:bg-crimson/20"
                >
                  <X size={24} />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-crimson/20 transition-all duration-300 group w-full text-left"
                  >
                    <item.icon className="h-5 w-5 text-crimson group-hover:scale-110 transition-transform" />
                    <span className="text-ghost-white group-hover:text-crimson font-medium">{item.name}</span>
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Button
                    onClick={() => {
                      setIsOpen(false)
                      router.push("/demo")
                    }}
                    className="w-full bg-crimson hover:bg-blood-red text-white font-medium horror-shadow"
                  >
                    Jugar Demo
                  </Button>
                </motion.div>
              </div>

              {/* Sidebar Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-gray-400 text-sm">
                  <p>¿Estás preparado para</p>
                  <p className="text-crimson font-medium">enfrentar tus miedos?</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
