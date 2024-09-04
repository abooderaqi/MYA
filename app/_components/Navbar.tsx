"use client"
import { UserButton, useUser } from "@clerk/nextjs"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"
import { Menu, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/useCart"

const Navbar = () => {
  const { user } = useUser()
  const { cartItems } = useCart()

  return (
    <div className="sticky top-0 z-10 py-1 px-10 flex justify-between items-center bg-white">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>
      <div className="flex justify-center items-center text-xl gap-10 font-semibold ">
        <Link href={"/"} className="hover:opacity-75 cursor-pointer">
          Home
        </Link>
        <Link href={"/products"} className="hover:opacity-75 cursor-pointer">
          Products
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href={"/cart"}
          className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />
          <p className="font-bold">Cart ({cartItems.length})</p>
        </Link>
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/wishlist" className="hover:text-red-500 font-bold">
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="hover:text-red-500 font-bold">
                  Orders
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
    </div>
  )
}

export default Navbar
