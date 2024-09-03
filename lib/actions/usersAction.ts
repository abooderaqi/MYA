"use server"

import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"

export const getUsers = async () => {
  try {
    const User = await auth()
    if (!User.userId) throw "Unauthorized user"

    let user = await db.user.findUnique({
      where: { clerkId: User.userId },
      include: { orders: true },
    })
    if (!user) {
      user = await db.user.create({
        data: {
          clerkId: User.userId,
          wishlist: [],
          createdAt: new Date(Date.now()),
          updatedAt: new Date(),
        },
        include: { orders: true },
      })
    }
    return user
  } catch (err) {
    console.error("Failed to get user ID:", err)
    throw err
  }
}
