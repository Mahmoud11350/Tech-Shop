import CollectionItem from "@/components/collections/CollectionItem";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import { getAllProducts } from "@/server/controllers/productControllers";

const Products = async () => {
  const products = await getAllProducts();

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const { name, image, description, price, _id } = product;
              return (
                <CollectionItem
                  key={_id}
                  name={name}
                  image={image}
                  description={description}
                  price={price}
                  _id={_id}
                />
              );
            })}
          </div>
          <Features />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Products;
