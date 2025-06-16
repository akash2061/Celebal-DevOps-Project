export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "beans" | "ground" | "equipment" | "accessories"
  roastLevel?: "light" | "medium" | "dark"
  origin?: string
  brewingMethod?: string[]
  stock: number
  rating: number
  reviews: number
  isOrganic?: boolean
  isFairTrade?: boolean
}

export interface CartItem {
  product: Coffee
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (product: Coffee, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export type Product = Coffee
