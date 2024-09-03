import { createWishlist } from "@/lib/actions/wishlistActions"
import { useMutation } from "@tanstack/react-query"

export const useWishlist = () => {
  const { mutate: addToWishlist } = useMutation({
    mutationFn: (id: string) => createWishlist(id),
  })
  return { addToWishlist }
}
