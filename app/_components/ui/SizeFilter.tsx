"use client"

import {
  SfChip,
  SfAccordionItem,
  SfIconChevronLeft,
} from "@storefront-ui/react"
import classNames from "classnames"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

type SizeProps = {
  id: string
  label: string
  value: string
}

export default function SizeFilter({ size }: { size: SizeProps[] }) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [opened, setOpened] = useState(true)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  console.log(selectedSizes)
  const handleSizeSelection = (val: string) => {
    if (selectedSizes.indexOf(val) > -1) {
      setSelectedSizes([...selectedSizes.filter((value) => value !== val)])
    } else {
      setSelectedSizes([...selectedSizes, val])
    }
  }

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
    router.push(
      pathname + "?" + createQueryString("size", selectedSizes.join(","))
    )
  }, [selectedSizes])
  return (
    <SfAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Size</p>
          <SfIconChevronLeft
            className={classNames(
              "text-neutral-500",
              `${opened ? "rotate-90" : "-rotate-90"}`
            )}
          />
        </div>
      }
    >
      <ul className="grid grid-cols-5 gap-2">
        {size.map(({ id, label, value }) => (
          <li key={id}>
            <SfChip
              size="sm"
              className="w-full"
              inputProps={{
                value,
                onChange: () => handleSizeSelection(value),
              }}
            >
              {label}
            </SfChip>
          </li>
        ))}
      </ul>
    </SfAccordionItem>
  )
}
