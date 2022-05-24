import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import { googleLogout } from "@react-oauth/google";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
};

export const signin = createAsyncThunk("auth/signin", async (formData) => {
  try {
    const { data } = await api.signIn(formData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signup = createAsyncThunk("auth/signup", async (formData) => {
  try {
    const { data } = await api.signUp(formData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: "authData",
  initialState: getStoreData("user.authData", INITIAL_STATE),
  reducers: {
    auth: (state, action) => {
      state.user = action.payload?.clientId;
      localStorage.setItem(
        "profile",
        JSON.stringify({ username: action.payload.clientId, ...action.payload })
      );
    },
    logout: (state, action) => {
      localStorage.removeItem("profile");
      googleLogout();
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.status = "loading";
    },
    [signin.fulfilled]: (state, action) => {
      state.user = action.payload.user.name;
      localStorage.setItem(
        "profile",
        JSON.stringify({
          username: action.payload.user.name,
          clientId: action.payload.user._id,
          credential: action.payload.token,
        })
      );
      window.location.href = "/";
      state.status = "success";
    },
    [signin.rejected]: (state) => {
      state.status = "failed";
    },
    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.user.name;
      localStorage.setItem(
        "profile",
        JSON.stringify({
          username: action.payload.user.name,
          clientId: action.payload.user._id,
          credential: action.payload.token,
        })
      );
      window.location.href = "/";
      state.status = "success";
    },
    [signup.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { auth, logout } = slice.actions;
export default slice.reducer;
