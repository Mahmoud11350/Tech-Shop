"use server";

import Cart from "../model/cart";

export const addToCart = async (newCartItem) => {
  try {
    const cart = await Cart.create(newCartItem);
    console.log(cart);
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
