import { getUsers } from "@/lib/actions/usersAction"
import { useQuery } from "@tanstack/react-query"

export const useGetUser = () => {
  const { data: users, status } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUsers(),
    staleTime: 0,
  })
  return { users, status }
}
