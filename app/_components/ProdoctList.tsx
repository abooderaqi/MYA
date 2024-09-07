import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import ProductCard from "./ProductCard"
import { getFilteredProducts, getProducts } from "@/lib/actions/productActions"
import { ColorType, ProductType, SizeType, SortType } from "@/types"

interface ProductListProps {
  sort: string[],
  size: string[] 
  colors: string[]
}

const ProductList = async ({
  sort,
  colors,
  size
}:
  ProductListProps
) => {
  const [label, orderBy] = sort 
  const products = await getFilteredProducts({
    sort: { label: label, orderBy: orderBy },
    color: colors,
    size: size
  })
 
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex">
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="w-full flex flex-col items-center p-4">
            <p className="text-3xl font-bold">Products</p>
            <p className="w-fit my-4">{products.length} Items found</p>
            <div className="flex w-full h-full justify-center items-center gap-8 flex-wrap">
              {products?.map((product, index) => (
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
