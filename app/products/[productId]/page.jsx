import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import RelatedProducts from "@/components/singleProduct/RelatedProducts";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import { getSingleProduct } from "@/server/controllers/productControllers";
import { auth } from "@clerk/nextjs";

const Product = async ({ params }) => {
  const { sessionClaims } = auth();
  const { userId } = sessionClaims;
  const singleProduct = await getSingleProduct(params.productId);
  return (
    <>
      <section className="container">
        <SingleProduct product={singleProduct.product} userId={userId} />
        <RelatedProducts relatedProducts={singleProduct.relatedProducts} />
        <Features />
      </section>
      <Footer />
    </>
  );
};
export default Product;
