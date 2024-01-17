import { getCart } from "@/server/controllers/cartControllers";

const cart = await getCart();
console.log(cart);
const Cart = () => {
  return <div>Cart</div>;
};
export default Cart;
