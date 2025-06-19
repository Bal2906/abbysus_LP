export interface GalleryImage {
  id: string
  title: string
  thumbnail: string
  fullImage: string
  unlocked: boolean
  description: string
  category?: string
  unlockCondition?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: "arrival-quito-night",
    title: "Llegada a Quito de Noche",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298108/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-sideLeft.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298108/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-sideLeft.png",
    unlocked: true,
    description: "La capital ecuatoriana iluminada por neones mientras Lilith llega con su misión en mente.",
    category: "Escenarios",
    unlockCondition: "Iniciar capítulo 1",
  },
  {
    id: "casa-sagrado-corazon",
    title: "Casa del Sagrado Corazón",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298103/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-front1.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298103/assets-MortiSabbat/background/assets-MortiSabbat/background/basilica-front1.png",
    unlocked: true,
    description: "El convento donde Lilith creció y comenzó su entrenamiento como exorcista.",
    category: "Escenarios",
    unlockCondition: "Completar capítulo 1",
  },
  {
    id: "balberith-revelado",
    title: "Balberith Revelado",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298375/assets-MortiSabbat/characters/assets-MortiSabbat/characters/balberith.jpg",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298375/assets-MortiSabbat/characters/assets-MortiSabbat/characters/balberith.jpg",
    unlocked: false,
    description: "La verdadera forma del Toro, protector de Lilith y antiguo siervo rebelde.",
    category: "Personajes",
    unlockCondition: "Completar capítulo 3",
  },
  {
    id: "kruster-desquiciado",
    title: "Kruster Desquiciado",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298114/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderiaDentro.png",
    unlocked: false,
    description: "Kruster en su obsesión por la tradición del pan eterno y su conexión con el Horno.",
    category: "Personajes",
    unlockCondition: "Completar capítulo 5",
  },
  {
    id: "el-horno-rojo",
    title: "El Horno Rojo",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298112/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderia%20entrada.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298112/assets-MortiSabbat/background/assets-MortiSabbat/background/panaderia%20entrada.png",
    unlocked: false,
    description: "El horno ceremonial debajo de El Panecillo, centro de la energía maldita.",
    category: "Escenarios",
    unlockCondition: "Entrar a la escena final",
  },
  {
    id: "lilith-sacrificio",
    title: "El Sacrificio de Lilith",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303721/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303721/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalesBuenos.png",
    unlocked: false,
    description: "Lilith entrega su vida para sellar el mal y proteger Quito para siempre.",
    category: "Finales",
    unlockCondition: "Final 1 alcanzado",
  },
  {
    id: "balberith-redencion",
    title: "Redención de Balberith",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298115/assets-MortiSabbat/background/assets-MortiSabbat/background/tunel.png",
    unlocked: false,
    description: "El Toro canaliza el poder oscuro en sí mismo para contenerlo eternamente.",
    category: "Finales",
    unlockCondition: "Final 2 alcanzado",
  },
  {
    id: "nick-destierro",
    title: "El Destierro de Nick",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298085/assets-MortiSabbat/background/assets-MortiSabbat/background/5.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298085/assets-MortiSabbat/background/assets-MortiSabbat/background/5.png",
    unlocked: false,
    description: "Nick canaliza la energía hacia un desierto andino, aislándola del mundo humano.",
    category: "Finales",
    unlockCondition: "Final 3 alcanzado",
  },
  {
    id: "despertar-granjero",
    title: "El Despertar del Granjero",
    thumbnail: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303719/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    fullImage: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750303719/assets-MortiSabbat/background/assets-MortiSabbat/background/imagenCap7FinalMalo.png",
    unlocked: false,
    description: "El mal ancestral despierta y Quito cae bajo un velo de sangre y desesperanza.",
    category: "Finales",
    unlockCondition: "Final 4 alcanzado",
  }
]

export const getUnlockedCount = (): number => {
  return galleryImages.filter((image) => image.unlocked).length;
}

export const getTotalCount = (): number => {
  return galleryImages.length;
}

export const getImagesByCategory = (category: string): GalleryImage[] => {
  return galleryImages.filter((image) => image.category === category);
}

export const getCategories = (): string[] => {
  const categories = galleryImages.map((image) => image.category || "Sin categoría")
  return [...new Set(categories)]
}
