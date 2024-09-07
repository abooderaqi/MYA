import ProductList from "@/app/_components/ProdoctList"

const Product = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  const sort = searchParams?.sort || undefined
  const colors = searchParams?.color || undefined

  console.log("colors", colors)
  console.log("sort", sort)
  // const priceFilter = searchParams?.price || "all"
  // const colorFilter = searchParams?.color || "all"
  // console.log(priceFilter, colorFilter)
  return (
    <div className="flex flex-col gap-16 mt-8">
      <h1 className="text-center text-3xl font-semibold">All Products</h1>
      <div className="flex justify-center items-center">
        <ProductList sort={sort as string[]} colors={colors as string[]} />
      </div>
    </div>
  )
}

export default Product
