import CartItem from "./CartItem";

const CartWrapper = ({ cart }) => {
  return (
    <div>
      {cart.map((product) => {
        return <CartItem {...product} key={product._id} />;
      })}
    </div>
  );
};

export default CartWrapper;
