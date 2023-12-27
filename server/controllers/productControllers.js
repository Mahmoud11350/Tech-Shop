import Product from "../model/Product";

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};
