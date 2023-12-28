import Product from "../model/Product";

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getSingleProduct = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
