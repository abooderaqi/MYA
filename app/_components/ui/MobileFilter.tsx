import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet"
import Filtering from "./Filtering"
import { FC } from "react"
import { FilterIcon } from "lucide-react"

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

const MobileFilter = ({ mappedColors, mappedSizes }: FilteringProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Button variant="default">
          <FilterIcon /> Filter
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white">
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
        </SheetHeader>
        <div className="p-4 w-full h-full">
          <Filtering mappedColors={mappedColors} mappedSizes={mappedSizes} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileFilter
