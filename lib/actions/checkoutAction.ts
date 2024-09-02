import Stripe from "stripe"

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  typescript: true,
})

export const checkOut = async (cartItems: any, user: any) => {
  try {
    if (!cartItems || !user) {
      throw new Error("Not enough data to checkout")
    }
    if (cartItems.length === 0 || !Array.isArray(cartItems)) {
      throw new Error("Cart is empty")
    }
    let totalAmount = 0

    const lineItems = cartItems?.map((product: any) => {
      const amount = Math.round(product.item.price * 100)
      totalAmount += amount * product.quantity
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.item.title,
            images: [product.item.images],
          },
          unit_amount: amount,
        },
        quantity: product.quantity,
      }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["JO", "SA", "AE"] },
      shipping_options: [
        {
          shipping_rate: "shr_1Pt4rlP6cgEkjsFRWzTBJS1T",
        },
        { shipping_rate: "shr_1Pt4qnP6cgEkjsFRQ18fvfTy" },
      ],
      line_items: lineItems,
      client_reference_id: user.userId,
      success_url: `http://localhost:3000/payment-success?session_id={CHECKOUT_SESSION_ID}
      `,
      cancel_url: `http://localhost:3000/cart`,
      metadata: { userId: user.userId },
    })
    console.log(session)
    return session
  } catch (err) {
    console.log(err)
    throw err
  }
}
