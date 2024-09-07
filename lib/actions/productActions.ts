import { db } from "@/db"
import { ColorType, SizeType, SortType } from "@/types"

interface FilterOptions {
  sort?: SortType
  color?: ColorType
  size?: SizeType
}

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

export const getFilteredProducts = async (filter: FilterOptions) => {
  try {
    let { sort, color, size } = filter

    if (size === undefined) size = []
    if (color === undefined) color = []
    if (typeof color !== "object") color = [color]
    if (sort === undefined) sort = { label: "createdAt", orderBy: "desc" }
    console.log("sort server", sort, "/ncolor:", color)
    const filterdProducts = await db.product.findMany({
      // [`${sort?.label}`]
      orderBy: [{ [sort?.label as string]: sort?.orderBy }],
      where: {
        sizes: {
          hasEvery: size,
        },

        colors: { hasEvery: color },
      },
    })

    return filterdProducts
  } catch (err) {
    console.error(err)
    throw err
  }
}
