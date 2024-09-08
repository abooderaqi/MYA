import ProductList from "@/app/_components/ProdoctList"
import ColorFilter from "@/app/_components/ui/ColorFilter"
import Filtering from "@/app/_components/ui/Filtering"
import MobileFilter from "@/app/_components/ui/MobileFilter"
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
      <div className="flex flex-col lg:flex lg:flex-row gap-2 w-full h-full ">
        <div className="lg:visible lg-max:hidden">
          <Filtering mappedColors={mappedColors} mappedSizes={mappedSizes} />
        </div>
        <div className="lg:hidden visible w-full h-fit grid grid-cols-3 items-center justify-items-center  ">
          <MobileFilter mappedColors={mappedColors} mappedSizes={mappedSizes} />
          <h1 className="text-xl font-bold">All Products</h1>
        </div>
        <ProductList
          sort={querysort}
          colors={querycolors}
          size={querysize}
          priceRange={castedPriceRange as [number, number]}
        />
      </div>
    </div>
  )
}

export default Product
