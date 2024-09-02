import { getProducts } from "@/lib/actions/productActions"
import { useQuery } from "@tanstack/react-query"

export const useGetProducts = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  })
  return { products }
}
