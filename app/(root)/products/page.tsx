import ProductList from "@/app/_components/ProdoctList"
import ProductCard from "@/app/_components/ProductCard"
import { useGetProducts } from "@/hooks/useGetProducts"
import { getProducts } from "@/lib/actions/productActions"

const Product = async () => {
  const products = await getProducts()
  return (
    <div className="flex flex-col gap-16 mt-8">
      <h1 className="text-center text-5xl font-semibold">All Products</h1>
      <div className="flex justify-center items-center flex-wrap">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Product
