"use client"
import { useGetUser } from "@/hooks/useGetUser"
import { createWishlist } from "@/lib/actions/wishlistActions"
import { UserType } from "@/types"
import { useUser } from "@clerk/nextjs"
import { Heart as HeartIcon } from "lucide-react"
import { useRouter } from "next/navigation"

import { useState } from "react"

const Heart = ({ id }: { id: string }) => {
  const router = useRouter()
  const { user } = useUser()
  let { users, status } = useGetUser()
  const [signedInUser, setSignInUser] = useState(users)
  const [isLiked, setIsLiked] = useState(users?.wishlist.includes(id))

  const handleLiked = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    try {
      if (!user) {
        router.push("/sign-in")
        return
      } else {
        const updatedUser = await createWishlist(id)
        setIsLiked(updatedUser?.wishlist.includes(id))
        setSignInUser(updatedUser as UserType)
        console.log("Updated user", updatedUser.wishlist, signedInUser)
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }
  return (
    <button onClick={handleLiked}>
      <HeartIcon fill={`${isLiked ? "red" : "white"}`} />
    </button>
  )
}

export default Heart
