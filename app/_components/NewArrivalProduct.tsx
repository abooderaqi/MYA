"use client"
// import { getCollections } from "@/lib/actions/collectionsActions"
import ProductCard from "./ProductCard"
import { CollectionType, ProductType } from "@/types"
import { useGetCollection } from "../../hooks/useGetCollection"
const NewArrivalProduct = () => {
  const { collections } = useGetCollection()
  console.log(collections)
  const newArrivalProduct = collections?.filter(
    (collection: CollectionType) => collection.title === "NewArrival"
  )
  console.log(newArrivalProduct)
  return (
    <div>
      <h1>New Arrival Products {newArrivalProduct?.length}</h1>

      {newArrivalProduct?.map((product: ProductType, index) => (
        <>
          {console.log(product)}
          <ProductCard
            key={product.id + index}
            product={product as ProductType}
          />
        </>
      ))}
    </div>
  )
}

export default NewArrivalProduct
