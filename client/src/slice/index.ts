import { createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store/store";

type CounterState = {
  _id: number;
  name: string;
  city: string;
  phone: number;
};

type All = {
  list: CounterState[];
};
const initialState: All = {
  list: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
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
    let json = await axios.get("/");
    return AppDispatch(setUserList(json.data));
  };
};
export const deleteUsers = (id: any) => {
  return async function (AppDispatch: any) {
    let json = await axios.delete(`/${id}`);
    return AppDispatch(json.data);
  };
};

export const UpdateUsers = (id: any, data: any) => {
  return async function (AppDispatch: any) {
    let json = await axios.put(`/${id}`, data);
    return AppDispatch(json.data);
  };
};
export const postUsers = (data: any) => {
  return async function (AppDispatch: any) {
    let json = await axios.post("/", data);
    return AppDispatch(json.data);
  };
};
