import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  name: string;
  city: string;
  phone: number;
}

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "crudUser",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
