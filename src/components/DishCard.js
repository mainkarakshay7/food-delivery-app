import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const DishCard = ({ name, description, price, imageId }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ name, description, price, imageId }));
  };

  return (
    <div className='flex m-3'>
      <div className='w-40 h-36'>
        <img src={`${IMG_CDN_URL}${imageId}`} className='size-full' />
      </div>
      <div className='mx-5'>
        <h2>{name}</h2>
        <h2>{description}</h2>
        <h2>Rs. {price / 100}</h2>
        <button
          className='p-2 bg-violet-500 rounded-md mt-2'
          onClick={() => handleAddItem()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DishCard;
