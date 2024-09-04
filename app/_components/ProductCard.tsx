"use client"

import { useCart } from "@/hooks/useCart"
import { ProductType } from "@/types"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"

import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }: { product: ProductType }) => {
  const { addItem } = useCart()
  return (
    // <Link
    //   href={`/products/${product.id}`}
    //   className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    // >
    //   <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
    //     <Image
    //       className="object-cover"
    //       src={product.media[0]}
    //       alt={product.title}
    //       layout="fill"
    //     />
    //     {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
    //       39% OFF
    //     </span> */}
    //   </div>
    //   <div className="mt-4 px-5 pb-5">
    //     <div>
    //       <h5 className="text-xl tracking-tight text-slate-900 text-center">
    //         {product.title}
    //       </h5>
    //     </div>
    //     <div className="mt-2 mb-5 flex items-center justify-between">
    //       <p>
    //         <span className="text-3xl font-bold text-slate-900">
    //           ${product.price}
    //         </span>
    //         {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
    //       </p>
    //       <div className="flex items-center">
    //         <svg
    //           aria-hidden="true"
    //           className="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
    //           5.0
    //         </span>
    //       </div>
    //     </div>
    //     <button
    //       onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //         e.preventDefault()
    //         addItem({
    //           item: product,
    //           quantity: 1,
    //           color: "",
    //           size: "",
    //         })
    //       }}
    //       className="flex items-center justify-center rounded-xl px-5 py-2.5 text-center text-sm font-medium  hover:bg-black hover:text-white focus:outline-none  w-full"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="mr-2 h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         stroke-width="2"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //         />
    //       </svg>
    //       Add to cart
    //     </button>
    //   </div>
    // </Link>

    <section className="py-24">
      <div className=" flex lg:flex-wrap gap-8">
        <Link href={`/products/${product.id}`} className="w-full mx-auto">
          <div className="relative w-full max-w-sm aspect-square">
            <Image
              src={product.media[0]}
              alt={product.title}
              layout="fill"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="">
              <h6 className="font-medium text-xl leading-8 text-black mb-2">
                {product.title}
              </h6>
              <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                ${product.price}
              </h6>
            </div>
            <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
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
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ProductCard
