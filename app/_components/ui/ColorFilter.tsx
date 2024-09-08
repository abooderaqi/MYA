"use client"

import {
  SfAccordionItem,
  SfCounter,
  SfListItem,
  SfThumbnail,
  SfIconChevronLeft,
} from "@storefront-ui/react"
import { useCallback, useEffect, useState } from "react"
import classNames from "classnames"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type ColorsFilterType = {
  color: string
  id: string
  label: string
  value: string
  counter: number
}

type ColorFilterProps = {
  colors: Array<ColorsFilterType>
}

const ColorFilter = ({ colors }: ColorFilterProps) => {
  const [filterColors, setFilterColors] = useState(colors)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [colorList, setColorList] = useState<string[]>([])
  const [opened, setOpened] = useState(true)
  const handleColorSelection = (val: string) => {
    if (colorList.indexOf(val) > -1) {
      setColorList([...colorList.filter((value) => value !== val)])
    } else {
      setColorList([...colorList, val])
    }
  }

  const isColorSelected = (val: string) => colorList.includes(val)
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
      pathname + "?" + createQueryString("color", colorList.join(","))
    )
  }, [colorList])
  return (
    
      <SfAccordionItem
        open={opened}
        onToggle={() => setOpened(!opened)}
        className="w-full  md:max-w-[376px]"
        summary={
          <div className="flex justify-between p-2 mb-2">
            <p className="font-medium">Color</p>
            <SfIconChevronLeft
              className={classNames(
                "text-neutral-500",
                `${opened ? "rotate-90" : "-rotate-90"}`
              )}
            />
          </div>
        }
      >
        {filterColors.map(({ label, value, counter, color }) => (
          <SfListItem
            key={value}
            as="label"
            size="sm"
            className="px-1.5 bg-transparent hover:bg-transparent"
            selected={isColorSelected(value)}
            slotPrefix={
              <>
                <input
                  value={value}
                  checked={isColorSelected(value)}
                  className="appearance-none peer"
                  type="checkbox"
                  onChange={(event) => {
                    handleColorSelection(event.target.value)
                  }}
                />
                <span className="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-[&:not(:checked):hover]:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                  <SfThumbnail size="sm" style={{ backgroundColor: color }} />
                </span>
              </>
            }
          >
            <p>
              <span className="mr-2 text-sm">{label}</span>
              <SfCounter size="sm">{counter}</SfCounter>
            </p>
          </SfListItem>
        ))}
      </SfAccordionItem>
  )
}

export default ColorFilter
