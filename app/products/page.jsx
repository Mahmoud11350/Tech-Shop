import CategoryFilter from "@/components/Categories/CategoryFilter";
import CollectionItem from "@/components/collections/CollectionItem";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import { getFillteredProducts } from "@/server/controllers/productControllers";

const Products = async ({ searchParams }) => {
  const products = await getFillteredProducts({ searchParams });

  return (
    <>
      <section className="container">
        <h1 className="font-bold text-3xl mb-4">Products</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-4 ">
          <CategoryFilter searchParams={searchParams} />
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
        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
};
export default Products;
