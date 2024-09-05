"use client"

import Image from "next/image"
import Link from "next/link"
import Menu from "./ui/Menu"
import SearchBar from "./ui/SearchBar"
import NavbarIcons from "./ui/NavbarIcons"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">MYA</div>
        </Link>
        <Menu />
      </div>
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w/12 flex items-center gap-12">
          <Link href={"/"} className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="object-cover"
            />
            <div className="text-2xl tracking-wide">MYA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"} className="cursor-pointer text-lg font-bold">
              Home
            </Link>
            <Link
              href={"/products"}
              className="cursor-pointer text-lg font-bold"
            >
              Products
            </Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
