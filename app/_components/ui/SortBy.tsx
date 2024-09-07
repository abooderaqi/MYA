"use client"
import { SfSelect } from "@storefront-ui/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"

const options = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price low to high" },
  { label: "Price: High to Low", value: "price high to low" },
  { label: "New Arrivals", value: "new arrivals" },
  { label: "Customer Rating", value: "customer rating" },
  { label: "Bestsellers", value: "bestsellers" },
]

type SortProp = {
  label: string
  value: string
}

export default function SortingFilter({ sort }: { sort: SortProp[] }) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (value === undefined || value === "") return ""
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("sort", sort.join(",")))
  }, [sort])
  return (
    <div className="w-full md:max-w-[376px]">
      <h6 className="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
        Sort by
      </h6>
      <div className="px-4">
        <SfSelect aria-label="Sort by">
          {sort.map((sort) => (
            <option value={sort.value} key={sort.value}>
              {sort.label}
            </option>
          ))}
        </SfSelect>
      </div>
    </div>
  )
}
