import { Suspense } from "react"

import Collections from "@/app/_components/Collections"
import NewArrivalProduct from "../_components/NewArrivalProduct"
import Slider from "../_components/ui/Slider"
import Spinner from "../_components/ui/Spinner"

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Slider />
      <div className="container mx-auto">
        <h1 className="text-2xl text-center mb-6">Featured Products</h1>
        <Suspense fallback={<Spinner />}>
          <NewArrivalProduct />
        </Suspense>
      </div>
      <div className="w-full h-full">
        <h1 className="text-2xl text-center mb-6">
          Collections
        </h1>
        <Collections />
      </div> 
    </div>
  )
}
