"use client";
import { deleteProductFromCart } from "@/server/controllers/cartControllers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CartItem = ({ productId, count, _id }) => {
  const [total, setTotal] = useState(count);
  const { name, category, price, image } = productId;
  const [totalPrice, setTotalPrice] = useState(price);
  const router = useRouter();

  const handleAddToCount = () => {
    setTotal((total) => (total == 8 ? total : total + 1));
    handleAddTotalPrice(total);
  };
  const handleMinusCount = () => {
    setTotal((total) => (total == 1 ? total : total - 1));
    handleMinusTotalPrice();
  };

  const handleAddTotalPrice = () => {
    setTotalPrice((totalPrice) => totalPrice + price);
  };
  const handleMinusTotalPrice = () => {
    setTotalPrice((totalPrice) => totalPrice - price);
  };
  const handleDeleteFromCart = async () => {
    const cart = await deleteProductFromCart(_id);
    router.refresh();
  };
  return (
    <div className="flex items-center justify-between flex-1 relative mt-8 flex-wrap">
      <div className="w-[100px] h-[100px] relative">
        <Image src={image} alt={name} fill />
      </div>
      <h2 className="w-[200px] text-center">{name}</h2>
      <div className="flex items-center justify-center gap-5 border rounded-lg p-3 min-w-[150px]">
        <button
          className="text-2xl"
          onClick={handleMinusCount}
          disabled={total == 1}
        >
          -
        </button>
        <span>{total} </span>
        <button
          className="text-2xl"
          onClick={handleAddToCount}
          disabled={total == 8}
        >
          +
        </button>
      </div>
      <div>
        <h3> {totalPrice} $</h3>
      </div>
      <button
        className="bg-red-500 text-white py-2 px-5 capitalize hover:bg-red-400 rounded "
        onClick={handleDeleteFromCart}
      >
        delete
      </button>
    </div>
  );
};

export default CartItem;
