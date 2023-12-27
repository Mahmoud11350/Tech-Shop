import Image from "next/image";

const CategoryItem = ({ name, image }) => {
  return (
    <div className="bg-accent rounded-lg lg:max-w-80 relative">
      <Image src={image} alt={name} />
      <h3
        className={
          "absolute bottom-8 left-1/2 -translate-x-1/2 capitalize text-md bg-white p-4 w-5/6 rounded"
        }
      >
        {name}
      </h3>
    </div>
  );
};
export default CategoryItem;
