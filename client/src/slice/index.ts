import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";

// interface CounterState {
//   name: string;
//   city: string;
//   phone: number;
// }

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "crudUser",
  initialState,
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { allUsers } = userSlice.actions;

export default userSlice.reducer;
