"use client"

import { useCart } from "@/hooks/useCart"
import { UserButton, useUser } from "@clerk/nextjs"
import { MenuIcon, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
  const { user } = useUser()
  const { cartItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100dvh-20px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/"} className="hover:opacity-75 cursor-pointer">
            Home
          </Link>
          <Link href={"/products"} className="hover:opacity-75 cursor-pointer">
            Products
          </Link>

          <Link
            href={"/cart"}
            className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-black hover:text-white"
          >
            <ShoppingCart />
            <p className="font-bold">Cart ({cartItems.length})</p>
          </Link>
          {user && (
            <>
              <Link href="/wishlist" className="hover:text-red-500 font-bold">
                Wishlist
              </Link>

              <Link href="/orders" className="hover:text-red-500 font-bold">
                Orders
              </Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <Link
              href="/sign-in"
              className="flex items-center font-bold gap-2 hover:bg-black hover:text-white rounded-xl px-2 py-1"
            >
              <User />
              LogIn
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Menu
