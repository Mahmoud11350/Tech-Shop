"use server";

import { connectDB } from "../db/connect";
import Cart from "../model/cart";

export const addToCart = async (newCartItem) => {
  try {
    connectDB();
    const productInCart = await Cart.findOne({
      productId: newCartItem.productId,
    });
    if (productInCart) {
      throw new Error("Product Already in Cart");
    }

    const cart = await Cart.create(newCartItem);
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const cart = await Cart.find().populate({
      path: "productId",
    });

    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};

export const getUserCart = async (userId) => {
  try {
    connectDB();
    const cart = await Cart.find({
      userId,
    }).populate({
      path: "productId",
    });
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductFromCart = async (_id) => {
  try {
    await connectDB();
    const cart = await Cart.findOneAndDelete({
      _id,
    });
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};
