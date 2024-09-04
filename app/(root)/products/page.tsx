import ProductList from "@/app/_components/ProdoctList"

const Product = async () => {
  return (
    <div className="flex flex-col gap-16 mt-8">
      <h1 className="text-center text-3xl font-semibold">All Products</h1>
      <div className="flex justify-center items-center">
        <ProductList />
      </div>
    </div>
  )
}

export default Product
