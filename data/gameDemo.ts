// Tipos para la estructura de la historia
export interface Character {
  id: string
  name: string
  avatar: string
  color: string
  description?: string
}

export type Emotion =
  | "normal" | "happy" | "sad" | "angry" | "fear" | "surprise"
  | "confused" | "praying" | "possessed" | "firm" | "nervous"
  | "curious" | "serious" | "disgusted" | "defiant" | "determined"
  | "focused" | "disturbed" | "haunted" | "terrified" | "terrorized"
  | "intense" | "shocked" | "dark" | "grim" | "urgent" | "ominous"
  | "tense" | "anxious" | "uneasy" | "suspicious" | "proud"
  | "worried" | "disgust" | "frustrated" | "surprised" | "desperate"
  | "thoughtful" | "resolute" | "creepy" | "panic"
  | "mad" | "taunt" | "excited" | "awe" | "calm" | "serene"
  | "grateful" | "hopeful" | "regret" | "terror" | "furious" | "holy"
  | "solemn"

export interface DialogueLine {
  id: string
  characterId: string
  text: string
  emotion?: Emotion
  voiceFile?: string
}

export interface Choice {
  id: string
  text: string
  nextScene: string
  condition?: string
}

export interface Scene {
  id: string
  title: string
  background: string
  music?: string
  dialogue: DialogueLine[]
  choices?: Choice[]
  nextScene?: string
  unlockGallery?: string[]
}

export interface Chapter {
  id: string
  title: string
  description: string
  scenes: string[]
}

export const emotionIcons: Record<Emotion, { icon: string; label: string; color: string }> = {
  normal: { icon: "💭", label: "Pensativo", color: "text-gray-400" },
  happy: { icon: "✨", label: "Feliz", color: "text-yellow-400" },
  sad: { icon: "💧", label: "Triste", color: "text-blue-400" },
  angry: { icon: "💢", label: "Enojado", color: "text-red-500" },
  fear: { icon: "😰", label: "Temeroso", color: "text-purple-400" },
  surprise: { icon: "❗", label: "Sorprendido", color: "text-orange-400" },
  confused: { icon: "😕", label: "Confundido", color: "text-indigo-400" },
  praying: { icon: "🙏", label: "Rezando", color: "text-amber-500" },
  possessed: { icon: "👿", label: "Poseído", color: "text-rose-600" },
  firm: { icon: "🪨", label: "Firme", color: "text-stone-600" },
  nervous: { icon: "😬", label: "Nervioso", color: "text-yellow-500" },
  curious: { icon: "🤔", label: "Curioso", color: "text-cyan-500" },
  serious: { icon: "😐", label: "Serio", color: "text-neutral-500" },
  disgusted: { icon: "🤢", label: "Asqueado", color: "text-lime-600" },
  defiant: { icon: "😤", label: "Desafiante", color: "text-red-400" },
  determined: { icon: "🔥", label: "Decidido", color: "text-orange-600" },
  focused: { icon: "🎯", label: "Concentrado", color: "text-blue-600" },
  disturbed: { icon: "🌀", label: "Perturbado", color: "text-purple-600" },
  haunted: { icon: "👁️", label: "Acosado", color: "text-violet-700" },
  terrified: { icon: "😱", label: "Aterrorizado", color: "text-rose-500" },
  terrorized: { icon: "👻", label: "Aterrorizado", color: "text-indigo-700" },
  intense: { icon: "⚡", label: "Intenso", color: "text-yellow-600" },
  shocked: { icon: "😲", label: "Impactado", color: "text-orange-300" },
  dark: { icon: "🌑", label: "Oscuro", color: "text-gray-700" },
  grim: { icon: "☠️", label: "Sombrío", color: "text-slate-700" },
  urgent: { icon: "🚨", label: "Urgente", color: "text-red-600" },
  ominous: { icon: "🌩️", label: "Amenazante", color: "text-purple-800" },
  tense: { icon: "🤐", label: "Tenso", color: "text-gray-600" },
  anxious: { icon: "😟", label: "Ansioso", color: "text-yellow-600" },
  uneasy: { icon: "😓", label: "Inquieto", color: "text-amber-600" },
  suspicious: { icon: "🕵️", label: "Suspicaz", color: "text-zinc-600" },
  proud: { icon: "😎", label: "Orgulloso", color: "text-emerald-500" },
  worried: { icon: "😟", label: "Preocupado", color: "text-orange-500" },
  disgust: { icon: "🤮", label: "Repugnancia", color: "text-lime-500" },
  frustrated: { icon: "😤", label: "Frustrado", color: "text-rose-700" },
  surprised: { icon: "😮", label: "Sorprendido", color: "text-yellow-400" },
  desperate: { icon: "😩", label: "Desesperado", color: "text-rose-600" },
  thoughtful: { icon: "🧠", label: "Reflexivo", color: "text-sky-600" },
  resolute: { icon: "🛡️", label: "Resuelto", color: "text-teal-600" },
  creepy: { icon: "🕷️", label: "Escalofriante", color: "text-gray-800" },
  panic: { icon: "😵", label: "Pánico", color: "text-pink-600" },
  mad: { icon: "😡", label: "Furioso", color: "text-red-700" },
  taunt: { icon: "😈", label: "Provocador", color: "text-rose-700" },
  excited: { icon: "😄", label: "Emocionado", color: "text-yellow-300" },
  awe: { icon: "😯", label: "Asombrado", color: "text-violet-400" },
  calm: { icon: "🌿", label: "Calma", color: "text-green-400" },
  serene: { icon: "🕊️", label: "Sereno", color: "text-blue-300" },
  grateful: { icon: "🥰", label: "Agradecido", color: "text-pink-400" },
  hopeful: { icon: "🌅", label: "Esperanzado", color: "text-amber-400" },
  regret: { icon: "😔", label: "Arrepentido", color: "text-gray-500" },
  terror: { icon: "👺", label: "Terror", color: "text-rose-800" },
  furious: { icon: "💣", label: "Colérico", color: "text-red-800" },
  holy: { icon: "⛪", label: "Sagrado", color: "text-indigo-500" },
  solemn: { icon: "🪔", label: "Solemne", color: "text-neutral-700" }
}

