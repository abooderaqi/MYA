"use server"
import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"

export const createWishlist = async (productId: string) => {
  try {
    const { userId } = auth()
    if (!userId) throw new Error("Unauthorized")

    const user = await db.user.findUnique({ where: { clerkId: userId } })

    if (!user) {
      throw new Error("User not found")
    }

    if (!productId) throw new Error("Product Id required")

    const isLiked = user?.wishlist.includes(productId)
    if (isLiked) {
      user.wishlist = user.wishlist.filter((id) => id !== productId)
    } else {
      user.wishlist.push(productId)
    }
    await db.user.update({
      where: { clerkId: userId },
      data: { wishlist: user.wishlist },
    })

    return user
  } catch (err) {
    console.log(err)
    throw err
  }
}
