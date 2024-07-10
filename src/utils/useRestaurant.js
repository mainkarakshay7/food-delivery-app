import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCard, setMenuCard] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    const response = await fetch(RESTAURANT_INFO_URL + id);
    const data = await response.json();
    setRestaurant(data);

    const menuList =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ?? [];

    const menu = new Array();

    menu?.push(...menuList);

    setMenuCard(menu ?? []);
  }

  return [restaurant, menuCard];
};

export default useRestaurant;
