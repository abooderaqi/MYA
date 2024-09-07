import { db } from "@/db"
import { ColorType, SizeType, SortType } from "@/types"

interface FilterOptions {
  sort: SortType
  color: ColorType
  size: SizeType
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
    const whereClause: any = {};

    if (size.length > 0) {
      whereClause.sizes = {
        hasSome: size,
      };
    }

    if (color.length > 0) {
      whereClause.colors = {
        hasSome: color,
      };
    }

    const filterdProducts = await db.product.findMany({
      // [`${sort?.label}`]
      orderBy: [{ [sort.label as string]: sort.orderBy }],
      where: whereClause
    })

    return filterdProducts
  } catch (err) {
    console.error(err)
    throw err
  }
}



export const getProductsColors = async (collectionId?: string) => {
  try {
    const products = await db.product.findMany({
      // [`${sort?.label}`]
    })
    const itemsColorQuantity = new Map<string,number>()
    products.forEach(product => {
      const productColors = product.colors
      productColors.forEach(pColor => {
        if(!itemsColorQuantity.has(pColor)){
          itemsColorQuantity.set(pColor, 1)
        } else  {
          const quantity = itemsColorQuantity.get(pColor) as number
          itemsColorQuantity.set(pColor,quantity + 1)
        }
      })
    })
    return itemsColorQuantity
  } catch (err) {
    console.error(err)
    throw err
  }
}

