import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import DishCard from "./DishCard";

const RestaurantMenu = () => {
  const { id } = useParams();

  // we have created custom hook to fetch restaurantData and menucard data
  const [restaurantData, menuCard] = useRestaurant(id);

  const restaurantInfo = restaurantData?.data?.cards[2]?.card?.card?.info;

  return restaurantData ? (
    <div className='flex'>
      <div className='m-5'>
        <h1 className='text-4xl font-bold'>{`${restaurantInfo.name}, ${restaurantInfo.areaName}, ${restaurantInfo.city}`}</h1>
        <img
          alt='img'
          src={`${IMG_CDN_URL}${
            restaurantInfo.logo ?? restaurantInfo.cloudinaryImageId
          }`}
          className='w-72 my-5'
        />
        <h2 className='text-2xl'>
          {"Rating: " +
            restaurantInfo.avgRatingString +
            " Stars" +
            " (" +
            restaurantInfo.totalRatingsString +
            ")"}
        </h2>
        <h3 className='text-xl'>{restaurantInfo.costForTwoMessage}</h3>
      </div>
      <div className='m-8'>
        <h1 className='text-xl font-bold'>Menu:</h1>
        <br />
        <ul>
          {menuCard.map((item) => (
            <DishCard {...item.card.info} key={item.card.info.id} />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
