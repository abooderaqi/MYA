"use client"
// import { getCollections } from "@/lib/actions/collectionsActions"
import ProductCard from "./ProductCard"
import { CollectionType, ProductType } from "@/types"
import { useGetCollection } from "../../hooks/useGetCollection"
const NewArrivalProduct = () => {
  const { collections } = useGetCollection()

  let newArrivalCollection = collections?.filter(
    (collection: CollectionType) => collection.title === "New Arrival"
  )
  let newArrivalProduct = newArrivalCollection?.map(
    (product) => product.products
  )

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <div className="flex w-full h-full justify-center items-center gap-8 flex-wrap">
        {newArrivalProduct?.at(0)?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivalProduct
