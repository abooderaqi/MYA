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
    <div className="w-full h-max items-center">
      <ul className="grid grid-cols-2 lg:grid lg:grid-cols-4 gap-4 w-full items-center justify-center mx-auto">
        {newArrivalProduct?.at(0)?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default NewArrivalProduct
