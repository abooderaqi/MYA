"use server"

import { CartItem } from "./../../types.d"
import { db } from "../../db"
import { z } from "zod"
import { auth } from "@clerk/nextjs/server"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const checkoutFormSchema = z.object({
  firstName: z.string().min(2).max(20).trim(),
  lastName: z.string().min(2).max(20).trim(),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number!"),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  postCode: z.string(),
})

export const createOrder = async (
  values: z.infer<typeof checkoutFormSchema>,
  items: CartItem[]
) => {
  try {
    const { userId } = await auth()

    let existing = await db.user.findFirst({
      where: { clerkId: userId as string },
    })
    console.log(existing, userId)

    if (!userId) throw new Error("No user authenticated")

    if (!existing) {
      existing = await db.user.create({
        data: {
          clerkId: userId,
          wishlist: [],
          createdAt: new Date(Date.now()),
          updatedAt: new Date(),
        },
        include: { orders: true },
      })
    }

    const quantity = items.map((item) => item.quantity)
    console.log(quantity)
    const {
      city,
      country,
      firstName,
      lastName,
      address,
      phoneNumber,
      postCode,
    } = values

    const shippingAddress = {
      city,
      country,
      address,
      phoneNumber,
      postCode,
      firstName,
      lastName,
    }
    const newOrder = await db.order.create({
      data: {
        user: {
          connectOrCreate: {
            where: { clerkId: userId },
            create: {
              clerkId: userId,
              wishlist: [],
              createdAt: new Date(Date.now()),
              updatedAt: new Date(),
            },
          },
        },
        products: { connect: items.map((id) => ({ id: id.item.id })) },
        totalAmount: items.reduce(
          (acc, item) => acc + (item.item.price * item.quantity),
          0
        ),
        shippingAddress: shippingAddress,
        quantity: quantity,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      include: { user: true, products: true },
    })

    console.log(newOrder)
    return newOrder
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getOrderById = async () => {
  try {
    const { userId } = await auth()
    const order = await db.order.findMany({
      where: { userId: userId as string },
      include: { user: true, products: true },
    })
    return order
  } catch (err) {
    console.error(err)
    throw err
  }
}
