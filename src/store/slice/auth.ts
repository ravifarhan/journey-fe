import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {  IUser } from "../../types/app";

interface IAuthState {
  user: IUser | null | undefined;
  token: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    }
  },
});

export const { SET_LOGIN, SET_LOGOUT } = counterSlice.actions;
export default counterSlice.reducer;