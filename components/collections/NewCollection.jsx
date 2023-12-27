import { getAllProducts } from "@/server/controllers/productControllers";
import CollectionItem from "./CollectionItem";

const NewCollection = async () => {
  const products = await getAllProducts();
  return (
    <section>
      <h1 className="text-4xl text-center">New Collections</h1>
      <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box container flex ">
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
    </section>
  );
};
export default NewCollection;
