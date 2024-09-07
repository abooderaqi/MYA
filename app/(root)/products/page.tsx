import ProductList from "@/app/_components/ProdoctList"
import ColorFilter from "@/app/_components/ui/ColorFilter"
import { getProductsColors } from "@/lib/actions/productActions"
import { mapFilterColors, mapSearchQuery, mapSortQuery } from "@/lib/utils"

const Product = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  let querysort = searchParams?.sort
  let querycolors = searchParams?.color
  let querysize = searchParams?.size

  querysort = mapSortQuery(querysort as string)
  querycolors = mapSearchQuery(querycolors as string)
  querysize = mapSearchQuery(querysize as string)

  const colors = await getProductsColors()
  // const uniqueColors = MakeArrayUnique(colors)
  const mappedColors = mapFilterColors(colors)

  return (
    <div className="flex flex-col items-center gap-16 mt-8 w-full h-full">
      <div className="banner w-fit h-fit">
        <h1 className="text-center text-3xl font-semibold">All Products</h1>
      </div>
      <div className="relative wrapper flex w-full h-full p-2">
        <div className="min-h-full block w-fit  p-2">
          <div className="w-[20rem] h-fit sticky top-0 ">
            <ColorFilter colors={mappedColors}/>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ProductList sort={querysort} colors={querycolors} size={querysize} />
        </div>
      </div>
    </div>
  )
}

export default Product
