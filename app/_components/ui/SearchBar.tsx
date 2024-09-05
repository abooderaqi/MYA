"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    if (name) {
      router.push(`/products?name=${name}`)
    }
  }
  return (
    <form
      className="flex flex-1 justify-between gap-4 bg-gray-300 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        name="name"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <Search size={16} />
      </button>
    </form>
  )
}

export default SearchBar
