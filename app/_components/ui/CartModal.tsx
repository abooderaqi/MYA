import { useCart } from "@/hooks/useCart"
import { CartItem } from "@/types"
import { Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const CartModal = () => {
  const { cartItems, removeItem } = useCart()
  let items = cartItems.map((item) => item.item)
  console.log(items.map((item) => item))
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="flex flex-col gap-8 overflow-y-scroll scrollbar-hide">
          <h2 className="text-xl">Shopping Cart</h2>
          {cartItems.map((cartItem) => (
            <>
              <div key={cartItem.item?.id} className="flex gap-4 ">
                <Image
                  src={cartItem.item?.media[0]}
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                  alt={cartItem.item?.title}
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{cartItem.item?.title}</h3>
                      <div className="p-1 bg-gray-100 text-sm">
                        ${cartItem.item?.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    {" "}
                    <span className="text-gray-500">
                      Qty. {cartItem.quantity}
                    </span>
                    <Trash
                      className="hover:text-red-500 cursor-pointer"
                      onClick={() => removeItem(cartItem.item.id)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${cartItem.quantity * cartItem.item.price}</span>
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-between text-sm">
            <Link
              href={"/cart"}
              className="rounded-xl py-3 px-4 ring-1 ring-gray-300 w-full text-center font-semibold hover:bg-mya hover:text-white"
            >
              View Cart
            </Link>
            {/* <Link href={}>Check</Link> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal
