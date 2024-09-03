import React from "react"
import { CiCreditCard1 } from "react-icons/ci"
import { FaShippingFast } from "react-icons/fa"
import { SlTag } from "react-icons/sl"
import { BsBoxFill } from "react-icons/bs"
const FeaturesContainer = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 font-bold">
      <div className="flex gap-4 justify-start items-center text-sm ">
        <CiCreditCard1 />
        <span>Secure Payment</span>
      </div>
      <div className="flex gap-4 justify-start  items-center text-sm ">
        <FaShippingFast />
        <span>Fast Shipping</span>
      </div>
      <div className="flex gap-4 justify-start items-center text-sm ">
        <SlTag />
        <span>Size & Fit</span>
      </div>
      <div className="flex gap-4 justify-start items-center text-sm ">
        <BsBoxFill />
        <span>WorldWide Shipping</span>
      </div>
    </div>
  )
}

export default FeaturesContainer
