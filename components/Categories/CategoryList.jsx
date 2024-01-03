import watchImg from "@/assets/images/categories/watches-category.png";
import tVImg from "@/assets/images/categories/tv-home-category.png";
import ipadsImg from "@/assets/images/categories/ipads-category.png";
import accessoriesImg from "@/assets/images/categories/accessories-category.png";
import laptopsImg from "@/assets/images/categories/laptops-category.png";
import phonesImg from "@/assets/images/categories/phones-category.png";
import Link from "next/link";
import CategoryItem from "./CategoryItem";
const CategoryList = () => {
  const categories = [
    {
      name: "watches",
      image: watchImg,
    },
    {
      name: "tv & home",
      image: tVImg,
    },
    {
      name: "ipads",
      image: ipadsImg,
    },
    {
      name: "accessories",
      image: accessoriesImg,
    },
    {
      name: "laptops",
      image: laptopsImg,
    },
    {
      name: "phones",
      image: phonesImg,
    },
  ];
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl capitalize">Shop by Category</h2>
        <Link href="/products" className="text-xl">
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 capitalize text-center gap-4">
        {categories.map((category) => {
          return (
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: category.name,
                },
              }}
              key={category.name}
            >
              <CategoryItem name={category.name} image={category.image} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default CategoryList;
