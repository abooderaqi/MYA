import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

import { getCollections } from "@/lib/actions/collectionsActions"
import Skeleton from "./ui/Skeleton"

const Collections = async () => {
  const collections = await getCollections()

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        {!collections || collections.length === 0 ? (
          <p className="font-bold">No collection found</p>
        ) : (
          <div className="flex justify-around">
            {collections?.map((collection) => (
              <Link
                href={`/collections/${collection.id}`}
                key={collection.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
              >
                <div className="relative bg-slate-100 w-full h-96">
                  <Image
                    src={collection?.image}
                    alt={collection.title}
                    fill
                    sizes="20vw"
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">
                  {collection?.title}
                </h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default Collections
