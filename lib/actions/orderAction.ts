"use server"

import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"
import { stripe } from "./checkoutAction"

export const createOrder = async (sessionId: string) => {
  try {
    const { userId } = auth()
    if (!userId) throw new Error("Please sign in")

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.payment_status === "paid") {
      const products = session.line_items?.data
    }

    return "Order created successfully!"
  } catch (err) {
    console.error(err)
    throw err
  }
}
