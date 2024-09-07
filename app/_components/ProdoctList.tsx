import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import ProductCard from "./ProductCard"
import { getFilteredProducts, getProducts } from "@/lib/actions/productActions"
import { ColorType, ProductType, SizeType, SortType } from "@/types"

const ProductList = async ({
  sort,
  colors,
}: {
  sort: string[]
  colors: string[]
}) => {
  const products = await getProducts()
  const filterFun = await getFilteredProducts({
    sort: { label: sort.at(0) as string, orderBy: sort.at(1) as string },
    color: colors,
    // size: ["md"],
  })

  return (
    <Suspense fallback={<Spinner />}>
      <div className="container">
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="w-full flex flex-col items-center p-4">
            <p className="text-3xl font-bold">Products</p>
            <p className="w-fit my-4">{products.length} Items found</p>
            <div className="flex w-full h-full justify-center items-center gap-8 flex-wrap">
              {filterFun?.map((product, index) => (
                <ProductCard
                  key={product.id + index}
                  product={product as ProductType}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default ProductList
