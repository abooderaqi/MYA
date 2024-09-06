"use client"

import { useCart } from "@/hooks/useCart"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import CartModal from "./CartModal"

const Cart = () => {
  const { cartItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className=" relative cursor-pointer ">
      <ShoppingCart
        onClick={() => setIsCartOpen((open: boolean) => !open)}
        size={22}
      />
      <div className="absolute text-white text-sm rounded-full flex items-center justify-center -top-4 -right-4 w-6 h-6 bg-mya  font-bold">
        {cartItems.length}
      </div>
      {isCartOpen && <CartModal />}
    </div>
  )
}

export default Cart
