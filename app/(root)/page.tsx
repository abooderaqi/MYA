import Image from "next/image"
import Collections from "@/app/_components/Collections"

import NewArrivalProduct from "../_components/NewArrivalProduct"
import Slider from "../_components/ui/Slider"
import ProductList from "../_components/ui/ProductList"

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl text-center">Featured Products</h1>
        <NewArrivalProduct />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 text-center">
          Collections
        </h1>
        <Collections />
      </div>
    </div>
  )
}
