export interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  category: string
  content: string
  author: string
  readTime: number
  tags: string[]
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Nuevo Tráiler Revela Mecánicas de Terror Psicológico",
    excerpt:
      "Descubre cómo las decisiones del jugador afectan la cordura del protagonista en este innovador sistema de juego.",
    date: "2024-01-15",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Gameplay",
    author: "Elena Blackwood",
    readTime: 5,
    tags: ["Mecánicas", "Terror Psicológico", "Innovación"],
    content: `
      <p>El nuevo tráiler de <strong>Mortis Sabbat</strong> ha revelado por primera vez las mecánicas centrales que definirán la experiencia de terror psicológico más inmersiva jamás creada. El sistema de cordura dinámico no es solo una barra de estadísticas: es el corazón palpitante de una experiencia que se adapta y evoluciona según las decisiones más íntimas del jugador.</p>

      <h3>El Sistema de Cordura Revolucionario</h3>
      <p>Cada decisión que tomes como Elena Blackwood no solo afectará el curso de la narrativa, sino que alterará fundamentalmente tu percepción de la realidad. El sistema rastrea no solo las grandes decisiones morales, sino también los pequeños momentos de duda, los instantes de vacilación, y las reacciones emocionales del jugador.</p>

      <blockquote>"La mente humana es frágil, y en Ravenshollow, esa fragilidad se convierte en el elemento más poderoso del juego." - Director Creativo</blockquote>

      <h3>Mecánicas Adaptativas</h3>
      <p>El juego utiliza algoritmos avanzados para detectar patrones en el comportamiento del jugador:</p>
      <ul>
        <li><strong>Análisis de Decisiones:</strong> El tiempo que tardas en tomar decisiones afecta el estado mental de Elena</li>
        <li><strong>Reacciones Emocionales:</strong> Las elecciones impulsivas vs. las calculadas crean diferentes ramas narrativas</li>
        <li><strong>Memoria Fragmentada:</strong> Los recuerdos de Elena se distorsionan basándose en tu cordura actual</li>
        <li><strong>Realidad Alterada:</strong> Los entornos cambian sutilmente para reflejar el deterioro mental</li>
      </ul>

      <h3>Impacto Visual y Auditivo</h3>
      <p>Cuando la cordura de Elena se deteriora, el mundo mismo comienza a desmoronarse. Los colores se desaturan, las sombras se alargan de manera imposible, y los sonidos familiares se distorsionan hasta convertirse en susurros amenazantes. Cada elemento visual y auditivo está diseñado para sumergir al jugador en la experiencia psicológica de Elena.</p>

      <p>Este sistema promete redefinir lo que significa el terror psicológico en los videojuegos, creando una experiencia única para cada jugador basada en sus propias reacciones y decisiones.</p>
    `,
  },
  {
    id: "2",
    title: "Banda Sonora Compuesta por Akira Yamaoka",
    excerpt:
      "El legendario compositor de Silent Hill se une al proyecto para crear una experiencia auditiva inolvidable.",
    date: "2024-01-10",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Audio",
    author: "Marcus Thorne",
    readTime: 4,
    tags: ["Música", "Akira Yamaoka", "Silent Hill"],
    content: `
      <p>En una colaboración que ha emocionado a los fanáticos del terror psicológico en todo el mundo, <strong>Akira Yamaoka</strong>, el maestro compositor detrás de las icónicas bandas sonoras de Silent Hill, se ha unido al equipo de desarrollo de Mortis Sabbat para crear una experiencia auditiva que promete ser tan perturbadora como memorable.</p>

      <h3>El Maestro del Terror Sonoro</h3>
      <p>Yamaoka, conocido por su habilidad única para crear atmósferas que penetran directamente en el subconsciente del jugador, ha trabajado durante más de dos años en la banda sonora de Mortis Sabbat. Su enfoque para este proyecto va más allá de la música tradicional de videojuegos.</p>

      <blockquote>"Mortis Sabbat me ha permitido explorar territorios sonoros que nunca antes había visitado. Cada nota, cada silencio, está diseñado para resonar con los miedos más profundos del jugador." - Akira Yamaoka</blockquote>

      <h3>Innovación en Audio Adaptativo</h3>
      <p>La banda sonora de Mortis Sabbat utiliza tecnología de audio adaptativo que responde en tiempo real al estado mental del protagonista:</p>
      <ul>
        <li><strong>Composición Dinámica:</strong> La música cambia según el nivel de cordura de Elena</li>
        <li><strong>Audio Binaural 3D:</strong> Sonidos que parecen provenir de lugares imposibles</li>
        <li><strong>Frecuencias Subliminales:</strong> Tonos que afectan subconscientemente al jugador</li>
        <li><strong>Silencio Calculado:</strong> Los momentos de silencio son tan importantes como la música</li>
      </ul>

      <h3>Instrumentación Única</h3>
      <p>Para crear los sonidos únicos de Ravenshollow, Yamaoka ha experimentado con instrumentos poco convencionales: cajas de música oxidadas, pianos desafinados, y grabaciones de campo realizadas en ubicaciones abandonadas. Cada elemento sonoro ha sido cuidadosamente seleccionado para evocar una sensación específica de inquietud.</p>

      <h3>Colaboración Creativa</h3>
      <p>El proceso creativo ha sido profundamente colaborativo, con Yamaoka trabajando estrechamente con el equipo narrativo para asegurar que cada pieza musical no solo acompañe la acción, sino que se convierta en parte integral de la experiencia narrativa.</p>

      <p>La banda sonora completa estará disponible en vinilo de edición limitada, con artwork exclusivo que captura la esencia visual del mundo sonoro de Mortis Sabbat.</p>
    `,
  },
  {
    id: "3",
    title: "Demo Disponible en Steam Next Fest",
    excerpt:
      "Experimenta los primeros 30 minutos del juego y descubre si tienes lo necesario para desentrañar el misterio.",
    date: "2024-01-05",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Lanzamiento",
    author: "Sarah Chen",
    readTime: 3,
    tags: ["Demo", "Steam", "Lanzamiento"],
    content: `
      <p>El momento que los fanáticos del terror psicológico han estado esperando finalmente ha llegado. La demo de <strong>Mortis Sabbat</strong> estará disponible durante el próximo Steam Next Fest, ofreciendo a los jugadores una ventana de 30 minutos hacia el mundo aterrador de Ravenshollow.</p>

      <h3>¿Qué Incluye la Demo?</h3>
      <p>La demo cuidadosamente diseñada incluye la secuencia de apertura completa del juego, permitiendo a los jugadores experimentar:</p>
      <ul>
        <li><strong>Llegada a Ravenshollow:</strong> Los primeros momentos inquietantes de Elena en el pueblo</li>
        <li><strong>Sistema de Cordura:</strong> Una introducción completa a las mecánicas psicológicas</li>
        <li><strong>Primer Encuentro:</strong> Una interacción crucial que establece el tono del juego</li>
        <li><strong>Exploración Inicial:</strong> Descubre los primeros secretos del pueblo maldito</li>
      </ul>

      <h3>Optimización y Feedback</h3>
      <p>Esta demo representa meses de optimización y refinamiento basado en el feedback de los beta testers. Cada elemento ha sido pulido para ofrecer la experiencia más inmersiva posible, desde los efectos de iluminación hasta la respuesta de los controles.</p>

      <blockquote>"Queremos que los jugadores salgan de la demo con una sensación de inquietud que los acompañe durante días. Si logras dormir tranquilo después de jugar, entonces no hemos hecho nuestro trabajo." - Director del Juego</blockquote>

      <h3>Requisitos del Sistema</h3>
      <p>La demo está optimizada para funcionar en una amplia gama de sistemas:</p>
      <ul>
        <li><strong>Mínimos:</strong> GTX 1060 / RX 580, 8GB RAM, DirectX 12</li>
        <li><strong>Recomendados:</strong> RTX 3070 / RX 6700 XT, 16GB RAM, SSD</li>
        <li><strong>Ideales:</strong> RTX 4080 / RX 7800 XT, 32GB RAM, NVMe SSD</li>
      </ul>

      <h3>Características Especiales de la Demo</h3>
      <p>Los jugadores que completen la demo recibirán:</p>
      <ul>
        <li>Acceso exclusivo al soundtrack de la demo</li>
        <li>Wallpapers en alta resolución</li>
        <li>Un descuento especial para la pre-orden</li>
        <li>Acceso prioritario a la beta cerrada</li>
      </ul>

      <h3>Preparación Mental</h3>
      <p>Recomendamos encarecidamente jugar la demo en un ambiente controlado: luces tenues, auriculares de calidad, y sin distracciones. Mortis Sabbat está diseñado para ser una experiencia inmersiva que requiere tu completa atención.</p>

      <p>La demo estará disponible desde el primer día del Steam Next Fest y permanecerá accesible durante todo el evento. ¿Estás preparado para enfrentar tus miedos más profundos?</p>
    `,
  },
]
