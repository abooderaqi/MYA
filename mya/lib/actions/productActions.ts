import { db } from "@/db"

export const getProducts = async () => {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
    include: { collection: true },
  })
  return products
}

export const getProductById = async (id: string) => {
  const product = await db.product.findUnique({
    where: { id },
    include: { collection: true },
  })
  return product
}
