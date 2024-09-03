import Gallery from "@/app/_components/Gallery"
import ProductInfo from "@/app/_components/ProductInfo"
import { getProductById } from "@/lib/actions/productActions"

const ProductDetails = async ({
  params,
}: {
  params: { productId: string }
}) => {
  const product = await getProductById(params.productId)

  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={product?.media} />
      <ProductInfo productInfo={product} />
    </div>
  )
}
export default ProductDetails
