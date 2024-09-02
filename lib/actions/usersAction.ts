"use server"

import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"

export const getUsers = async () => {
  try {
    const User = await auth()
    if (!User.userId) throw "Unauthorized user"

    let user = await db.user.findUnique({ where: { clerkId: User.userId } })
    if (!user) {
      user = await db.user.create({
        data: {
          clerkId: User.userId,
          wishlist: [],
          orders: [],
          createdAt: new Date(Date.now()),
          updatedAt: new Date(),
        },
      })
    }
    return user
  } catch (err) {
    console.error("Failed to get user ID:", err)
    throw err
  }
}
