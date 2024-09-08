"use client"

import { useCart } from "@/hooks/useCart"
import { ProductType } from "@/types"
import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }: { product: ProductType }) => {
  const [isHover, setIsHover] = useState(false)
  const { addItem } = useCart()
  return (
    <li className="w-full h-full ">
      <div
        onPointerEnter={() => {
          setIsHover(true)
        }}
        onPointerLeave={() => {
          setIsHover(false)
        }}
        className="flex h-fit lg:flex-wrap gap-8 hover:cursor-pointer hover:bg-[#C8C8C8] "
      >
        <Link href={`/products/${product.id}`} className="w-full h-full mx-auto">
          <div className="relative w-full h-full  aspect-square overflow-clip">
            <Image
              src={product?.media[0]}
              alt={product.title}
              fill
              // className={`w-full h-full object-cover ${
              //   isHover ? "scale-125" : ""
              // } transition-all`}
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              sizes="25vw"
            />
            {product.media && (
              <Image
                src={product.media[1]}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="mt-5 flex items-center justify-between px-4">
            <div className="">
              <h6 className=" font-medium text-lg leading-8 text-black mb-2">
                {product.title}
                <button className="flex justify-end items-center gap-1 rounded-xl bg-amber-400 py-1.5 px-2.5 w-max">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12657_16865)">
                      <path
                        d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                        fill="white"
                      />
                      <g clipPath="url(#clip1_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_12657_16865">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_12657_16865">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </h6>

              <h6 className="font-semibold text-lg leading-8 text-indigo-600">
                ${product.price}
              </h6>
            </div>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault()
                addItem({
                  item: product,
                  quantity: 1,
                  color: "",
                  size: "",
                })
              }}
              className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default ProductCard
