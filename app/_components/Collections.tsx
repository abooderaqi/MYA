import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

import Spinner from "./ui/Spinner"
import { getCollections } from "@/lib/actions/collectionsActions"

const Collections = async () => {
  const collections = await getCollections()

  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex flex-col items-center py-8 px-5 gap-10">
        <p className="text-font-bold text-3xl ">Collections</p>
        {!collections || collections.length === 0 ? (
          <p className="font-bold">No collection found</p>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            {collections?.map((collection) => (
              // <Link href={`/collections/${collection.id}`} key={collection.id}>
              //   <Image
              //     src={collection?.image}
              //     alt={collection.title}
              //     width={350}
              //     height={200}
              //     className="rounded-xl cursor-pointer"
              //   />
              // </Link>
              <Link href={`/collections/${collection.id}`} key={collection.id}>
                <div className="relative h-[200px] w-[350px] rounded-xl overflow-hidden hover:scale-105 ">
                  <Image
                    src={collection?.image}
                    alt={collection.title}
                    layout="fill"
                    className="object-cover "
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 ease-in-out">
                    <p className="text-white text-3xl font-bold p-4 text-center">
                      {collection.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default Collections
