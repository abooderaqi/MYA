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
      <ul className="container mx-auto relative flex w-full h-full justify-center items-center gap-x-2 list-none">
        {newArrivalProduct?.at(0)?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </ul>
    </div>
  )
}

export default NewArrivalProduct
