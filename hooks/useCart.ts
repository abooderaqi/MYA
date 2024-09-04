import { create } from "zustand"
import { toast } from "react-hot-toast"
import { persist, createJSONStorage } from "zustand/middleware"
import { CartItem } from "@/types"

interface CartStore {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {
        const { item, quantity, color, size } = data
        const currentItem = get().cartItems
        const existingItem = currentItem.find(
          (cartItem) => cartItem.item.id === item.id
        )
        if (existingItem) {
          return toast.success("The item already exists", { icon: "🛒" })
        }

        set({ cartItems: [...currentItem, { item, quantity, color, size }] })
        toast.success("Item added to cart", { icon: "🛒" })
      },
      removeItem: (id: string) => {
        const newCartItem = get().cartItems.filter(
          (item) => item.item.id !== id
        )
        set({ cartItems: newCartItem })
        toast.success("Item removed from cart")
      },
      increaseQuantity: (id: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        set({ cartItems: newCartItems })
        toast.success("Quantity increased")
      },
      decreaseQuantity: (id: string) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === id && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        set({ cartItems: newCartItems })
        toast.success("Quantity decreased")
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
