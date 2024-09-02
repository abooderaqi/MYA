import { getCollecionById } from "@/lib/actions/collectionsActions"

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string }
}) => {
  const collection = await getCollecionById(params.collectionId)

  return (
    <div
      className="flex justify-center items-center flex-col
    gap-4"
    >
      <h1 className="text-5xl font-bold">{collection?.title}</h1>
      {collection?.products.map((product) => product.title)}
    </div>
  )
}

export default CollectionDetails
