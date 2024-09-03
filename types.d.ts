type CollectionType = {
  id: string
  title: string
  description: string
  image: string
  Product: ProductType[]
  updatedAt: Date
  createdAt: Date
}

type ProductType = {
  id: string
  title: string
  description: string
  media: [string]
  category: string
  Collection: CollectionType[]
  tags: [string]
  sizes: [string]
  colors: [string]
  price: number
  expense: number
  createdAt: Date
  updatedAt: Date
}

type UserType = {
  clerkId: string
  wishlist: [string]
  orders: [string]
  createdAt: Date
  updatedAt: Date
}

type CartItem = {
  item: productType
  quantity: number
  color?: string
  size?: string
}
