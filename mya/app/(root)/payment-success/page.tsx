"use client"

import { useCart } from "@/hooks/useCart"
import { clear } from "console"
import Link from "next/link"
import { useRef } from "react"

const SuccessfulPayment = () => {
  const { cartItems, clearCart } = useCart()
  const paymentSuccess = useRef({ isPaid: "success" })
  if (paymentSuccess.current.isPaid === "success" && cartItems.length > 0)
    clearCart()
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="font-bold text-red-500">Successfull Payment</p>
      <p>Thank you for your purchase</p>
      <Link
        href={"/"}
        className="p-4 border font-bold hover:bg-black hover:text-white"
      >
        Countinue to shopping
      </Link>
    </div>
  )
}

export default SuccessfulPayment
