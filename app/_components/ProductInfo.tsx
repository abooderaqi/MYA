"use client"

import { useState } from "react"
import Heart from "./Heart"
import { MinusCircle, PlusCircle } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import FeaturesContainer from "./ui/Features"

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<String>(
    productInfo.colors[0]
  )
  const [selectedSize, setSelectedSize] = useState<String>(productInfo.sizes[0])
  const [quantity, setQuantity] = useState<number>(1)

  const { addItem } = useCart()
  return (
    <div className=" max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{productInfo?.title}</p>
        <Heart id={productInfo.id} />
      </div>
      <div className="flex gap-2 items-center ">
        <p className="text-gray-500 text-lg">Category:</p>
        <p className="font-bold">{productInfo.category}</p>
      </div>

      <p className="text-xl font-bold">$ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-xl text-gray-500">Description:</p>
        <p className="text-sm">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color: string, index: number) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-xl cursor-pointer ${
                  selectedColor === color ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size: string, index: number) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-xl cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p className="text-lg text-gray-500">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-500 cursor-pointer"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          />
          <p>{quantity}</p>
          <PlusCircle
            className="hover:text-green-500 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>
      <button
        className="outline hover:bg-black hover:text-white px-4 py-2 rounded-xl text-black font-bold"
        onClick={() =>
          addItem({
            item: productInfo,
            quantity,
            color: selectedColor as string,
            size: selectedSize as string,
          })
        }
      >
        Add to Cart
      </button>
      <hr />
      <FeaturesContainer />
    </div>
  )
}

export default ProductInfo
