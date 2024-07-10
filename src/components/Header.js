import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useContext(UserContext);

  const loggedUser = useSelector((store) => store.user.user.username);
  const cartItems = useSelector((store) => store.cart.items); // this says subscribe me to the store.cart slice so that whenever it gets updated this varible also should update

  const handleLogout = () => {
    dispatch(removeUser());

    navigate("/login");
  };

  return (
    <div className='flex justify-between bg-orange-400 text-white'>
      <Link to='/'>
        <h1 className='p-4 text-3xl font-bold'>
          Foodles {isOnline ? "✅" : "🔴"}
        </h1>
      </Link>

      <div>
        <ul className='flex justify-between py-4 font-bold'>
          <li className='mx-3'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='mx-3'>
            <Link to='/about'>About </Link>
          </li>

          <li className='mx-3'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='mx-3'>
            <Link to='/instamart'>Instamart</Link>
          </li>
          {loggedUser && (
            <li className='mx-3'>
              <Link to='/cart'>Cart - {cartItems.length} items</Link>
            </li>
          )}
        </ul>
      </div>
      <div className='py-4 flex'>
        {loggedUser && (
          <p className='font-bold text-blue-950 mr-3'>Hi, {loggedUser}</p>
        )}
        <p className='font-bold cursor-pointer mx-3' onClick={handleLogout}>
          {loggedUser ? "Logout" : "Login"}
        </p>
      </div>
    </div>
  );
};

export default Header;
