import { useSelector } from "react-redux";
import DishCard from "./DishCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className='text-3xl font-bold'>My Cart</h1>
      {cartItems?.map((item, index) => {
        return <DishCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Cart;
