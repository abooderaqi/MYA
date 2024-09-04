import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import { useGetProducts } from "@/hooks/useGetProducts"
import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/actions/productActions"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ProductList = async () => {
  const products = await getProducts()
  return (
    <Suspense fallback={<Spinner />}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">
          Products
        </h2>
        {!products || products.length === 0 ? (
          <p className="font-bold">No products found</p>
        ) : (
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {products?.map((product, index) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default ProductList
