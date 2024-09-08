import ColorFilter from "./ColorFilter"
import PriceFilter from "./PriceFilter"
import SizeFilter from "./SizeFilter"
import SortingFilter from "./SortBy"

type ColorType = {
  color: string
  id: string
  label: string
  value: string
  counter: number
}
type SizeType = {
  id: string
  label: string
  value: string
}
type FilteringProps = {
  mappedColors: ColorType[]
  mappedSizes: SizeType[]
}
const Filtering = ({ mappedColors, mappedSizes }: FilteringProps) => {
  return (
    <div className="w-full h-fit sticky top-0 flex flex-col gap-y-5">
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
  )
}

export default Filtering
