"use client"

import Image from "next/image"
import Link from "next/link"
import { useGetProducts } from "../../../hooks/useGetProducts"
const ProductList = () => {
  const { products } = useGetProducts()
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products?.map((product) => (
        <Link
          href={`/products/${product.id}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product.id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media[0]}
              fill
              sizes="25vw"
              alt={product.title}
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media && (
              <Image
                src={product.media[1]}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
                alt={product.title}
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.title}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
