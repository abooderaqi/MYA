import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import ProductCard from "./ProductCard"
import { getFilteredProducts, getProducts } from "@/lib/actions/productActions"
import { ColorType, ProductType, SizeType, SortType } from "@/types"

interface ProductListProps {
  sort: string[]
  size: string[]
  colors: string[]
  priceRange: [number, number]
}

const ProductList = async ({
  sort,
  colors,
  size,
  priceRange,
}: ProductListProps) => {
  const [label, orderBy] = sort
  const products = await getFilteredProducts({
    sort: { label: label, orderBy: orderBy },
    color: colors,
    size: size,
    priceRange: priceRange,
  })

  return (
    <Suspense fallback={<Spinner />}>
      <div className="w-full h-full">
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="w-full flex flex-col items-center">
            <p className="w-fit p-2">{products.length} items</p>
            <ul className="relative w-full h-full grid gap-x-[1.5px] gap-y-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 list-none">
              {products?.map((product, index) => (
                <ProductCard
                  key={product.id + index}
                  product={product as ProductType}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default ProductList
