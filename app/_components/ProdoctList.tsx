import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/actions/productActions"

const ProductList = async () => {
  const products = await getProducts()
  return (
    <Suspense fallback={<Spinner />}>
      <div className="container">
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="w-full flex flex-col items-center p-4">
            <p className="w-fit my-4">{products.length} Items found</p>
            <div className="flex w-full h-full justify-center items-center gap-8 flex-wrap">
              {products?.map((product, index) => (
                <ProductCard key={product.id + `${index}`} product={product as any} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default ProductList
