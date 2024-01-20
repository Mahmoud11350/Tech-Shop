import CartWrapper from "@/components/cart/CartWrapper";
import {  getUserCart } from "@/server/controllers/cartControllers";
import { auth } from "@clerk/nextjs";

const Cart = async () => {
  const {sessionClaims} = auth()
  let userId = sessionClaims ? sessionClaims.userId : null

  const cart = await getUserCart(userId);
  
  return <section className="container ">
    <h1 className="text-3xl font-bold ">Cart</h1>
    <CartWrapper cart={cart}/>
  </section>;
};
export default Cart;
