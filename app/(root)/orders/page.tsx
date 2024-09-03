"use client"

import { useOrder } from "@/hooks/useOrder"
const OrdersDetails = () => {
  const { orders } = useOrder()
  console.log(orders)
  return (
    <div className="flex flex-col justify-center items-center">
      {orders?.map((order) => (
        <div key={order.id}>
          <h2>{order.id}</h2>
          <div>{order.totalAmount}</div>
        </div>
      ))}
    </div>
  )
}

export default OrdersDetails
