import ProductCard from "@/app/_components/ProductCard"
import Filter from "@/app/_components/ui/Filter"
import { getCollecionById } from "@/lib/actions/collectionsActions"
import { ProductType } from "@/types"
import Image from "next/image"

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string }
}) => {
  const collection = await getCollecionById(params.collectionId)

  return (
    <div className="flex justify-center items-center flex-col gap-6 overflow-hidden">
      <section className="w-full ">
        <div
          className={`relative w-full min-h-[calc(100dvh-152px)]  flex flex-col justify-center items-center`}
        >
          <Image
            src={collection?.image as string}
            alt={collection?.title as string}
            fill
            className="object-cover"
            sizes="100%"
            quality={100}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
          <div className="z-10 flex flex-col justify-center items-center gap-4">
            <div>
              <h1 className="text-white text-6xl text-center xl:text-9xl lg:text-7xl md:text-7xl font-semibold  p-2 bg-opacity-40 ">
                {collection?.title}
              </h1>
            </div>
            {/* <div className="w-full h-full mx-auto text-3xl p-8 font-bold text-center text-white">
              {collection?.description}
            </div> */}
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-8 mt-10">
        {/* <Filter /> */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center uppercase">
          {collection?.title} Products
        </h1>
        <div className="flex justify-center">
          {collection?.products.length === 0 ? (
            <h1 className="text-4xl ">No Product Added Yet</h1>
          ) : (
            <ul className="grid grid-cols-2 lg:grid lg:grid-cols-4 gap-4 w-full items-center justify-center mx-auto">
              {collection?.products.map((product) => (
                <li key={product.id} className="flex gap-8 p-8 flex-wrap">
                  <ProductCard product={product as ProductType} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default CollectionDetails
