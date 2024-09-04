"use client"

import { useOrder } from "@/hooks/useOrder"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
const OrdersDetails = () => {
  const router = useRouter()
  const { orders } = useOrder()
  console.log(orders)
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        {orders?.length === 1 ? (
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Your Order
          </h2>
        ) : (
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Your Orders
          </h2>
        )}
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Thanks for chosing your order from our website
        </p>
        <div className="main-box rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          {orders?.map((order) => (
            <div
              key={order.id}
              className="flex flex-col mb-10 border-b border-black"
            >
              <div className="flex flex-col lg:flex-row lg:items-center  justify-between px-6 pb-6">
                <div className="data">
                  <p className="font-semibold text-base leading-7 text-black">
                    Order Id:{" "}
                    <span className="text-indigo-600 font-medium">
                      #{order.id}
                    </span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-4">
                    Order Payment :{" "}
                    <span className="text-gray-400 font-medium">
                      {" "}
                      {order.createdAt.toISOString().substring(0, 10)}
                    </span>
                  </p>
                </div>
              </div>
              {order.products.map((product, index) => (
                <div className="w-full px-3 min-[400px]:px-6" key={product.id + `${index}`}>
                  <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                    <div className=" img-box max-lg:w-full">
                      <Image
                        src={product.media[0]}
                        width={140}
                        height={140}
                        alt="Premium Watch image"
                        className="aspect-square w-full lg:max-w-[140px] rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row items-center w-full ">
                      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        <div className="flex items-center">
                          <div className="">
                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                              {product.title}
                            </h2>

                            <div className="flex items-center ">
                              <p className="font-medium text-base flex leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Size:{" "}
                                <span className="text-gray-500 items-center">
                                  {product.sizes.map((size) => size)}
                                </span>
                              </p>
                              <p className="font-medium text-base leading-7 text-black ">
                                Qty:{" "}
                                <span className="text-gray-500">
                                  {order.quantity[index]}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">
                                price
                              </p>
                              <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                                ${product.price}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">
                                Status
                              </p>
                              <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                Ready for Delivery
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                Expected Delivery Time
                              </p>
                              <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                2 to 3 days from{" "}
                                {order.createdAt.toISOString().substring(0, 10)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                <h1 className="text-md font-bold py-4">
                  {" "}
                  Sub total: ${order.totalAmount}
                </h1>
              </div>
            </div>
          ))}

          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
              <button
                onClick={() => router.push("/")}
                className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600"
              >
                <ArrowLeft />
                back
              </button>
              {/* <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                Paid using Credit Card{" "}
                <span className="text-gray-500">ending with 8822</span>
              </p> */}
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Total Price:{" "}
              <span className="text-indigo-600">
                ${orders?.reduce((curr, order) => curr + order.totalAmount, 0)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrdersDetails
