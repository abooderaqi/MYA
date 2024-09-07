import ProductList from "@/app/_components/ProdoctList"
import ColorFilter from "@/app/_components/ui/ColorFilter"
import SizeFilter from "@/app/_components/ui/SizeFilter"
import SortingFilter from "@/app/_components/ui/SortBy"
import {
  getProductsColors,
  getProductsSizes,
} from "@/lib/actions/productActions"
import {
  MakeArrayUnique,
  mapFilterColors,
  mapFilterSizes,
  mapSearchQuery,
  mapSort,
  mapSortQuery,
} from "@/lib/utils"

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
  const sizes = await getProductsSizes()
  const mappedColors = mapFilterColors(colors)
  const uniqueSizes = MakeArrayUnique(sizes)
  const mappedSizes = mapFilterSizes(uniqueSizes)
  const mappedSort = mapSort(querysort)

  return (
    <div className="flex flex-col items-center gap-16 mt-8 w-full h-full">
      <div className="banner w-fit h-fit">
        <h1 className="text-center text-3xl font-semibold">All Products</h1>
      </div>
      <div className="lg:flex lg:flex-row flex-col w-full ">
        <div className="lg:w-fit w-full">
          <div className="w-[20rem]">
            <ColorFilter colors={mappedColors} />
          </div>
          <div className="w-[20rem]">
            <SizeFilter size={mappedSizes} />
          </div>
          <div className="w-[20rem]">
            <SortingFilter sort={mappedSort} />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <ProductList sort={querysort} colors={querycolors} size={querysize} />
        </div>
      </div>
    </div>
  )
}

export default Product
