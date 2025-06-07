// Tipos para la estructura de la historia
export interface Character {
  id: string
  name: string
  avatar: string
  color: string
  description?: string
}

export interface DialogueLine {
  id: string
  characterId: string
  text: string
  emotion?: "normal" | "happy" | "sad" | "angry" | "fear" | "surprise"
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

// Personajes del juego
export const characters: Character[] = [
  {
    id: "elena",
    name: "Elena Blackwood",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#DC143C",
    description: "Una joven investigadora que llega a Ravenshollow buscando respuestas sobre su pasado.",
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#8B0000",
    description: "Un misterioso habitante de Ravenshollow que parece saber más de lo que dice.",
  },
  {
    id: "sarah",
    name: "Sarah Whitmore",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#4B0082",
    description: "La bibliotecaria del pueblo, guardiana de secretos ancestrales.",
  },
  {
    id: "narrator",
    name: "Narrador",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#696969",
    description: "La voz que guía a través de los horrores de Ravenshollow.",
  },
  {
    id: "unknown",
    name: "???",
    avatar: "/placeholder.svg?height=400&width=400",
    color: "#2F1B69",
    description: "Una presencia misteriosa que acecha en las sombras.",
  },
]

// Capítulos del juego
export const chapters: Chapter[] = [
  {
    id: "chapter1",
    title: "Llegada a Ravenshollow",
    description: "Elena llega al misterioso pueblo en busca de respuestas sobre su pasado.",
    scenes: ["scene1_1", "scene1_2", "scene1_3", "scene1_4"],
  },
  {
    id: "chapter2",
    title: "Secretos en la Niebla",
    description: "Los primeros encuentros revelan que Ravenshollow guarda secretos oscuros.",
    scenes: ["scene2_1", "scene2_2", "scene2_3"],
  },
  {
    id: "chapter3",
    title: "El Despertar",
    description: "La verdad comienza a emerger, pero ¿está Elena preparada para enfrentarla?",
    scenes: ["scene3_1", "scene3_2", "scene3_3"],
  },
]

// Escenas del juego
export const scenes: Scene[] = [
  {
    id: "scene1_1",
    title: "Llegada al Pueblo",
    background: "/placeholder.svg?height=800&width=1400",
    music: "ambient_arrival.mp3",
    dialogue: [
      {
        id: "d1_1_1",
        characterId: "narrator",
        text: "El autobús se detiene con un chirrido metálico que rompe el silencio sepulcral de la tarde. Ravenshollow se extiende ante ti como una herida abierta en la realidad.",
        emotion: "normal",
      },
      {
        id: "d1_1_2",
        characterId: "elena",
        text: "Por fin... después de tantos años, he regresado. Pero este lugar... se siente diferente. Más frío. Más... vacío.",
        emotion: "sad",
      },
      {
        id: "d1_1_3",
        characterId: "narrator",
        text: "Las casas parecen observarte con ventanas como ojos muertos. El viento susurra secretos que preferirías no escuchar.",
        emotion: "fear",
      },
    ],
    nextScene: "scene1_2",
    unlockGallery: ["gallery_arrival"],
  },
  {
    id: "scene1_2",
    title: "El Encuentro",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d1_2_1",
        characterId: "elena",
        text: "¿Hola? ¿Hay alguien aquí? Este lugar parece completamente abandonado...",
        emotion: "normal",
      },
      {
        id: "d1_2_2",
        characterId: "marcus",
        text: "No abandonado, querida Elena. Solo... esperando. Te hemos estado esperando durante mucho tiempo.",
        emotion: "normal",
      },
      {
        id: "d1_2_3",
        characterId: "elena",
        text: "¿Cómo sabes mi nombre? ¿Quién eres tú?",
        emotion: "surprise",
      },
      {
        id: "d1_2_4",
        characterId: "marcus",
        text: "Soy Marcus Thorne. Y en cuanto a cómo sé tu nombre... digamos que tu llegada no es una sorpresa para nadie en Ravenshollow.",
        emotion: "normal",
      },
    ],
    choices: [
      {
        id: "choice1_2_1",
        text: "¿Qué quieres decir con que me esperaban?",
        nextScene: "scene1_3",
      },
      {
        id: "choice1_2_2",
        text: "Esto es muy extraño. Creo que debería irme.",
        nextScene: "scene1_4",
      },
    ],
  },
  {
    id: "scene1_3",
    title: "Revelaciones Iniciales",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d1_3_1",
        characterId: "marcus",
        text: "Tu familia tiene una historia larga con este pueblo, Elena. Una historia que se remonta a generaciones.",
        emotion: "normal",
      },
      {
        id: "d1_3_2",
        characterId: "elena",
        text: "Mi familia... pero mis padres nunca me hablaron de este lugar. Dijeron que era solo un pueblo donde nací.",
        emotion: "sad",
      },
      {
        id: "d1_3_3",
        characterId: "marcus",
        text: "Hay muchas cosas que tus padres no te dijeron. Cosas que quizás era mejor que no supieras... hasta ahora.",
        emotion: "normal",
      },
      {
        id: "d1_3_4",
        characterId: "elena",
        text: "¿Qué tipo de cosas? ¡Necesito saber la verdad!",
        emotion: "angry",
      },
    ],
    nextScene: "scene2_1",
  },
  {
    id: "scene1_4",
    title: "Intento de Escape",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d1_4_1",
        characterId: "elena",
        text: "No, esto está mal. Muy mal. Necesito salir de aquí ahora mismo.",
        emotion: "fear",
      },
      {
        id: "d1_4_2",
        characterId: "marcus",
        text: "Me temo que eso no será posible, Elena. El último autobús ya se fue, y el próximo no llegará hasta... bueno, hasta que sea el momento adecuado.",
        emotion: "normal",
      },
      {
        id: "d1_4_3",
        characterId: "elena",
        text: "¿Qué quieres decir? ¡Debe haber alguna forma de salir de aquí!",
        emotion: "fear",
      },
      {
        id: "d1_4_4",
        characterId: "unknown",
        text: "No hay escape de lo que eres, Elena Blackwood. No hay escape de tu destino.",
        emotion: "fear",
      },
    ],
    nextScene: "scene2_1",
  },
  {
    id: "scene2_1",
    title: "La Biblioteca de los Secretos",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d2_1_1",
        characterId: "sarah",
        text: "Bienvenida a la biblioteca de Ravenshollow, Elena. He estado cuidando estos libros... y estos secretos... durante décadas.",
        emotion: "normal",
      },
      {
        id: "d2_1_2",
        characterId: "elena",
        text: "Sarah Whitmore, ¿verdad? Marcus me dijo que podrías ayudarme a entender qué está pasando aquí.",
        emotion: "normal",
      },
      {
        id: "d2_1_3",
        characterId: "sarah",
        text: "Entender... sí, supongo que es hora de que entiendas. Pero ten cuidado con lo que deseas saber, querida. Algunos conocimientos cambian a una persona para siempre.",
        emotion: "sad",
      },
    ],
    choices: [
      {
        id: "choice2_1_1",
        text: "Necesito saber la verdad, sin importar las consecuencias.",
        nextScene: "scene2_2",
      },
      {
        id: "choice2_1_2",
        text: "Tal vez debería pensarlo mejor...",
        nextScene: "scene2_3",
      },
    ],
  },
  {
    id: "scene2_2",
    title: "La Verdad Revelada",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d2_2_1",
        characterId: "sarah",
        text: "Muy bien. La familia Blackwood no es ordinaria, Elena. Ustedes son... guardianes. Protectores de un equilibrio muy delicado entre nuestro mundo y... otros.",
        emotion: "normal",
      },
      {
        id: "d2_2_2",
        characterId: "elena",
        text: "¿Guardianes? ¿Otros mundos? Esto suena a locura...",
        emotion: "surprise",
      },
      {
        id: "d2_2_3",
        characterId: "sarah",
        text: "¿Locura? Mira a tu alrededor, Elena. ¿Te parece normal este lugar? ¿Te parece normal que el tiempo parezca moverse diferente aquí?",
        emotion: "normal",
      },
      {
        id: "d2_2_4",
        characterId: "elena",
        text: "Yo... tienes razón. Desde que llegué, todo se siente... distorsionado.",
        emotion: "fear",
      },
    ],
    nextScene: "scene3_1",
  },
  {
    id: "scene2_3",
    title: "La Duda",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d2_3_1",
        characterId: "sarah",
        text: "Sabia decisión. Pero me temo que el tiempo para la duda se está agotando, Elena.",
        emotion: "sad",
      },
      {
        id: "d2_3_2",
        characterId: "elena",
        text: "¿Qué quieres decir?",
        emotion: "normal",
      },
      {
        id: "d2_3_3",
        characterId: "unknown",
        text: "Significa que las fuerzas que se agitan en Ravenshollow no esperarán a que estés lista, Elena Blackwood.",
        emotion: "fear",
      },
    ],
    nextScene: "scene3_1",
  },
  {
    id: "scene3_1",
    title: "El Despertar del Poder",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d3_1_1",
        characterId: "narrator",
        text: "El aire se espesa. La realidad se tambalea. Algo ancestral despierta en Elena, algo que había estado dormido durante años.",
        emotion: "fear",
      },
      {
        id: "d3_1_2",
        characterId: "elena",
        text: "¿Qué... qué me está pasando? Puedo sentir algo... algo poderoso moviéndose dentro de mí.",
        emotion: "fear",
      },
      {
        id: "d3_1_3",
        characterId: "marcus",
        text: "Tu herencia despierta, Elena. El poder de los Blackwood fluye por tus venas. Pero con gran poder...",
        emotion: "normal",
      },
      {
        id: "d3_1_4",
        characterId: "elena",
        text: "Viene gran responsabilidad. Lo sé. Pero ¿estoy lista para esto?",
        emotion: "sad",
      },
    ],
    choices: [
      {
        id: "choice3_1_1",
        text: "Acepto mi destino. Haré lo que sea necesario.",
        nextScene: "scene3_2",
      },
      {
        id: "choice3_1_2",
        text: "No puedo hacer esto. Es demasiado para mí.",
        nextScene: "scene3_3",
      },
    ],
  },
  {
    id: "scene3_2",
    title: "La Aceptación",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d3_2_1",
        characterId: "elena",
        text: "Si este es mi destino, entonces lo acepto. Protegeré este equilibrio, sin importar el costo.",
        emotion: "normal",
      },
      {
        id: "d3_2_2",
        characterId: "marcus",
        text: "Sabía que tenías la fuerza de tu linaje, Elena. Ravenshollow está a salvo... por ahora.",
        emotion: "happy",
      },
      {
        id: "d3_2_3",
        characterId: "narrator",
        text: "Y así, Elena Blackwood abraza su destino, convirtiéndose en la guardiana que Ravenshollow necesitaba. Pero esta es solo el comienzo de su historia...",
        emotion: "normal",
      },
    ],
  },
  {
    id: "scene3_3",
    title: "El Rechazo",
    background: "/placeholder.svg?height=800&width=1400",
    dialogue: [
      {
        id: "d3_3_1",
        characterId: "elena",
        text: "No puedo... esto es demasiado. Solo quería respuestas, no... esto.",
        emotion: "fear",
      },
      {
        id: "d3_3_2",
        characterId: "unknown",
        text: "El destino no se puede rechazar, Elena Blackwood. Solo se puede retrasar... y el precio de la demora es siempre mayor.",
        emotion: "angry",
      },
      {
        id: "d3_3_3",
        characterId: "narrator",
        text: "Elena huye de su destino, pero en Ravenshollow, el pasado siempre alcanza a los que intentan escapar. Su historia continuará, quiera o no...",
        emotion: "sad",
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
