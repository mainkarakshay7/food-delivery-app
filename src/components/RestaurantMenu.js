import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

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
          {menuCard.map((item, index) => (
            <div className='flex m-3' key={index}>
              <div className='w-40 h-36'>
                <img
                  src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                  className='size-full'
                />
              </div>
              <div>
                <h2>{item.card.info.name}</h2>
                <h2>{item.card.info.description}</h2>
                <h2>Rs. {item.card.info.price / 100}</h2>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
