import { createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store/store";

// interface CounterState {
//   name: string;
//   city: string;
//   phone: number;
// }

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;
export const reducerUsers = userSlice.reducer;

export const getAllUsers = () => {
  return async function (AppDispatch: any) {
    // let json = await axios.get("https://reqres.in/api/users?per_page=12");
    let json = await axios.get("/");
    console.log(json);
    return AppDispatch(setUserList(json.data));
  };
};
