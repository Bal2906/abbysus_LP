import type { SaveSlot, GalleryImage } from "./types"

// Ranuras de guardado iniciales
export const initialSaveSlots: SaveSlot[] = [
  {
    id: 1,
    name: "Inicio del viaje: Lilith en El Panecillo",
    date: "2025-06-18 09:12",
    scene: "Capítulo 1 - La Novicia",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298100/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-front.png",
    isEmpty: false,
  },
  {
    id: 2,
    name: "Encuentro con Sheldon y los susurros",
    date: "2025-06-18 10:27",
    scene: "Capítulo 2 - El Conspiratorio",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    isEmpty: false,
  },
  {
    id: 3,
    name: "Slot vacío",
    date: "",
    scene: "",
    thumbnail: "",
    isEmpty: true,
  },
  {
    id: 4,
    name: "Slot vacío",
    date: "",
    scene: "",
    thumbnail: "",
    isEmpty: true,
  },
  {
    id: 5,
    name: "Slot vacío",
    date: "",
    scene: "",
    thumbnail: "",
    isEmpty: true,
  },
  {
    id: 6,
    name: "Slot vacío",
    date: "",
    scene: "",
    thumbnail: "",
    isEmpty: true,
  },
]

// Galería de imágenes desbloqueables del juego
export const galleryImages: GalleryImage[] = [
  {
    id: "arrival-lilith-panecillo",
    title: "Llegada de Lilith al Panecillo",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298100/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-front.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298100/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-back1.png",
    unlocked: true,
    description: "La silueta de la joven novicia se recorta contra el cielo de Quito mientras desciende al infierno urbano.",
  },
  {
    id: "first-possession-kruster",
    title: "La primera posesión",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    unlocked: true,
    description: "El momento en que Kruster sucumbe a las voces del horno ancestral. Sus ojos brillan con fuego desconocido.",
  },
  {
    id: "balberith-reveal",
    title: "Balberith revela su forma real",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/5.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/5.png",
    unlocked: false,
    description: "Las cadenas se rompen. El espíritu ancestral muestra su figura infernal envuelta en llamas sagradas.",
  },
  {
    id: "final-ritual",
    title: "El Ritual del Horno",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    unlocked: false,
    description: "El clímax de la historia. Las decisiones de Lilith sellarán el destino de Quito… y quizás del mundo.",
  },
  {
    id: "true-ending-lilith",
    title: "Final verdadero: Sacrificio de Lilith",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    unlocked: false,
    description: "Lilith entrega su alma al fuego sagrado. El silencio eterno que sigue es tanto paz como tragedia.",
  },
  {
    id: "chaotic-ending",
    title: "Final caótico: El Granjero renace",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    unlocked: false,
    description: "La energía roja despierta al Granjero. El mundo se curva ante el nuevo horror encarnado.",
  },
]
