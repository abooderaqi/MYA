import ProductList from "@/app/_components/ProdoctList"
import ColorFilter from "@/app/_components/ui/ColorFilter"
import PriceFilter from "@/app/_components/ui/PriceFilter"
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
  mapPriceRange,
  mapSearchQuery,
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
  let priceRange = searchParams?.pricerange

  querysort = mapSortQuery(querysort as string)
  querycolors = mapSearchQuery(querycolors as string)
  querysize = mapSearchQuery(querysize as string)

  const castedPriceRange = mapPriceRange(priceRange as string)
  const colors = await getProductsColors()
  const sizes = await getProductsSizes()
  const mappedColors = mapFilterColors(colors)
  const uniqueSizes = MakeArrayUnique(sizes)
  const mappedSizes = mapFilterSizes(uniqueSizes)

  return (
    <div className="container flex flex-col items-center gap-16 mt-8 w-full h-full">
      <div className="flex flex-row gap-2 w-full h-full">
        <div className="lg:w-fit w-full h-fit sticky top-0 flex flex-col gap-y-5">
          <h6 className="bg-gray-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
            Sort by
          </h6>
          <div className="w-[15rem]">
            <SortingFilter />
          </div>
          <h6 className="bg-gray-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
            Filter
          </h6>
          <div className="w-[15rem]">
            <ColorFilter colors={mappedColors} />
          </div>
          <div className="w-[15rem]">
            <SizeFilter size={mappedSizes} />
          </div>
          <div className="w-[15rem]">
            <PriceFilter />
          </div>
        </div>
        <ProductList sort={querysort} colors={querycolors} size={querysize} priceRange={castedPriceRange as [number, number]} />
      </div>
    </div>
  )
}

export default Product
