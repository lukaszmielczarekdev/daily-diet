import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData, notify } from "./utils";
import { googleLogout } from "@react-oauth/google";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
  currentUser: null,
  users: [],
};

export const getUsers = createAsyncThunk("userItems/getUsers", async () => {
  try {
    const { data } = await api.fetchUsers();
    return data;
  } catch (error) {
    console.log(error);
    notify(error.response.data.message);
  }
});

export const signin = createAsyncThunk("auth/signin", async (formData) => {
  try {
    const { data } = await api.signIn(formData);
    return data;
  } catch (error) {
    notify(error.response.data.message);
  }
});

export const externalSignin = createAsyncThunk(
  "auth/externalSignin",
  async (response) => {
    try {
      const { data } = await api.externalSignIn(response);
      return data;
    } catch (error) {
      notify(error.response.data.message);
    }
  }
);

export const signup = createAsyncThunk("auth/signup", async (formData) => {
  try {
    const { data } = await api.signUp(formData);
    return data;
  } catch (error) {
    notify(error.response.data.message);
  }
});

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ id, profile }) => {
    try {
      const { data } = await api.updateUserProfile(id, profile);
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

const slice = createSlice({
  name: "authData",
  initialState: getStoreData("user.authData", INITIAL_STATE),
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("profile");
      state.currentUser = null;
      googleLogout();
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state) => {
      state.status = "failed";
    },
    [signin.pending]: (state) => {
      state.status = "loading";
    },
    [signin.fulfilled]: (state, action) => {
      if (action.payload?.token) {
        localStorage.setItem(
          "profile",
          JSON.stringify({ credential: action.payload.token })
        );
        state.currentUser = action.payload.user;
        notify(`Hello ${action.payload.user.name}`);
      }
      state.status = "success";
    },
    [signin.rejected]: (state) => {
      state.status = "failed";
    },

    [externalSignin.pending]: (state) => {
      state.status = "loading";
    },
    [externalSignin.fulfilled]: (state, action) => {
      if (action.payload?.token) {
        localStorage.setItem(
          "profile",
          JSON.stringify({ credential: action.payload.token })
        );
        state.currentUser = action.payload.user;
        notify(`Hello ${action.payload.user.name}`);
      }
      state.status = "success";
    },
    [externalSignin.rejected]: (state) => {
      state.status = "failed";
    },
    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [signup.fulfilled]: (state, action) => {
      if (action.payload?.token) {
        localStorage.setItem(
          "profile",
          JSON.stringify({ credential: action.payload.token })
        );
        state.currentUser = action.payload.user;
        notify(`Hello ${action.payload.user.name}`);
      }
      state.status = "success";
    },
    [signup.rejected]: (state) => {
      state.status = "failed";
    },
    [updateProfile.pending]: (state) => {
      state.status = "loading";
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.currentUser.profile = action.payload;
      state.status = "success";
      notify("Profile updated.");
    },
    [updateProfile.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { auth, logout } = slice.actions;
export default slice.reducer;