// Personajes del juego
export const characters: Character[] = [
  {
    id: "nick",
    name: "Nick Cazas",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#8B0000",
    description: "Un joven con un pasado turbio y una conexión emocional intensa con Lilith. Su lealtad está constantemente en duda.",
  },
  {
    id: "lilith",
    name: "Lilith Montesdelvalle",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#DC143C",
    description: "Una joven monja novicia con un oscuro pasado y habilidades espirituales heredadas, que se ve envuelta en una serie de eventos sobrenaturales en los Andes ecuatorianos.",
  },
  {
    id: "sheldon",
    name: "Sheldon R. Torres",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#4B0082",
    description: "Un joven perturbado que habla en acertijos y dibujos. Su mente rota esconde claves para descifrar el horror.",
  },
  {
    id: "balberith",
    name: "Balberith Castellano",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#2F1B69",
    description: "Una antigua entidad espiritual que guía a Lilith en su camino, oscilando entre protector enigmático y posible tentador.",
  },
  {
    id: "kruster",
    name: "Kruster",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#8B0000",
    description: "Un ermitaño que vive entre los páramos de Quito. Guarda secretos que protegen —o amenazan— la realidad.",
  },
  {
    id: "agnus",
    name: "Agnus Segoya",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#660066",
    description: "Un granjero de aspecto imponente que esconde una mente maquiavélica detrás de su fachada rústica.",
  },
  {
    id: "narrator",
    name: "Narrador",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#696969",
    description: "El narrador es el personaje que habla en primera persona.",
  },
]

// Capítulos del juego
export const chapters: Chapter[] = [
  {
    id: "chapter1",
    title: "La Novicia",
    description:
      "Lilith sigue visiones hasta la basílica. Allí encuentra infectados murmurando en lenguas antiguas y conoce a Nick, quien le muestra un mapa. Un pasadizo secreto bajo el altar revela que algo ha despertado.",
    scenes: ["scene1_1", "scene1_2", "scene1_3", "scene1_4"],
  },
  {
    id: "chapter2",
    title: "El Conspiratorio",
    description:
      "En el sótano de la iglesia, Nick comparte su teoría sobre un poder sellado bajo Quito. Fotos, grabados y rituales antiguos apuntan a una conspiración. Alguien o algo los escucha desde la oscuridad.",
    scenes: ["scene2_1", "scene2_2", "scene2_3"],
  },
  {
    id: "chapter3",
    title: "El Panadero Infectado",
    description:
      "Una levadura ancestral usada en una panadería está infectando a la gente. Kruster, su dueño, revela sin saberlo un vínculo con experimentos ocultos. Bajo la harina, algo vivo respira.",
    scenes: ["scene3_1", "scene3_2", "scene3_3"],
  },
  {
    id: "chapter4",
    title: "El Casi Periodista",
    description:
      "Sheldon escucha fragmentos de la verdad en la panadería. Intrigado, se une al grupo con su cámara, pero una voz desconocida queda registrada entre sus grabaciones.",
    scenes: ["scene4_1", "scene4_2", "scene4_3"],
  },
  {
    id: "chapter5",
    title: "El Exconvicto",
    description:
      "Balberith investiga una prisión abandonada. Entre símbolos tallados y puertas ocultas, una voz del pasado reclama su sangre como sacrificio.",
    scenes: ["scene5_1", "scene5_2", "scene5_3"],
  },
  {
    id: "chapter6",
    title: "El Gran Villano",
    description:
      "Bajo la panadería, el Granjero revela su plan: despertar un poder antiguo a través del pan. Seres deformes emergen. Un túnel hacia El Panecillo guarda la última esperanza.",
    scenes: ["scene6_1", "scene6_2", "scene6_3"],
  },
  {
    id: "chapter7",
    title: "Confrontación Final",
    description:
      "En el horno ritual bajo El Panecillo, Lilith y Balberith enfrentan el mal. Solo un exorcismo ancestral puede sellar el abismo y redimir lo que aún puede salvarse.",
    scenes: ["scene7_1", "scene7_2", "scene7_3"],
  },
]

