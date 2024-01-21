import CartWrapper from "@/components/cart/CartWrapper";
import { getUserCart } from "@/server/controllers/cartControllers";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const Cart = async () => {
  const { sessionClaims } = auth();
  let userId = sessionClaims ? sessionClaims.userId : null;

  const cart = await getUserCart(userId);

  return (
    <section className="container ">
      <h1 className="text-3xl font-bold ">Cart</h1>
      {cart.length == 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl font-bold ">No Product In Cart </h1>
          <Link
            href={"/products"}
            className="btn btn-primary  text-white mt-4 btn-lg"
          >
            Fill It
          </Link>
        </div>
      )}
      <CartWrapper cart={cart} />
    </section>
  );
};
export default Cart;
