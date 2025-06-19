"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Youtube, Mail, Skull, Eye, Brain, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-crimson" },
  ]

  const footerSections = [
    {
      title: "El Juego",
      icon: Skull,
      links: [
        { name: "Descargar Demo", href: "#" },
        { name: "Requisitos del Sistema", href: "#" },
        { name: "Guía de Supervivencia", href: "#" },
        { name: "Logros Ocultos", href: "#" },
      ],
    },
    {
      title: "Comunidad",
      icon: Eye,
      links: [
        { name: "Discord Oficial", href: "#" },
        { name: "Reddit Community", href: "#" },
        { name: "Foro de Teorías", href: "#" },
        { name: "Fan Art Gallery", href: "#" },
      ],
    },
    {
      title: "Soporte",
      icon: Brain,
      links: [
        { name: "FAQ", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "Reportar Bug", href: "#" },
        { name: "Ayuda Técnica", href: "#" },
      ],
    },
  ]

  const horrorQuotes = [
    "La realidad es solo una ilusión",
    "Los secretos susurran en la oscuridad",
    "Tu mente es tu peor enemigo",
    "Nada es lo que parece",
  ]

    // Function to render the title with specific colors for M and S
    const renderNavbarTitle = (text: string) => {
      return text.split("").map((letter, index) => {
        const isSpecialLetter = letter.toLowerCase() === "m" || letter.toLowerCase() === "s"
        return (
          <span key={index} className={isSpecialLetter ? "text-crimson" : "text-white"}>
            {letter}
          </span>
        )
      })
    }

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-dark-void to-shadow-gray"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.1),transparent_70%)]"></div>

      {/* Floating Horror Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson rounded-full opacity-30"
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson to-deep-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-elegant font-bold text-xl">MS</span>
                </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border border-crimson/30 rounded-lg"
                  />
                </div>
                <span className="text-3xl font-bold font-elegant tracking-wide">
                    {renderNavbarTitle("Morti Sabbat")}
                  </span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Una experiencia de terror psicológico que desafiará tu percepción de la realidad. Sumérgete en las
                profundidades de la mente humana donde los miedos cobran vida.
              </p>

              {/* Horror Quote Rotator */}
              <motion.div
                key={Math.floor(Date.now() / 3000) % horrorQuotes.length}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-effect p-4 rounded-lg border border-crimson/20"
              >
                <p className="text-crimson font-elegant italic text-sm">
                  "{horrorQuotes[Math.floor(Date.now() / 3000) % horrorQuotes.length]}"
                </p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:drop-shadow-lg" />
                  <motion.div className="absolute inset-0 bg-crimson/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 glass-effect rounded-lg">
                  <section.icon className="h-5 w-5 text-crimson" />
                </div>
                <h3 className="text-white font-bold text-lg">{section.title}</h3>
              </div>

              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + linkIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-crimson transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-crimson rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect p-6 rounded-2xl mb-12 border border-crimson/30"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-crimson/20 rounded-full">
              <Skull className="h-6 w-6 text-crimson" />
            </div>
            <h4 className="text-xl font-bold text-crimson">Advertencia de Contenido</h4>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Morti Sabbat contiene temas de terror psicológico, violencia sugerida y contenido perturbador. Recomendado
            para mayores de 17 años. Se recomienda discreción del jugador.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-crimson/20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Morti Sabbat Studios. Todos los derechos reservados.</p>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-crimson" />
                <span className="text-gray-500 text-xs">Hecho con terror</span>
              </div>
            </div>

            <div className="flex space-x-6 text-sm">
              {["Política de Privacidad", "Términos de Servicio", "Cookies"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-crimson transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Atmospheric Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent"></div>
    </footer>
  )
}
