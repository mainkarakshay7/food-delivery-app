import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";

const Header = () => {
  const isOnline = useOnline();
  const [loggedIn, setLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

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
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-3'>
            <Link to='/about'>About </Link>
          </li>

          <li className='mx-3'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='mx-3'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='mx-3'>
            <Link to='/instamart'>Instamart</Link>
          </li>
        </ul>
      </div>
      <div className='py-4 flex'>
        {loggedIn && <p className='font-bold text-blue-950'>Hi, {user.name}</p>}
        <p
          className='font-bold cursor-pointer mx-3'
          onClick={() => setLoggedIn((prev) => !prev)}
        >
          {loggedIn ? "Logout" : "Login"}
        </p>
      </div>
    </div>
  );
};

export default Header;
