import ProductInfo from "@/app/_components/ProductInfo"
import { getProductById } from "@/lib/actions/productActions"

const ProductDetails = async ({
  params,
}: {
  params: { productId: string }
}) => {
  const product = await getProductById(params.productId)

  return <ProductInfo productInfo={product as any} />
}
export default ProductDetails
