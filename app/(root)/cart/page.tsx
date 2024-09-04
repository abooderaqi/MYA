"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { ArrowRight, MinusCircle, PlusCircle, Trash } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"

const Cart = () => {
  const router = useRouter()
  const { user } = useUser()
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useCart()

  console.log(user?.id)
  const subTotal = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  )

  const subtotalRounded = parseFloat(subTotal.toFixed(2))

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-2xl font-bold">Shopping Cart</p>
        <hr className="my-6" />
        {cartItems.length === 0 ? (
          <p className="font-bold">No items in cart</p>
        ) : (
          <div>
            {cartItems.map((cartItem) => (
              <div
                className="max-sm:flex-col max-sm:items-start max-sm:gap-3 w-full flex hover:bg-gray-300 px-6 py-5 justify-between  items-center"
                key={cartItem.item.id}
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    quality={100}
                    className="rounded-xl w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4 font-semibold">
                    <p className="text-xl">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-lg">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-lg">{cartItem.size}</p>
                    )}
                    <p>${cartItem.item.price}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() => decreaseQuantity(cartItem.item.id)}
                  />
                  <p>{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => increaseQuantity(cartItem.item.id)}
                  />
                </div>
                <Trash
                  className="hover:text-red-500 cursor-pointer"
                  onClick={() => removeItem(cartItem.item.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/3 flex flex-col gap-8 bg-gray-100 rounded-xl px-4 py-5 max-lg:w-full">
        <p className="font-bold pb-4">
          Summary{" "}
          <span>{`(${cartItems.length} ${
            cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${subtotalRounded}</span>
        </div>
        {user?.id ? (
          <button
            className="border border-black rounded-xl font-bold bg-white py-3 w-full hover:bg-black hover:text-white"
            onClick={() => router.push("/cart/checkout")}
            disabled={cartItems.length === 0}
          >
            Procced to Checkout
          </button>
        ) : (
          <Link
            href={"/sign-in"}
            className="text-center border border-black rounded-xl font-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          >
            Sign in to checkout
          </Link>
        )}

        <p className="flex gap-2 justify-center">
          or{" "}
          <Link
            href={"/"}
            className=" flex items-center justify-center gap-1 underline cursor-pointer font-bold text-center"
          >
            Countinue Shopping <ArrowRight className="h-3 w-3" />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Cart
