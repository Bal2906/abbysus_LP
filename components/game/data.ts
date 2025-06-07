import type { SaveSlot, GalleryImage } from "./types"

export const initialSaveSlots: SaveSlot[] = [
  {
    id: 1,
    name: "Llegada a Ravenshollow",
    date: "2024-01-15 14:30",
    scene: "Capítulo 1",
    thumbnail: "/placeholder.svg?height=200&width=300",
    isEmpty: false,
  },
  {
    id: 2,
    name: "Encuentro con Marcus",
    date: "2024-01-15 15:45",
    scene: "Capítulo 2",
    thumbnail: "/placeholder.svg?height=200&width=300",
    isEmpty: false,
  },
  { id: 3, name: "Slot vacío", date: "", scene: "", thumbnail: "", isEmpty: true },
  { id: 4, name: "Slot vacío", date: "", scene: "", thumbnail: "", isEmpty: true },
  { id: 5, name: "Slot vacío", date: "", scene: "", thumbnail: "", isEmpty: true },
  { id: 6, name: "Slot vacío", date: "", scene: "", thumbnail: "", isEmpty: true },
]

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Elena en Ravenshollow",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "Elena llega al misterioso pueblo de Ravenshollow",
  },
  {
    id: "2",
    title: "Encuentro Nocturno",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "Un encuentro inesperado en la oscuridad",
  },
  {
    id: "3",
    title: "Secretos Revelados",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "Los secretos más oscuros salen a la luz",
  },
  {
    id: "4",
    title: "El Final",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El destino de Elena se decide",
  },
  {
    id: "5",
    title: "Personajes",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: true,
    description: "Los habitantes de Ravenshollow",
  },
  {
    id: "6",
    title: "Misterio",
    thumbnail: "/placeholder.svg?height=200&width=300",
    fullImage: "/placeholder.svg?height=800&width=1200",
    unlocked: false,
    description: "El misterio se profundiza",
  },
]
