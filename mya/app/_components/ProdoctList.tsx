import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import { useGetProducts } from "@/hooks/useGetProducts"
import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/actions/productActions"

const ProductList = async () => {
  const products = await getProducts()
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex flex-col items-center py-8 px-5 gap-10">
        <p className="text-font-bold text-3xl ">Products</p>
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="flex flex-wrap mx-auto gap-16">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default ProductList