// Escenas del juego
export const scenes: Scene[] = [
  // Capítulo 1
  {
    id: "scene1_1",
    title: "Visiones en la Cripta",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298100/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-front.png",
    music: "ambient_fog_church.mp3",
    dialogue: [
      {
        id: "d1_1_1",
        characterId: "narrator",
        text: "La niebla se arremolina entre las columnas góticas de la Basílica del Voto Nacional. Las campanas suenan a lo lejos, sordas, como advertencias veladas.",
        emotion: "normal",
      },
      {
        id: "d1_1_2",
        characterId: "lilith",
        text: "Las visiones... cada vez más claras. Símbolos antiguos, sombras encapuchadas... ¿Será este el lugar?",
        emotion: "confused",
      },
      {
        id: "d1_1_3",
        characterId: "lilith",
        text: "Padre, guíame. El mal se cierne sobre Quito.",
        emotion: "praying",
      },
      {
        id: "d1_1_4",
        characterId: "narrator",
        text: "Un gemido gutural irrumpe. Un hombre demacrado se retuerce en el suelo de piedra, cubierto de protuberancias purulentas.",
        emotion: "fear",
      },
      {
        id: "d1_1_5",
        characterId: "infected_man",
        text: "Kawsay... Chawpi... Yana...",
        emotion: "possessed",
      },
      {
        id: "d1_1_6",
        characterId: "lilith",
        text: "En el nombre del Padre, yo te conjuro. ¿Qué te ha poseído?",
        emotion: "firm",
      },
    ],
    nextScene: "scene1_2",
    unlockGallery: ["gallery_crypt_infected"],
  },
  {
    id: "scene1_2",
    title: "Encuentro con el Loquito",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298094/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-back3.png",
    music: "mystery_whispers.mp3",
    dialogue: [
      {
        id: "d1_2_1",
        characterId: "narrator",
        text: "Una figura delgada emerge entre columnas, cubierto por un poncho rojo y lentes empañados.",
        emotion: "normal",
      },
      {
        id: "d1_2_2",
        characterId: "nick",
        text: "No es posesión... es el Corazón Oscuro. Ha despertado.",
        emotion: "nervous",
      },
      {
        id: "d1_2_3",
        characterId: "lilith",
        text: "¿Quién eres? ¿Qué sabes de esto?",
        emotion: "curious",
      },
      {
        id: "d1_2_4",
        characterId: "nick",
        text: "Nick Casas. Esto—focos de infección. La Basílica es un nido. Hay túneles antiguos bajo todo esto.",
        emotion: "serious",
      },
      {
        id: "d1_2_5",
        characterId: "lilith",
        text: "Siento un aire... cálido, fétido... como si la tierra misma estuviera enferma.",
        emotion: "disgusted",
      },
      {
        id: "d1_2_6",
        characterId: "nick",
        text: "Lo está. Y se agrava. ¿Me sigues, monja? O te quedas a rezar por los muertos que no han llegado.",
        emotion: "defiant",
      },
      {
        id: "d1_2_7",
        characterId: "lilith",
        text: "Guíame. Mi fe es para quienes aún pueden ser salvados.",
        emotion: "determined",
      },
    ],
    nextScene: "scene1_3",
    unlockGallery: ["gallery_nick_appearance"],
  },
  {
    id: "scene1_3",
    title: "El Mapa del Abismo",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298108/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-sideLeft.png",
    music: "tense_droning.mp3",
    dialogue: [
      {
        id: "d1_3_1",
        characterId: "narrator",
        text: "Nick desenrolla un mapa arrugado sobre una lápida desgastada. Marcas de tinta negra conectan iglesias, hospitales, cementerios.",
        emotion: "normal",
      },
      {
        id: "d1_3_2",
        characterId: "nick",
        text: "Estos son los focos. Donde el brote comenzó. Las antiguas entradas están aquí... bajo los altares.",
        emotion: "focused",
      },
      {
        id: "d1_3_3",
        characterId: "lilith",
        text: "Esto va más allá de una plaga. Son símbolos que he visto... en sueños, en códices coloniales prohibidos.",
        emotion: "disturbed",
      },
      {
        id: "d1_3_4",
        characterId: "nick",
        text: "Mi abuelo habló de un 'portal de sangre y ceniza'. Yo pensé que estaba loco. Hasta que empezaron los sueños.",
        emotion: "haunted",
      },
    ],
    nextScene: "scene1_4",
    unlockGallery: ["gallery_map_focus"],
  },
  {
    id: "scene1_4",
    title: "Descenso",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    music: "ominous_tunnel.mp3",
    dialogue: [
      {
        id: "d1_4_1",
        characterId: "narrator",
        text: "Una lápida se desliza con esfuerzo. Tras ella, un túnel angosto y húmedo exhala un aliento podrido.",
        emotion: "normal",
      },
      {
        id: "d1_4_2",
        characterId: "lilith",
        text: "Es como si la tierra misma exhalara su corrupción...",
        emotion: "fear",
      },
      {
        id: "d1_4_3",
        characterId: "nick",
        text: "Prepárate. Esto es solo la entrada. Lo que nos espera abajo... no quiere ser descubierto.",
        emotion: "serious",
      },
    ],
    nextScene: "scene2_1",
    unlockGallery: ["gallery_secret_passage"],
  },
  // Capítulo 2 
  {
    id: "scene2_1",
    title: "El Mural del Abuelo",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298083/assets-MortiSabbat/background/assets-MortiSabbat/background/3.png",
    music: "ambient_radio_static.mp3",
    dialogue: [
      {
        id: "d2_1_1",
        characterId: "narrator",
        text: "La casona de Nick cruje con cada paso. El laboratorio improvisado está iluminado por una bombilla parpadeante, y las paredes están cubiertas de recortes y símbolos dibujados con tiza.",
        emotion: "normal",
      },
      {
        id: "d2_1_2",
        characterId: "nick",
        text: "Aquí. Todo está conectado. Mi abuelo decía que el Corazón Oscuro no era solo un mito. Era una advertencia.",
        emotion: "intense",
      },
      {
        id: "d2_1_3",
        characterId: "lilith",
        text: "¿Y qué significa este símbolo repetido? Lo he visto en crónicas jesuíticas censuradas.",
        emotion: "curious",
      },
      {
        id: "d2_1_4",
        characterId: "nick",
        text: "Sangre y ceniza. Así sellaron el portal, según mi abuelo. Mira esto...",
        emotion: "serious",
      },
    ],
    nextScene: "scene2_2",
    unlockGallery: ["gallery_conspiracy_wall"],
  },
  {
    id: "scene2_2",
    title: "Fragmentos del Pasado",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    music: "suspense_dark_echo.mp3",
    dialogue: [
      {
        id: "d2_2_1",
        characterId: "narrator",
        text: "Nick coloca un fragmento de piedra sobre la mesa, junto a fotos amarillentas y recortes de periódico. En la imagen, una niña aparece inmóvil, con símbolos tallados en la pared detrás.",
        emotion: "normal",
      },
      {
        id: "d2_2_2",
        characterId: "nick",
        text: "La masacre de Balberith. Dijeron que fue un crimen aislado, pero míralo bien. Los mismos símbolos. Era un sacrificio. Fallido.",
        emotion: "disturbed",
      },
      {
        id: "d2_2_3",
        characterId: "lilith",
        text: "Dios mío... la niña. ¿Estás diciendo que fue parte de un ritual?",
        emotion: "shocked",
      },
      {
        id: "d2_2_4",
        characterId: "nick",
        text: "No lo digo. Lo sé. Y no fue el único intento.",
        emotion: "tense",
      },
    ],
    nextScene: "scene2_3",
    unlockGallery: ["gallery_balberith_photo"],
  },
  {
    id: "scene2_3",
    title: "Acecho en la Ventana",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298083/assets-MortiSabbat/background/assets-MortiSabbat/background/3.png",
    music: "heartbeat_echoes.mp3",
    dialogue: [
      {
        id: "d2_3_1",
        characterId: "narrator",
        text: "Un golpe sordo contra la ventana. La silueta de algo humanoide se proyecta fugazmente en la pared exterior.",
        emotion: "fear",
      },
      {
        id: "d2_3_2",
        characterId: "nick",
        text: "¡Nos están escuchando! No estamos solos...",
        emotion: "anxious",
      },
      {
        id: "d2_3_3",
        characterId: "lilith",
        text: "¡Cierra las cortinas! ¿Quién podría estar siguiéndonos?",
        emotion: "fear",
      },
      {
        id: "d2_3_4",
        characterId: "nick",
        text: "Hay alguien que conoce más... y que quiere silenciarnos. Pero aún hay una pista.",
        emotion: "focused",
      },
      {
        id: "d2_3_5",
        characterId: "nick",
        text: "El panadero. Su pan... su receta ancestral. Siento una conexión. Tenemos que ir.",
        emotion: "urgent",
      },
      {
        id: "d2_3_6",
        characterId: "lilith",
        text: "Entonces no perdamos más tiempo. Muéstrame el camino.",
        emotion: "determined",
      },
    ],
    nextScene: "scene3_1",
    unlockGallery: ["gallery_shadow_window"],
  },
  // Capítulo 3
  {
    id: "scene3_1",
    title: "El Aroma del Horror",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderia%20entrada",
    music: "ambient_bakery_ominous.mp3",
    dialogue: [
      {
        id: "d3_1_1",
        characterId: "narrator",
        text: "La campanilla de la puerta suena débilmente. El calor del horno abraza el rostro de Lilith, mientras un aroma denso, entre dulce y rancio, inunda sus sentidos.",
        emotion: "normal",
      },
      {
        id: "d3_1_2",
        characterId: "lilith",
        text: "Qué olor... peculiar. Parece pan... pero hay algo más. Como moho… o… ¿fermentación animal?",
        emotion: "confused",
      },
      {
        id: "d3_1_3",
        characterId: "nick",
        text: "Aquí es. Lo siento en la lengua. Como una electricidad agria. Algo no está bien con ese pan.",
        emotion: "uneasy",
      },
      {
        id: "d3_1_4",
        characterId: "narrator",
        text: "Detrás del mostrador aparece un hombre enorme, de rostro curtido y un ojo vendado. Sostiene una bandeja de panes humeantes.",
        emotion: "normal",
      },
      {
        id: "d3_1_5",
        characterId: "kruster",
        text: "¿Buscan algo? ¿Pan fresco? Mi pan... protege el alma, eso decía mi abuela.",
        emotion: "normal",
      },
    ],
    nextScene: "scene3_2",
    unlockGallery: ["gallery_bakery_intro"],
  },
  {
    id: "scene3_2",
    title: "La Levadura de los Muertos",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    music: "ambient_fly_buzz.mp3",
    dialogue: [
      {
        id: "d3_2_1",
        characterId: "lilith",
        text: "¿Qué tipo de levadura usa, señor...? Veo algo… moviéndose en la masa.",
        emotion: "suspicious",
      },
      {
        id: "d3_2_2",
        characterId: "kruster",
        text: "Kruster. La levadura viene de mi abuela. Una cepa ancestral. Nunca muere. Eso es lo especial.",
        emotion: "proud",
      },
      {
        id: "d3_2_3",
        characterId: "nick",
        text: "Ese 'nunca muere'... suena como una advertencia más que una virtud.",
        emotion: "worried",
      },
      {
        id: "d3_2_4",
        characterId: "narrator",
        text: "Lilith examina uno de los panes más de cerca. Alrededor, diminutos insectos oscuros se arrastran lentamente, emergiendo de fisuras microscópicas.",
        emotion: "normal",
      },
      {
        id: "d3_2_5",
        characterId: "lilith",
        text: "Esto no es pan común. Esto... está vivo.",
        emotion: "disgust",
      },
    ],
    nextScene: "scene3_3",
    unlockGallery: ["gallery_levadura"],
  },
  {
    id: "scene3_3",
    title: "Harina Maldita",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    music: "suspense_cicadas_low.mp3",
    dialogue: [
      {
        id: "d3_3_1",
        characterId: "nick",
        text: "¿Y esos papeles quemados en ese rincón? ¿Son suyos?",
        emotion: "curious",
      },
      {
        id: "d3_3_2",
        characterId: "kruster",
        text: "No... venían con un saco de harina. Nadie lo pidió. Venía sellado. Decían que era soviético. Contenía... hongos. Experimentos de la Guerra Fría.",
        emotion: "confused",
      },
      {
        id: "d3_3_3",
        characterId: "narrator",
        text: "Kruster lanza un puñado de harina sobre una tabla de cortar. Un siseo inaudible recorre la habitación. Pequeños quistes se abren como flores negras bajo la luz.",
        emotion: "normal",
      },
      {
        id: "d3_3_4",
        characterId: "kruster",
        text: "¡No puede ser... están... en la masa! ¿Qué he hecho?",
        emotion: "fear",
      },
      {
        id: "d3_3_5",
        characterId: "nick",
        text: "La infección. Se transmite por el pan. Está alimentando... algo más.",
        emotion: "grim",
      },
      {
        id: "d3_3_6",
        characterId: "lilith",
        text: "Dios nos ampare. El pan no nutre el cuerpo... lo convierte en huésped.",
        emotion: "serious",
      },
    ],
    nextScene: "scene4_1",
    unlockGallery: ["gallery_infection_bread"],
  },
  // Capítulo 4
  {
    id: "scene4_1",
    title: "El Metiche con Micrófono",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298112/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderia%20entrada.png",
    music: "ambient_city_morning_dark.mp3",
    dialogue: [
      {
        id: "d4_1_1",
        characterId: "narrator",
        text: "La panadería abre al público. Gente desprevenida pide pan, sin notar las manchas en sus brazos ni el leve temblor en sus manos.",
        emotion: "normal",
      },
      {
        id: "d4_1_2",
        characterId: "sheldon",
        text: "(murmurando mientras revisa su grabadora) Otra mañana de notas inútiles... Quito muere de aburrimiento, no de conspiraciones.",
        emotion: "frustrated",
      },
      {
        id: "d4_1_3",
        characterId: "narrator",
        text: "Sheldon escucha desde una mesa al fondo. Sus oídos captan palabras sueltas entre los susurros de Lilith y Nick.",
        emotion: "normal",
      },
      {
        id: "d4_1_4",
        characterId: "lilith",
        text: "(voz baja) ...el parásito se adhiere... no es natural.",
        emotion: "serious",
      },
      {
        id: "d4_1_5",
        characterId: "nick",
        text: "(voz urgente) ...los túneles. Hay símbolos prehispánicos. El Granjero sabía.",
        emotion: "serious",
      },
    ],
    nextScene: "scene4_2",
    unlockGallery: ["gallery_bakery_public"],
  },
  {
    id: "scene4_2",
    title: "Primicia Maldita",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298112/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderia%20entrada.png",
    music: "suspense_muffled_news.mp3",
    dialogue: [
      {
        id: "d4_2_1",
        characterId: "sheldon",
        text: "¡Un momento! ¿Hablaron de túneles, símbolos y parásitos? ¡Soy periodista! ¡Eso es oro puro!",
        emotion: "surprised",
      },
      {
        id: "d4_2_2",
        characterId: "kruster",
        text: "¿Periodista? ¿Y de farándula o de conspiraciones baratas? Porque esto no es chisme, mocoso.",
        emotion: "angry",
      },
      {
        id: "d4_2_3",
        characterId: "sheldon",
        text: "¡No! ¡Puedo ayudar! Tengo equipo. Cámara, grabadora... ¡Puedo documentarlo todo!",
        emotion: "desperate",
      },
      {
        id: "d4_2_4",
        characterId: "lilith",
        text: "(susurrando a Nick) ¿Y si tiene razón? Necesitamos pruebas si queremos que esto no se pierda en el silencio.",
        emotion: "thoughtful",
      },
      {
        id: "d4_2_5",
        characterId: "nick",
        text: "(suspira) Está bien. Pero una advertencia, Sheldon: esto no es para likes. Es real. Y es letal.",
        emotion: "grim",
      },
    ],
    nextScene: "scene4_3",
    unlockGallery: ["gallery_sheldon_join"],
  },
  {
    id: "scene4_3",
    title: "Susurros Grabados",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    music: "whisper_loop_dark.mp3",
    dialogue: [
      {
        id: "d4_3_1",
        characterId: "sheldon",
        text: "(poniendo a grabar) Díganme exactamente qué han descubierto. Detalles. Todo.",
        emotion: "focused",
      },
      {
        id: "d4_3_2",
        characterId: "narrator",
        text: "La grabadora reproduce un fragmento de su propia grabación. Al principio inaudible... hasta que una voz ronca y espectral resuena, claramente no humana.",
        emotion: "normal",
      },
      {
        id: "d4_3_3",
        characterId: "grabacion",
        text: "El Toro... la ofrenda...",
        emotion: "ominous",
      },
      {
        id: "d4_3_4",
        characterId: "sheldon",
        text: "(pálido) ¿Escucharon eso? Esa voz... no la grabé yo. No había nadie más hablando.",
        emotion: "fear",
      },
      {
        id: "d4_3_5",
        characterId: "lilith",
        text: "(cerrando los ojos) El mal ya nos sigue. Ahora... también se graba.",
        emotion: "serious",
      },
    ],
    nextScene: "scene5_1",
    unlockGallery: ["gallery_whisper"],
  },
  // Capítulo 5
  {
    id: "scene5_1",
    title: "Regreso a la Sombra",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298110/assets-MortiSabbat/background/assets-MortiSabbat/background/carcel.png",
    music: "dark_prison_reverb.mp3",
    dialogue: [
      {
        id: "d5_1_1",
        characterId: "narrator",
        text: "Goteos constantes. Cadáveres de roedores. Oxidación por doquier. El viejo penal de San Roque exhala una humedad que huele a carne dormida.",
        emotion: "normal",
      },
      {
        id: "d5_1_2",
        characterId: "balberith",
        text: "(pensando) Este lugar... aún respira. Como yo. A duras penas.",
        emotion: "grim",
      },
      {
        id: "d5_1_3",
        characterId: "narrator",
        text: "Las cadenas colgantes tintinean con cada paso. La celda número trece, aún cerrada, emite un eco seco y metálico.",
        emotion: "normal",
      },
      {
        id: "d5_1_4",
        characterId: "balberith",
        text: "(leyendo un recorte amarillento en el suelo) 'Niña asesinada... testigos silenciosos'. ¿Silencio? No. Fue complicidad.",
        emotion: "angry",
      },
    ],
    nextScene: "scene5_2",
    unlockGallery: ["gallery_prison"],
  },
  {
    id: "scene5_2",
    title: "Símbolos Rotos",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298110/assets-MortiSabbat/background/assets-MortiSabbat/background/carcel.png",
    music: "ritual_drone.mp3",
    dialogue: [
      {
        id: "d5_2_1",
        characterId: "narrator",
        text: "Una pared, desgastada por el tiempo, guarda grabados hechos con uñas y sangre. El mismo patrón prehispánico que Nick mostró días atrás.",
        emotion: "normal",
      },
      {
        id: "d5_2_2",
        characterId: "balberith",
        text: "(tocando los símbolos) Estos no son dibujos... Son advertencias. Sellos rotos.",
        emotion: "serious",
      },
      {
        id: "d5_2_3",
        characterId: "narrator",
        text: "Un empujón accidental revela una puerta de hierro oxidado, oculta tras un mueble caído. El olor que emana... pútrido, como un cementerio mojado.",
        emotion: "normal",
      },
      {
        id: "d5_2_4",
        characterId: "balberith",
        text: "Un túnel... Siempre hay un maldito túnel.",
        emotion: "grim",
      },
    ],
    nextScene: "scene5_3",
    unlockGallery: ["gallery_symbols"],
  },
  {
    id: "scene5_3",
    title: "El Susurro del Toro",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    music: "deep_cavern_whispers.mp3",
    dialogue: [
      {
        id: "d5_3_1",
        characterId: "narrator",
        text: "Cuando Balberith cruza el umbral, la puerta se cierra de golpe. Una negrura viva lo envuelve.",
        emotion: "normal",
      },
      {
        id: "d5_3_2",
        characterId: "voz_susurro",
        text: "El Toro... el sacrificio... tu sangre es llave, tu culpa es sello.",
        emotion: "ominous",
      },
      {
        id: "d5_3_3",
        characterId: "balberith",
        text: "(apretando su cadena) No más juegos. Si hay algo que pagar, lo pagaré. Pero nadie más sangra por mis errores.",
        emotion: "resolute",
      },
      {
        id: "d5_3_4",
        characterId: "narrator",
        text: "Sus pasos se alejan por el túnel, mientras la sombra se arrastra tras él como un perro viejo, hambriento de redención.",
        emotion: "normal",
      },
    ],
    nextScene: "scene6_1",
    unlockGallery: ["gallery_tunnel"],
  },
  // Capítulo 6
  {
    id: "scene6_1",
    title: "La Planta Maldita",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    music: "ritual_heartbeat_low.mp3",
    dialogue: [
      {
        id: "d6_1_1",
        characterId: "narrator",
        text: "El grupo desciende a una cámara subterránea bajo la panadería. El calor es asfixiante. Un pozo de quistes burbujea en el centro.",
        emotion: "normal",
      },
      {
        id: "d6_1_2",
        characterId: "lilith",
        text: "Este... es el corazón. La fuente del parásito.",
        emotion: "shocked",
      },
      {
        id: "d6_1_3",
        characterId: "nick",
        text: "Ese altar... Es maíz negro. El mismo símbolo de los rituales de ceniza y sangre.",
        emotion: "fear",
      },
      {
        id: "d6_1_4",
        characterId: "kruster",
        text: "Mi abuela decía que el horno tenía alma. Pero esto... esto es un demonio horneado.",
        emotion: "worried",
      },
    ],
    nextScene: "scene6_2",
    unlockGallery: ["gallery_factory"],
  },
  {
    id: "scene6_2",
    title: "Cosecha Inhumana",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    music: "demonic_reveal.mp3",
    dialogue: [
      {
        id: "d6_2_1",
        characterId: "narrator",
        text: "Una figura alta emerge entre el vapor del horno. Una máscara de hojalata refleja la luz temblorosa. Túnicas viejas. Brazos hinchados. Ojos enrojecidos.",
        emotion: "normal",
      },
      {
        id: "d6_2_2",
        characterId: "el_granjero",
        text: "Bienvenidos... al renacer. Han venido justo a tiempo para la cosecha.",
        emotion: "creepy",
      },
      {
        id: "d6_2_3",
        characterId: "lilith",
        text: "¿Quién eres? ¿Qué has hecho con esta ciudad?",
        emotion: "angry",
      },
      {
        id: "d6_2_4",
        characterId: "el_granjero",
        text: "Yo... soy el jardinero. La levadura es mi semilla. El hambre... mi agua. Y Quito... mi campo fértil.",
        emotion: "normal",
      },
      {
        id: "d6_2_5",
        characterId: "narrator",
        text: "Criaturas deformes se arrastran desde los hornos contaminados. Brazos múltiples. Mandíbulas de miga endurecida. Ojos que lloran masa.",
        emotion: "normal",
      },
    ],
    nextScene: "scene6_3",
    unlockGallery: ["gallery_granjero"],
  },
  {
    id: "scene6_3",
    title: "Fuego y Ceniza",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    music: "battle_ritual_hellfire.mp3",
    dialogue: [
      {
        id: "d6_3_1",
        characterId: "nick",
        text: "¡Son los infectados! ¡Están completamente mutados!",
        emotion: "panic",
      },
      {
        id: "d6_3_2",
        characterId: "kruster",
        text: "¡Al horno con ustedes! ¡No les gusta el calor, ¿verdad?!",
        emotion: "angry",
      },
      {
        id: "d6_3_3",
        characterId: "sheldon",
        text: "¡Esto es demente! ¡Esto no es ciencia, es... es apocalipsis!",
        emotion: "terrified",
      },
      {
        id: "d6_3_4",
        characterId: "narrator",
        text: "En medio del combate, Kruster tropieza y golpea una losa oculta. Un mapa grabado en piedra se revela: un túnel antiguo.",
        emotion: "normal",
      },
      {
        id: "d6_3_5",
        characterId: "kruster",
        text: "¡El Panecillo! Un horno ceremonial... ¡Una cámara volcánica!",
        emotion: "shocked",
      },
      {
        id: "d6_3_6",
        characterId: "lilith",
        text: "Ese túnel... Es la única forma de purificar la raíz de esta plaga. Hay que llegar allí.",
        emotion: "resolute",
      },
    ],
    nextScene: "scene7_1",
    unlockGallery: ["gallery_battle"],
  },
  // Capítulo 7
  {
    id: "scene7_1",
    title: "El Horno del Fin",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303724/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenInicioCap7.png",
    music: "final_battle_theme.mp3",
    dialogue: [
      {
        id: "d7_1_1",
        characterId: "narrator",
        text: "El grupo alcanza el horno ceremonial bajo El Panecillo. Un cráter artificial con símbolos grabados en roca viva. Las llamas rugen como si algo intentara escapar del núcleo de la tierra.",
        emotion: "normal",
      },
      {
        id: "d7_1_2",
        characterId: "el_granjero",
        text: "¡Han llegado tarde! ¡La semilla germinó! ¡El despertar es inevitable!",
        emotion: "mad",
      },
      {
        id: "d7_1_3",
        characterId: "lilith",
        text: "¡Por la fe de mis ancestros y la sangre de Cristo, te conjuro! ¡Kayta mana kanchu! ¡Exorcizo te, immunde spiritus!",
        emotion: "holy",
      },
      {
        id: "d7_1_4",
        characterId: "narrator",
        text: "Las palabras de Lilith provocan que las llamas se eleven, formando una barrera sagrada entre el grupo y las criaturas deformes.",
        emotion: "normal",
      },
      {
        id: "d7_1_5",
        characterId: "balberith",
        text: "Esto termina aquí. No más sacrificios. No más mentiras.",
        emotion: "angry",
      },
      {
        id: "d7_1_6",
        characterId: "el_granjero",
        text: "Tú... El Toro. Fuiste mi instrumento. Ahora eres mi ofrenda.",
        emotion: "taunt",
      },
      {
        id: "d7_1_7",
        characterId: "balberith",
        text: "No más. Hoy, uso esta fuerza para proteger. No para destruir.",
        emotion: "resolute",
      },
      {
        id: "d7_1_8",
        characterId: "narrator",
        text: "Balberith carga contra el Granjero. Su cadena rompe la armadura oxidada, revelando un cuerpo fusionado con quistes y carne fermentada.",
        emotion: "normal",
      },
    ],
    nextScene: "scene7_2",
    unlockGallery: ["gallery_finalbattle"],
  },
  {
    id: "scene7_2",
    title: "Verdades Finales",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303724/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenInicioCap7.png",
    music: "ritual_climax.mp3",
    dialogue: [
      {
        id: "d7_2_1",
        characterId: "sheldon",
        text: "¡Estamos ganando! ¡El mundo tiene que ver esto! ¡Es historia viva!",
        emotion: "excited",
      },
      {
        id: "d7_2_2",
        characterId: "nick",
        text: "Mi abuelo... él tenía razón. El Corazón Oscuro no era una metáfora... es esto.",
        emotion: "awe",
      },
      {
        id: "d7_2_3",
        characterId: "kruster",
        text: "¡El calor purifica! ¡Esto lo sabían los antiguos panaderos!",
        emotion: "mad",
      },
      {
        id: "d7_2_4",
        characterId: "narrator",
        text: "Las llamas envuelven al Granjero. Su forma colapsa en cenizas. Pero una nueva amenaza surge: una neblina roja comienza a brotar del horno.",
        emotion: "normal",
      },
      {
        id: "d7_2_5",
        characterId: "lilith",
        text: "Esto... no es el Granjero. Es más antiguo. Es la raíz misma de esta maldición. Y nos exige una elección.",
        emotion: "fear",
      },
      {
        id: "d7_2_6",
        characterId: "balberith",
        text: "Sellémoslo aquí. Cueste lo que cueste.",
        emotion: "determined",
      },
      {
        id: "d7_2_7",
        characterId: "nick",
        text: "Podemos redirigirla. El abuelo hablaba de un punto desolado bajo las montañas. ¡Podemos abrir un portal!",
        emotion: "nervous",
      },
      {
        id: "d7_2_8",
        characterId: "sheldon",
        text: "¡Rápido! ¡El horno va a explotar! ¿Qué hacemos?",
        emotion: "panic",
      },
    ],
    nextScene: "scene7_3",
  },
  {
    id: "scene7_3",
    title: "La Decisión",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303724/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenInicioCap7.png",
    music: "decision_theme.mp3",
    dialogue: [
      {
        id: "d7_3_1",
        characterId: "narrator",
        text: "La energía rojiza asciende como una serpiente etérea. Todo está en juego. Es la hora de decidir.",
        emotion: "normal",
      },
    ],
    choices: [
      {
        id: "choice7_1",
        text: "Lilith realiza el sacrificio ritual para sellar la energía.",
        nextScene: "scene7_3_choice1",
      },
      {
        id: "choice7_2",
        text: "Balberith absorbe la energía como ofrenda redentora.",
        nextScene: "scene7_3_choice2",
      },
      {
        id: "choice7_3",
        text: "Nick redirige la energía hacia una zona desolada.",
        nextScene: "scene7_3_choice3",
      },
      {
        id: "choice7_4",
        text: "El grupo duda demasiado. La energía despierta al Granjero.",
        nextScene: "scene7_3_choice4",
      },
    ],
  },

  // Final 1: Sacrificio de Lilith
  {
    id: "scene7_3_choice1",
    title: "Sacrificio de la Fe",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303721/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    music: "sacrificio_theme.mp3",
    dialogue: [
      {
        id: "d7_c1_1",
        characterId: "lilith",
        text: "Por la fe de mis ancestros y el amor por esta tierra, tomo este sacrificio. Que la energía se selle por siempre.",
        emotion: "calm",
      },
      {
        id: "d7_c1_2",
        characterId: "narrator",
        text: "Lilith levanta el crucifijo oscuro que brilla con luz propia. Sus ojos se cierran mientras una neblina roja la envuelve.",
        emotion: "normal",
      },
      {
        id: "d7_c1_3",
        characterId: "lilith",
        text: "Que esta ofrenda purifique Quito y traiga paz a las almas olvidadas.",
        emotion: "serene",
      },
      {
        id: "d7_c1_4",
        characterId: "narrator",
        text: "Un brillo cegador consume su cuerpo. La neblina se disipa. El horno queda sellado y en silencio. El sacrificio ha sido completo.",
        emotion: "normal",
      },
      {
        id: "d7_c1_5",
        characterId: "balberith",
        text: "Tu luz vive en nosotros, Lilith. Nunca te olvidaremos.",
        emotion: "sad",
      },
      {
        id: "d7_c1_6",
        characterId: "nick",
        text: "El sacrificio ha salvado la ciudad. Tu memoria será eterna.",
        emotion: "grateful",
      },
      {
        id: "d7_c1_7",
        characterId: "sheldon",
        text: "Este será el legado más poderoso que alguien pueda contar.",
        emotion: "hopeful",
      },
    ],
  },

  // Final 2: Redención de Balberith
  {
    id: "scene7_3_choice2",
    title: "Redención del Toro",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303721/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    music: "redencion_theme.mp3",
    dialogue: [
      {
        id: "d7_c2_1",
        characterId: "balberith",
        text: "Por la niña, por los que sufrieron, acepto esta carga. Que la oscuridad se disuelva en mi cuerpo.",
        emotion: "resolute",
      },
      {
        id: "d7_c2_2",
        characterId: "narrator",
        text: "Balberith extiende las manos hacia la energía rojiza. Su piel brilla y sus músculos se tensan mientras canaliza el poder ancestral.",
        emotion: "normal",
      },
      {
        id: "d7_c2_3",
        characterId: "balberith",
        text: "Que esta carga sea mi redención y la salvación de Quito.",
        emotion: "determined",
      },
      {
        id: "d7_c2_4",
        characterId: "narrator",
        text: "Con un grito desgarrador, su cuerpo explota en una luz intensa. Cuando la luz se disipa, solo queda su cadena humeante en el suelo.",
        emotion: "normal",
      },
      {
        id: "d7_c2_5",
        characterId: "lilith",
        text: "Tu sacrificio no será olvidado. Que encuentres la paz que mereces.",
        emotion: "sad",
      },
      {
        id: "d7_c2_6",
        characterId: "nick",
        text: "La redención es difícil, pero hoy has salvado a todos nosotros.",
        emotion: "grateful",
      },
      {
        id: "d7_c2_7",
        characterId: "sheldon",
        text: "Esta historia se contará por generaciones. Un héroe inesperado.",
        emotion: "hopeful",
      },
    ],
  },

  // Final 3: Error de Nick
  {
    id: "scene7_3_choice3",
    title: "El Error del Conspiranoico",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303719/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    music: "dark_twist_theme.mp3",
    dialogue: [
      {
        id: "d7_c3_1",
        characterId: "nick",
        text: "Abramos el portal. La energía se irá a un lugar donde no pueda hacer daño... espero.",
        emotion: "nervous",
      },
      {
        id: "d7_c3_2",
        characterId: "kruster",
        text: "¡Rápido! Este lugar no es seguro, pero tenemos que intentarlo.",
        emotion: "urgent",
      },
      {
        id: "d7_c3_3",
        characterId: "narrator",
        text: "La fisura se abre y la energía rojiza se precipita hacia el portal. Por un momento todo parece calmarse.",
        emotion: "normal",
      },
      {
        id: "d7_c3_4",
        characterId: "narrator",
        text: "Pero luego, una explosión retumba en la zona rural cercana a Quito. La energía muta y se expande en una forma aún más virulenta.",
        emotion: "fear",
      },
      {
        id: "d7_c3_5",
        characterId: "sheldon",
        text: "¡Esto es peor que antes! Tenemos que informar al mundo, pero nos están cazando.",
        emotion: "panic",
      },
      {
        id: "d7_c3_6",
        characterId: "nick",
        text: "He cometido un error... y ahora la oscuridad es más fuerte.",
        emotion: "regret",
      },
      {
        id: "d7_c3_7",
        characterId: "lilith",
        text: "La batalla no terminó aquí. Esto solo es el comienzo de un nuevo terror.",
        emotion: "determined",
      },
    ],
  },

  // Final 4: El despertar del Granjero
  {
    id: "scene7_3_choice4",
    title: "El Despertar del Granjero",
    background: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303719/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    music: "dark_final_theme.mp3",
    dialogue: [
      {
        id: "d7_c4_1",
        characterId: "narrator",
        text: "La indecisión del grupo permite que la energía crezca sin control. El horno vibra y un grito bestial llena el aire.",
        emotion: "terror",
      },
      {
        id: "d7_c4_2",
        characterId: "el_granjero",
        text: "¡Finalmente libre! Ahora, todo Quito será mi reino de sombras y cenizas.",
        emotion: "mad",
      },
      {
        id: "d7_c4_3",
        characterId: "balberith",
        text: "¡No podemos rendirnos! ¡Por Lilith, por todos! ¡Luchemos hasta el último aliento!",
        emotion: "furious",
      },
      {
        id: "d7_c4_4",
        characterId: "lilith",
        text: "¡Si caemos, que sea con la fe y el valor intactos!",
        emotion: "defiant",
      },
      {
        id: "d7_c4_5",
        characterId: "narrator",
        text: "El Granjero se abalanza con furia inhumana. La batalla final comienza... pero las sombras cubren toda esperanza.",
        emotion: "dark",
      },
      {
        id: "d7_c4_6",
        characterId: "nick",
        text: "¿Será este el fin? ¿O el inicio de una oscuridad eterna?",
        emotion: "fear",
      },
      {
        id: "d7_c4_7",
        characterId: "sheldon",
        text: "Debemos recordar esta historia para que nunca se repita.",
        emotion: "solemn",
      },
    ],
  },
]


// Funciones helper para navegar por la historia
export function getCharacterById(id: string): Character | undefined {
  return characters.find((char) => char.id === id)
}

export function getSceneById(id: string): Scene | undefined {
  return scenes.find((scene) => scene.id === id)
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id)
}

export function getNextDialogue(scene: Scene, currentIndex: number): DialogueLine | undefined {
  return scene.dialogue[currentIndex + 1]
}

export function hasChoices(scene: Scene): boolean {
  return scene.choices !== undefined && scene.choices.length > 0
}

export function getScenesByChapter(chapterId: string): Scene[] {
  const chapter = getChapterById(chapterId)
  if (!chapter) return []

  return chapter.scenes.map((sceneId) => getSceneById(sceneId)).filter(Boolean) as Scene[]
}
