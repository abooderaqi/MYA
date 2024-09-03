import { CartItem } from './../../types.d';
"use server"

import { db } from './../../db';
import { z } from "zod"
import { auth } from "@clerk/nextjs/server"
import { connect } from 'http2';

// export const createOrder = async (sessionId: string) => {
//   try {
//     const { userId } = auth()
//     if (!userId) throw new Error("Please sign in")

//     const session = await stripe.checkout.sessions.retrieve(sessionId)
//     if (session.payment_status === "paid") {
//       const products = session.line_items?.data
//     }

//     return "Order created successfully!"
//   } catch (err) {
//     console.error(err)
//     throw err
//   }
// }

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);


const checkoutFormSchema = z.object({
  firstName: z.string().min(2).max(20).trim(),
  lastName: z.string().min(2).max(20).trim(),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid Number!'),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  postCode: z.string()
})

export const createOrder = async (values: z.infer<typeof checkoutFormSchema>, items: CartItem[]) => {
  try {
    const { userId } = auth()
    if (!!!userId)
      throw new Error('user not authenticated')

    const { address, city, country, firstName, lastName, phoneNumber, postCode } = values
    const shippingAddress = {
      address,
      city,
      country,
      firstName,
      lastName,
      phoneNumber,
      postCode
    }
    // const newOrder = await db.order.create({
    //   data: {
    //     shippingAddress: shippingAddress,
    //     products: {
    //       connect: items.map(item => ({id: item.item.id}))
    //     },
    //     totalAmount: items.length,
    //     userId: userId,
    //   }
    // })
  } catch (err) {
    console.error(err)
    throw err
  }
}

