import Image from "next/image";
import Link from "next/link";

const CollectionItem = ({ name, image, price, description, _id }) => {
  return (
    <div className="p-4  rounded-lg">
      <Link
        href={`/products/${_id}`}
        className="carousel-item relative w-64 h-64  p-4 bg-accent rounded-lg "
      >
        <Image
          src={image}
          alt={name}
          width={256}
          height={256}
          //   className="w-full"
        />
      </Link>
      <div className="mt-5">
        <h1 className="text-lg pb-2  overflow-hidden text-ellipsis	">{name}</h1>
        <span>{price} $</span>
      </div>
    </div>
  );
};
export default CollectionItem;
