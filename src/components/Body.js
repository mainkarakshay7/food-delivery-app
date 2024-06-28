import { useContext, useEffect, useState } from "react";
import "../../index.css";
import { SWIGGY_RESTAURANTS_API } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const filterResults = (searchText, restaurants) =>
  restaurants.filter((resto) =>
    resto.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [fileredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    const response = await fetch(SWIGGY_RESTAURANTS_API);
    const restoList = await response.json();

    const data =
      restoList?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    const restros = getNeatRestaurants(data);

    setAllRestaurants(restros);
    setFilteredRestaurants(restros);
  }

  function getNeatRestaurants(data) {
    const arr = new Array();

    data.forEach((item) => {
      arr.push(item?.card.card);
    });

    return arr;
  }

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Search...'
          className='bg-orange-50 p-2 m-5'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className='bg-orange-300 rounded-md p-2'
          onClick={() => {
            const data = filterResults(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/**Following Input box is fun content, just to knwo power of react */}
        <input
          type='text'
          className='bg-orange-50 p-2 m-5'
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className='flex flex-wrap'>
        {allRestaurants?.length === 0 ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => <Shimmer key={index} />)
        ) : fileredRestaurants?.length > 0 ? (
          fileredRestaurants?.map((resto) => {
            return (
              <Link to={"/restaurant/" + resto.info.id} key={resto.info.id}>
                <RestaurantCard {...resto.info} key={resto.info.id} />
              </Link>
            );
          })
        ) : (
          <h1>OOPS! Restaurant not found!</h1>
        )}
      </div>
    </>
  );
};

export default Body;
