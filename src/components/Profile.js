import React, { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile page: Functional</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Profile;
