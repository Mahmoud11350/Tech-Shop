"use server";
import { SignOutButton } from "@clerk/nextjs";
import { connectDB } from "../db/connect";
import Product from "../model/Product";

export const getFillteredProducts = async ({ searchParams }) => {
  try {
    connectDB();
    if (searchParams.category == "all") {
      return await Product.find();
    }
    const products = await Product.find(searchParams);
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    connectDB();

    const products = await Product.find();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (productId) => {
  try {
    connectDB();

    const product = await Product.findOne({ _id: productId });
    const productCategory = await Product.find({
      category: product.category,
    });
    const relatedProducts = productCategory.filter(
      (product) => product._id != productId
    );
    return JSON.parse(JSON.stringify({ product, relatedProducts }));
  } catch (error) {}
};
