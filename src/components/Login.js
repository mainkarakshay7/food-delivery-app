import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });

    dispatch(addUser({ username, password }));

    navigate("/home");
  };

  return (
    <div className='flex flex-col justify-center items-center text-center my-3'>
      <h1 className='text-3xl font-bold my-5'>Login Page</h1>
      <h3>Please enter your credentials</h3>
      <div className='flex flex-col justify-cente align-middle items-center text-center my-8 min-w-96'>
        <form className='w-full' onSubmit={handleSubmit}>
          <label htmlFor='username' className='flex text-sm text-slate-400'>
            Username
          </label>
          <input
            type='text'
            id='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mb-5 bg-orange-50 p-4 w-full rounded-md border-2 border-amber-500'
          />

          <label htmlFor='username' className='flex text-sm text-slate-400'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mb-5 bg-orange-50 p-4 w-full rounded-md border-2 border-amber-500'
          />
          <button
            type='submit'
            className='bg-orange-400 p-4 w-full rounded-md text-xl font-bold text-white'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
