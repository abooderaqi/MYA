import Image from "next/image"
import Collections from "@/app/_components/Collections"
import ProductList from "@/app/_components/ProdoctList"
import NewArrivalProduct from "../_components/NewArrivalProduct"

export default function Home() {
  return (
    <div>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen object-cover"
      />
      <Collections />
      <NewArrivalProduct />
    </div>
  )
}
