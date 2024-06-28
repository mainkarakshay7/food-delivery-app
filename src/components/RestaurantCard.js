import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, sla }) => {
  const { user } = useContext(UserContext);

  return (
    <div className='flex-col w-80 overflow-hidden m-3 p-2 shadow-lg bg-orange-50 rounded-md'>
      <img
        alt='restaurant details'
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        className='h-60 w-80 rounded-md'
      />
      <div className='overflow-hidden	w-80'>
        <h2 className='mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold'>
          {name}
        </h2>
        <h4 className='mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-md font-bold'>
          {sla?.slaString}
        </h4>
        <h3 className='mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-md font-bold'>
          {cuisines.join(",")}
        </h3>
        <p>
          {user.name}-{user.email}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
