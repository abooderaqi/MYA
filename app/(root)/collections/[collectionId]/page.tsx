import ProductCard from "@/app/_components/ProductCard"
import { Spotlight } from "@/app/_components/ui/Spotlight"
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
      <section className="w-full">
        <div
          className={`relative w-full min-h-[520px] flex flex-col justify-center items-center`}
        >
          <Image
            src={collection?.image as string}
            alt={collection?.title as string}
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
          <div className="z-10 flex flex-col justify-center items-center gap-4">
            <div>
              <h1 className="text-white text-center xl:text-9xl lg:text-7xl md:text-7xl sm:text-7xl xs:text-7xl font-semibold  p-2 bg-opacity-40 ">
                {collection?.title}
              </h1>
            </div>
            {/* <div className="w-full h-full mx-auto text-3xl p-8 font-bold text-center text-white">
              {collection?.description}
            </div> */}
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6 mt-10">
        <h1 className="font-bold text-5xl text-center uppercase">
          {collection?.title} Products
        </h1>
        <div className="flex justify-center">
          {collection?.products.length === 0 ? (
            <h1 className="text-4xl ">No Product Added Yet</h1>
          ) : (
            collection?.products.map((product) => (
              <ProductCard product={product as ProductType} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CollectionDetails
