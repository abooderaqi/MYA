import { getOrderById } from "./../lib/actions/orderAction"
import { useQuery } from "@tanstack/react-query"
export const useOrder = () => {
  const { data: orders } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrderById(),
  })
  return { orders }
}
