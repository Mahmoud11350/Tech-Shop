import { getSingleProduct } from "@/server/controllers/productControllers";

const Product = async ({ params }) => {
  const product = await getSingleProduct(params.productId);
  return <div>{product.name}</div>;
};
export default Product;
