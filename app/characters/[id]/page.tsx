"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, User, Crown, Shield, Skull, ChevronLeft, ChevronRight } from "lucide-react"
import { characters } from "@/data/characters"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

const roleIcons = {
    Protagonista: Crown,
    Antagonista: Skull,
    Aliada: Shield,
    Mentor: User,
}

export default function CharacterPage() {
    const params = useParams()
    const router = useRouter()
    const characterId = params.id as string
    const isMobile = useMediaQuery("(max-width: 768px)")

    const [character, setCharacter] = useState(characters.find((c) => c.id === characterId))
    const [currentIndex, setCurrentIndex] = useState(characters.findIndex((c) => c.id === characterId))
    const [isLoading, setIsLoading] = useState(true)
    const [activeSection, setActiveSection] = useState("overview")

    // Sections for the character profile
    const sections = [
        { id: "overview", label: "Resumen" },
        { id: "personality", label: "Personalidad" },
        { id: "backstory", label: "Historia" },
        { id: "relationships", label: "Relaciones" },
    ]

    // Scroll to top when component mounts or character changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [characterId])

    useEffect(() => {
        // Find character based on ID
        const foundCharacter = characters.find((c) => c.id === characterId)
        const index = characters.findIndex((c) => c.id === characterId)

        if (foundCharacter) {
            setCharacter(foundCharacter)
            setCurrentIndex(index)

            // Simulate loading for effect
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        } else {
            // Redirect to characters section if not found
            handleBackToCharacters()
        }
    }, [characterId, router])

    const navigateToCharacter = (id: string) => {
        setIsLoading(true)
        router.push(`/characters/${id}`)
    }

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + characters.length) % characters.length
        navigateToCharacter(characters[prevIndex].id)
    }

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % characters.length
        navigateToCharacter(characters[nextIndex].id)
    }

    // Function to handle back navigation to characters section
    const handleBackToCharacters = () => {
        // Navigate to home page first
        router.push("/")

        // Wait a bit for navigation to complete, then scroll to characters section
        setTimeout(() => {
            const charactersSection = document.getElementById("characters")
            if (charactersSection) {
                charactersSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        }, 100)
    }

    if (!character) return null

    const IconComponent = roleIcons[character.role as keyof typeof roleIcons] || User

    // Particle counts based on device
    const particleCount = isMobile ? 8 : 20
    const orbCount = isMobile ? 2 : 6

    return (
        <>
            <Navbar isCharacterPage={true} />

            <main className="min-h-screen">
                {/* Loading overlay */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed inset-0 z-50 bg-dark-void flex items-center justify-center"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="w-16 h-16 rounded-full bg-gradient-to-r from-crimson to-deep-purple"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hero Section - Improved spacing */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-shadow-gray to-obsidian"></div>

                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.1),transparent_70%)]"></div>
                    </div>

                    {/* Enhanced Particle System */}
                    <div className="absolute inset-0">
                        {[...Array(particleCount)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-crimson rounded-full opacity-60"
                                animate={{
                                    y: [0, -60, 0],
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 3,
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Floating Orbs */}
                    <div className="absolute inset-0">
                        {[...Array(orbCount)].map((_, i) => (
                            <motion.div
                                key={`orb-${i}`}
                                className="absolute rounded-full bg-gradient-to-r from-crimson/20 to-deep-purple/20 blur-xl"
                                animate={{
                                    x: [0, 60, 0],
                                    y: [0, -60, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 3,
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${20 + Math.random() * 50}px`,
                                    height: `${20 + Math.random() * 50}px`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Back button - Fixed positioning */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-20 left-4 lg:top-24 lg:left-6 z-10"
                    >
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-crimson/20 flex items-center gap-2 text-sm lg:text-base"
                            onClick={handleBackToCharacters}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Volver a Personajes
                        </Button>
                    </motion.div>

                    {/* Character navigation - Fixed positioning */}
                    <div className="absolute top-20 right-4 lg:top-24 lg:right-6 z-10 flex gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-crimson/20 rounded-full w-8 h-8 lg:w-10 lg:h-10"
                            onClick={goToPrevious}
                        >
                            <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-crimson/20 rounded-full w-8 h-8 lg:w-10 lg:h-10"
                            onClick={goToNext}
                        >
                            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
                        </Button>
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 py-8 lg:py-0">
                        {/* Character Image - Improved responsive sizing */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0"
                        >
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                                {/* Image with mask effect */}
                                <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-crimson/30">
                                    <motion.div
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={character.imageUrl || "/placeholder.svg"}
                                            alt={character.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>

                                {/* Animated ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="absolute -inset-2 lg:-inset-4 border border-crimson/20 rounded-full"
                                />

                                {/* Second animated ring */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="absolute -inset-4 lg:-inset-8 border border-deep-purple/10 rounded-full"
                                />

                                {/* Role badge - Responsive positioning */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute -bottom-2 lg:-bottom-4 left-1/2 transform -translate-x-1/2 glass-effect px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-crimson/30 flex items-center gap-2"
                                >
                                    <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-crimson" />
                                    <span className="text-white font-medium text-sm lg:text-base">{character.role}</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Character Info - Improved responsive spacing */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-elegant font-bold mb-4 lg:mb-6 text-gradient leading-tight"
                            >
                                {character.name}
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-[2px] bg-gradient-to-r from-crimson to-transparent mb-4 lg:mb-6 lg:max-w-md mx-auto lg:mx-0"
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-lg sm:text-xl lg:text-xl text-gray-300 lg:max-w-md leading-relaxed"
                            >
                                {character.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section - Improved spacing */}
                <section className="py-12 lg:py-16 xl:py-20 relative">
                    <div className="container mx-auto px-4 lg:px-8">
                        {/* Section Navigation - Responsive layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12"
                        >
                            {sections.map((section, index) => (
                                <Button
                                    key={section.id}
                                    variant={activeSection === section.id ? "default" : "outline"}
                                    className={`
                    text-xs lg:text-sm px-3 py-2 lg:px-4 lg:py-2
                    ${activeSection === section.id
                                            ? "bg-crimson hover:bg-blood-red text-white"
                                            : "border-crimson/50 text-crimson hover:bg-crimson hover:text-white"
                                        }
                  `}
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    {section.label}
                                </Button>
                            ))}
                        </motion.div>

                        {/* Section Content - Improved responsive layout */}
                        <div className="glass-effect rounded-xl p-4 lg:p-8 xl:p-10 relative overflow-hidden">
                            {/* Background effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/5 to-transparent"></div>

                            {/* Floating orbs */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={`content-orb-${i}`}
                                    className="absolute rounded-full bg-gradient-to-r from-crimson/5 to-deep-purple/5 blur-xl"
                                    animate={{
                                        x: [0, 30, 0],
                                        y: [0, -30, 0],
                                        scale: [0.9, 1.1, 0.9],
                                        opacity: [0.1, 0.2, 0.1],
                                    }}
                                    transition={{
                                        duration: 15 + Math.random() * 10,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: Math.random() * 5,
                                    }}
                                    style={{
                                        right: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        width: `${30 + Math.random() * 60}px`,
                                        height: `${30 + Math.random() * 60}px`,
                                    }}
                                />
                            ))}

                            <AnimatePresence mode="wait">
                                {activeSection === "overview" && (
                                    <motion.div
                                        key="overview"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-elegant font-bold mb-4 lg:mb-6 text-gradient">
                                            Resumen del Personaje
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                                            <div className="space-y-4 lg:space-y-6">
                                                <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                    Descripción General
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6">
                                                    {character.detailedInfo.overview.generalDescription}
                                                </p>
                                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                                    {character.detailedInfo.overview.roleInStory}
                                                </p>
                                            </div>

                                            <div className="space-y-4 lg:space-y-6">
                                                <div>
                                                    <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                        Características Destacadas
                                                    </h3>
                                                    <ul className="space-y-2 lg:space-y-3">
                                                        {character.detailedInfo.overview.keyCharacteristics.map((characteristic, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.1 * index }}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <span className="w-2 h-2 bg-crimson rounded-full flex-shrink-0 mt-2"></span>
                                                                <span className="text-gray-300 text-sm lg:text-base">{characteristic}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeSection === "personality" && (
                                    <motion.div
                                        key="personality"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-elegant font-bold mb-4 lg:mb-6 text-gradient">
                                            Perfil Psicológico
                                        </h2>

                                        <div className="mb-6 lg:mb-8">
                                            <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                Rasgos de Personalidad
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                                                {character.personality.map((trait, index) => (
                                                    <motion.div
                                                        key={trait}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        className="glass-effect p-3 lg:p-4 rounded-lg text-center border border-crimson/20 hover:border-crimson/50 transition-all duration-300"
                                                    >
                                                        <h4 className="text-crimson font-medium mb-2 text-sm lg:text-base">{trait}</h4>
                                                        <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">
                                                            {character.detailedInfo.psychology.personalityTraits[trait] ||
                                                                "Define su carácter y acciones."}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                                            <div>
                                                <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">Motivaciones</h3>
                                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                                    {character.detailedInfo.psychology.motivations}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                    Conflictos Internos
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                                    {character.detailedInfo.psychology.internalConflicts}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeSection === "backstory" && (
                                    <motion.div
                                        key="backstory"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-elegant font-bold mb-4 lg:mb-6 text-gradient">
                                            Historia Personal
                                        </h2>

                                        <div className="mb-6 lg:mb-8">
                                            <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">Orígenes</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6">
                                                {character.backstory}
                                            </p>
                                        </div>

                                        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="glass-effect p-4 lg:p-6 rounded-lg border border-crimson/20"
                                            >
                                                <h4 className="text-base lg:text-lg font-semibold text-crimson mb-2 lg:mb-3">Pasado</h4>
                                                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                                                    {character.detailedInfo.history.origins}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="glass-effect p-4 lg:p-6 rounded-lg border border-crimson/20"
                                            >
                                                <h4 className="text-base lg:text-lg font-semibold text-crimson mb-2 lg:mb-3">
                                                    Trauma Definidor
                                                </h4>
                                                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                                                    {character.detailedInfo.history.definingTrauma}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="glass-effect p-4 lg:p-6 rounded-lg border border-crimson/20"
                                            >
                                                <h4 className="text-base lg:text-lg font-semibold text-crimson mb-2 lg:mb-3">
                                                    Conexión con MortiSabbat
                                                </h4>
                                                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                                                    {character.detailedInfo.history.connectionToMortiSabbat}
                                                </p>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="mt-6 lg:mt-8 p-4 lg:p-6 glass-effect rounded-lg border border-crimson/30"
                                        >
                                            <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                Secretos No Revelados
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed italic text-sm lg:text-base">
                                                {character.detailedInfo.history.hiddenSecrets}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {activeSection === "relationships" && (
                                    <motion.div
                                        key="relationships"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-elegant font-bold mb-4 lg:mb-6 text-gradient">
                                            Relaciones
                                        </h2>

                                        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mb-6 lg:mb-8">
                                            {characters
                                                .filter((c) => c.id !== character.id)
                                                .map((otherChar, index) => {
                                                    const relationship = character.detailedInfo.relationships[otherChar.id]
                                                    return (
                                                        <motion.div
                                                            key={otherChar.id}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 + index * 0.1 }}
                                                            className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
                                                            onClick={() => navigateToCharacter(otherChar.id)}
                                                        >
                                                            <div className="flex items-center">
                                                                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 overflow-hidden flex-shrink-0">
                                                                    <img
                                                                        src={otherChar.imageUrl || "/placeholder.svg"}
                                                                        alt={otherChar.name}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                    />
                                                                </div>

                                                                <div className="p-3 lg:p-4 flex-1 min-w-0">
                                                                    <h4 className="text-base lg:text-lg font-semibold text-white group-hover:text-crimson transition-colors truncate">
                                                                        {otherChar.name}
                                                                    </h4>
                                                                    <p className="text-gray-400 text-xs lg:text-sm mb-2">
                                                                        {relationship?.relationshipType || otherChar.role}
                                                                    </p>

                                                                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed line-clamp-2">
                                                                        {relationship?.description ||
                                                                            "Una conexión compleja que evoluciona a lo largo de la historia."}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )
                                                })}
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="p-4 lg:p-6 glass-effect rounded-lg border border-crimson/30"
                                        >
                                            <h3 className="text-lg lg:text-xl font-semibold text-crimson mb-3 lg:mb-4">
                                                Impacto en la Historia
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4">
                                                Las relaciones de {character.name} con los demás personajes son fundamentales para el desarrollo
                                                de la trama. Tus decisiones influirán en cómo evolucionan estas relaciones, pudiendo fortalecer
                                                alianzas o crear enemistades que cambiarán el curso de tu experiencia en MortiSabbat.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                                Recuerda que en este mundo, la confianza es un recurso escaso y valioso. Elige sabiamente en
                                                quién depositar la tuya.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Character Navigation - Improved responsive layout */}
                <section className="py-12 lg:py-16 bg-gradient-to-t from-obsidian to-transparent">
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-2xl lg:text-3xl font-elegant font-bold mb-6 lg:mb-8 text-center text-gradient">
                            Otros Personajes
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            {characters.map((char, index) => (
                                <motion.div
                                    key={char.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${char.id === characterId
                                            ? "ring-2 ring-crimson shadow-lg shadow-crimson/30"
                                            : "hover:ring-1 hover:ring-crimson/50"
                                        }`}
                                    onClick={() => navigateToCharacter(char.id)}
                                >
                                    <img
                                        src={char.imageUrl || "/placeholder.svg"}
                                        alt={char.name}
                                        className={`w-full h-24 lg:h-32 object-cover ${char.id === characterId ? "brightness-110" : "brightness-75 hover:brightness-100"} transition-all duration-300`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-1 lg:bottom-2 left-1 lg:left-2 right-1 lg:right-2">
                                        <p className="text-white text-xs lg:text-sm font-medium truncate">{char.name}</p>
                                        <p className="text-gray-300 text-xs">{char.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
