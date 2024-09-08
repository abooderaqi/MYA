import { type ClassValue, clsx } from "clsx"
import { useCallback } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mapSearchQuery = (param: string): Array<string> => {
  if (param === undefined) return []
  const paramsArray = param.split(",")
  if (paramsArray.length <= 1) return [param]
  else return paramsArray
}


export const mapPriceRange = (param: string): [number,number] | [] => {
  if (param === undefined) return []
  const paramsArray = param.split("-")
  const from = Number.parseFloat(paramsArray[0])
  const to = Number.parseFloat(paramsArray[1])
  return [from,to]
}

const filterMap: Record<string, [string, string]> = {
  pricedesc: ["price", "desc"],
  priceasc: ["price", "asc"],
  freshness: ["createdAt", "desc"],
} as const


export const mapSortQuery = (param: string): [string, string] => {
  if (param === undefined) return ["createdAt", "asc"]
  return filterMap[param]
}

const colorsCodes: Record<string, string> = {
  beige: "#F5F5DC",
  red: "#FF0000",
  black: "#000000",
  white: "#FFFFFF",
  green: "#50C878 ",
} as const

export const mapFilterColors = (colors: Map<string, number>) => {
  const colorsasArray = Array.from(colors).map(([key, value]) => ({
    key,
    value,
  }))
  return colorsasArray.map((color, index) => {
    const { key, value } = color
    return {
      color: colorsCodes[`${key}`],
      id: `${key}${index}`,
      label: `${key.at(0)?.toLocaleUpperCase()}${key.substring(1)}`,
      value: key.toLocaleLowerCase(),
      counter: value,
    }
  })
}

const sizeLabels: Record<string, string> = {
  sm: "S",
  md: "M",
  lg: "L",
  xl: "XL",
  xxl: "2XL ",
} as const
export const mapFilterSizes = (sizes: string[]) => {
  // const colorsasArray = Array.from(sizes).map(([key, value]) => ({
  //   key,
  //   value,
  // }))
  return sizes.map((size, index) => {
    return {
      id: `${size}${index}`,
      label: sizeLabels[size],
      value: size.toLocaleLowerCase(),
    }
  })
}

export const MakeArrayUnique = <T>(array: Array<T>): Array<T> => {
  const uniqueArray = new Set(array)
  return Array.from(uniqueArray.values())
}


