"use client"

import { useCart } from "@/hooks/useCart"
import { checkOut } from "@/lib/actions/checkoutAction"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { RiVisaLine } from "react-icons/ri"
import OrderForm from "@/app/_components/OrderForm"

const Checkout = () => {
  const router = useRouter()
  const { user } = useUser()
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useCart()

  // add discount to cart items

  console.log(user)
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  }

  const handleCheckout = async () => {
    try {
      if (!user) router.push("/sign-in")
      else {
        const checkout = await checkOut(cartItems, customer)
        window.location.href = `${checkout?.url}`
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }
  return (
    <div className="flex flex-col h-screen gap-4 justify-center items-center ">
      <div className="border border-black cursor-pointer py-4 px-7 rounded-xl hover:bg-black hover:text-white">
        <button
          onClick={handleCheckout}
          className="flex justify-center items-center gap-4 font-semibold"
        >
          <RiVisaLine size={30} />
          <span>Pay with visa</span>
        </button>
      </div>
      <div className="border border-black cursor-pointer py-4 px-9 rounded-xl hover:bg-black hover:text-white">
        <OrderForm />
      </div>
    </div>
  )
}

export default Checkout
