import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "",
      password: "",
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
    },
    removeUser: (state) => {
      state.user = {
        username: "",
        password: "",
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
