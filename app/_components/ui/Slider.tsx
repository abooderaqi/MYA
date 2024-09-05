"use client"

import { useGetCollection } from "@/hooks/useGetCollection"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Slider = () => {
  const { collections } = useGetCollection()
  const [current, setCurrent] = useState(0)

  return (
    <div className="h-[calc(100dvh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {collections?.map((collection) => (
          <div
            className={`bg-gradient-to-l from-yellow-50 to-pink-100 w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={collection.id}
          >
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h1 className="lg:text-4xl 2xl:text-5xl ">{collection?.title}</h1>
              <Link href={`/collections/${collection?.id}`}>
                <button className="rounded-xl bg-black text-white py-3 px-4 ">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={collection?.image}
                alt={collection?.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {collections?.map((collection, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={collection.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
