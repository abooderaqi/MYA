"use client"

import { useCart } from "@/hooks/useCart"
import { UserButton, useUser } from "@clerk/nextjs"
import { ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CartModal from "./CartModal"

const NavbarIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()
  const { user } = useUser()

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <div className=" relative cursor-pointer ">
        <ShoppingCart
          onClick={() => setIsCartOpen((open) => !open)}
          size={22}
        />
        <div className="absolute text-white text-sm rounded-full flex items-center justify-center -top-4 -right-4 w-6 h-6 bg-mya  font-bold">
          {cartItems.length}
        </div>
        {isCartOpen && <CartModal setIsOpen={setIsCartOpen} />}
      </div>
      {user && (
        <>
          <Link href="/orders" className="hover:text-gray-700 font-bold">
            Orders
          </Link>
          {/* <Link href="/wishlist" className="hover:text-gray-700 font-bold">
            <Heart size={22} />
          </Link> */}
        </>
      )}
      {user ? (
        <UserButton />
      ) : (
        <Link
          href="/sign-in"
          className="flex items-center font-bold gap-2 hover:text-gray-700"
        >
          <User size={22} />
          LogIn
        </Link>
      )}
    </div>
  )
}

export default NavbarIcons
