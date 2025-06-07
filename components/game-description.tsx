"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Brain, Eye, Heart, Zap, Clock, Users, Gamepad2, Award } from "lucide-react"
import { useRef } from "react"

export function GameDescription() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Brain,
      title: "Sistema de Cordura Dinámico",
      description:
        "Tu estabilidad mental se deteriora con cada decisión perturbadora, alterando la percepción de la realidad y desbloqueando nuevas narrativas.",
      color: "from-crimson to-blood-red",
    },
    {
      icon: Eye,
      title: "Narrativa Ramificada Compleja",
      description:
        "15+ finales únicos determinados por un sistema de decisiones profundo que rastrea cada elección moral y psicológica.",
      color: "from-deep-purple to-midnight",
    },
    {
      icon: Heart,
      title: "Vínculos Emocionales Profundos",
      description:
        "Relaciones complejas que evolucionan dinámicamente, donde la confianza puede ser tu salvación o tu perdición.",
      color: "from-crimson to-deep-purple",
    },
    {
      icon: Zap,
      title: "Atmósfera Inmersiva Total",
      description:
        "Audio binaural 3D y efectos visuales adaptativos que responden a tu estado mental para una experiencia verdaderamente aterradora.",
      color: "from-blood-red to-obsidian",
    },
  ]

  const stats = [
    { icon: Clock, value: "8-12", label: "Horas de Juego", desc: "Experiencia completa" },
    { icon: Users, value: "6", label: "Personajes Únicos", desc: "Cada uno con secretos" },
    { icon: Gamepad2, value: "15+", label: "Finales Diferentes", desc: "Basados en tus decisiones" },
    { icon: Award, value: "100+", label: "Decisiones Críticas", desc: "Que alteran la historia" },
  ]

  return (
    <section id="description" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.1),transparent_70%)]"></div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 glass-effect rounded-full mb-8"
          >
            <Brain className="h-12 w-12 text-crimson" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-elegant font-bold mb-8">
            <span className="text-gradient">Una Historia que</span>
            <br />
            <span className="text-white">Te Perseguirá</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-elegant italic"
          >
            "En Ravenshollow, la línea entre la realidad y la pesadilla se desvanece. Como Elena Blackwood, deberás
            navegar por un laberinto de secretos donde cada decisión puede ser tu salvación... o tu condena."
          </motion.p>
        </motion.div>

        {/* Cinematic Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Gameplay Screenshot"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent"></div>

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-6 right-6 glass-effect p-3 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-crimson" />
                  <span className="text-white text-sm font-medium">Cordura: 67%</span>
                </div>
              </motion.div>
            </div>

            {/* Glitch Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-crimson/10 rounded-2xl"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-elegant font-bold text-crimson mb-6">El Terror Vive en Tu Mente</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cada decisión que tomes no solo afectará el curso de la historia, sino que alterará fundamentalmente la
                percepción de la realidad de Elena. El sistema de cordura dinámico hace que cada partida sea única y
                aterradoramente personal.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                ¿Puedes confiar en lo que ves? ¿O tu mente fragmentada te está mostrando una realidad distorsionada? En
                Ravenshollow, el verdadero enemigo podría estar dentro de ti.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-lg text-center hover:border-crimson/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-crimson mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-crimson font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="glass-effect p-8 rounded-2xl h-full hover:border-crimson/50 transition-all duration-500 relative z-10">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-crimson transition-colors duration-300">
                  {feature.title}
                </h4>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-elegant font-bold text-gradient mb-4">¿Estás Preparado para la Verdad?</h3>
            <p className="text-gray-300 mb-6">
              Descarga la demo y experimenta los primeros momentos de terror que definirán tu destino.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-crimson to-blood-red text-white font-bold px-8 py-4 rounded-lg horror-shadow"
            >
              Enfrentar el Abismo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
