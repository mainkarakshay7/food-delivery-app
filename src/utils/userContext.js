import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummyemail@gmail.com",
  },
});

export default UserContext;
