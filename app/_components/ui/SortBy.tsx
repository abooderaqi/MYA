"use client"

import { SfSelect } from "@storefront-ui/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"

const options = [
  { label: "Relevance", value: "" },
  { label: "Price: Low to High", value: "priceasc" },
  { label: "Price: High to Low", value: "pricedesc" },
  { label: "New Arrivals", value: "freshness" },
]

export default function SortingFilter() {
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
  return (
    <div className="w-full md:max-w-[376px]">
     
      <div className="px-4">
        <SfSelect aria-label="Sort by">
          {options.map((option) => (
            <option value={option.value} key={option.value} onClick={(e) => {
              router.push(pathname + "?" + createQueryString("sort", e.currentTarget.value))
            }}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
    </div>
  );
}
