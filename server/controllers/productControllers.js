import Product from "../model/Product";

export const getFillteredProducts = async ({ searchParams }) => {
  if (searchParams.category == "all") {
    return await Product.find();
  }
  const products = await Product.find(searchParams);
  return products;
};

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getSingleProduct = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  const productCategory = await Product.find({
    category: product.category,
  });
  const relatedProducts = productCategory.filter(
    (product) => product._id != productId
  );
  return { product, relatedProducts };
};
