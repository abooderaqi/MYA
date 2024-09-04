import { getCollections } from "../lib/actions/collectionsActions"

import { useQuery } from "@tanstack/react-query"

export const useGetCollection = () => {
  const { data: collections } = useQuery({
    queryKey: ["collection"],
    queryFn: () => getCollections(),
  })
  return { collections }
}
