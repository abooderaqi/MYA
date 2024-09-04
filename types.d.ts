import { ProductType } from "./types.d"
import { Prisma } from "@prisma/client"

export type CollectionType = Prisma.Payload.CollectionType<{}>
export type ProductType = Prisma.Payload.ProductType<{}>
export type UserType = Prisma.Payload.UserType<{}>

export type CartItem = {
  item: productType
  quantity: number
  color?: string
  size?: string
}
