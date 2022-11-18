import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";

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
  reducers: {
    sendEmail: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { sendEmail } = userSlice.actions;

export function Email(email: string) {
  return function (dispatch: any) {
    dispatch({
      payload: email,
    });
  };
}

export default userSlice.reducer;
