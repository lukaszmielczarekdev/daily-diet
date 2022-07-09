import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData, notify } from "./utils";
import { googleLogout } from "@react-oauth/google";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
  currentUser: null,
  users: [],
};

export const getUsers = createAsyncThunk("auth/getUsers", async () => {
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

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async ({ id, userData }) => {
    try {
      const { data } = await api.updateUserData(id, userData);
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const changeNewsletterStatus = createAsyncThunk(
  "auth/changeNewsletterStatus",
  async ({ id, status }) => {
    try {
      const { data } = await api.changeNewsletterStatus(id, { status });
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const fakeUserNewsletterUnsubscribe = createAsyncThunk(
  "auth/fakeUserNewsletterUnsubscribe",
  async ({ token }) => {
    try {
      const { data } = await api.fakeUserNewsletterUnsubscribe(token);
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ token, formData }) => {
    try {
      const { data } = await api.changePassword(token, formData);
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async ({ id }) => {
    try {
      await api.deleteUser(id);
      return id;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData) => {
    try {
      const { data } = await api.resetPassword(formData);
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
      state.status = null;
      window.location.href = "/";
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
        window.location.href = "/";
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
        window.location.href = "/";
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
        window.location.href = "/";
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
      notify("Profile updated");
    },
    [updateProfile.rejected]: (state) => {
      state.status = "failed";
    },
    [updateUserData.pending]: (state) => {
      state.status = "loading";
    },
    [updateUserData.fulfilled]: (state, action) => {
      if (action.payload?.user.name && action.payload?.user.email) {
        state.currentUser.name = action.payload.user.name;
        state.currentUser.email = action.payload.user.email;
        notify("Account updated");
      }
      state.status = "success";
    },
    [updateUserData.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteUser.pending]: (state) => {
      state.status = "loading";
    },
    [deleteUser.fulfilled]: (state, action) => {
      if (!action.payload?.user) {
        localStorage.removeItem("profile");
        state.currentUser = null;
        state.status = null;
        googleLogout();
        window.location.href = "/";
        notify("Account deleted");
      }
      state.status = "success";
    },
    [deleteUser.rejected]: (state) => {
      state.status = "failed";
    },
    [resetPassword.pending]: (state) => {
      state.status = "loading";
    },
    [resetPassword.fulfilled]: (state, action) => {
      if (action.payload?.message) {
        notify(action.payload.message);
        window.location.href = "/";
      }
      state.status = "success";
    },
    [resetPassword.rejected]: (state) => {
      state.status = "failed";
    },
    [changePassword.pending]: (state) => {
      state.status = "loading";
    },
    [changePassword.fulfilled]: (state, action) => {
      if (action.payload?.message) {
        notify(action.payload.message);
        window.location.href = "/auth";
      }
      state.status = "success";
    },
    [changePassword.rejected]: (state) => {
      state.status = "failed";
    },
    [changeNewsletterStatus.pending]: (state) => {
      state.status = "loading";
    },
    [changeNewsletterStatus.fulfilled]: (state, action) => {
      if (action.payload?.message) {
        state.currentUser.newsletter = action.payload.newsletter;
        notify(action.payload.message);
      }
      state.status = "success";
    },
    [changeNewsletterStatus.rejected]: (state) => {
      state.status = "failed";
    },
    [fakeUserNewsletterUnsubscribe.pending]: (state) => {
      state.status = "loading";
    },
    [fakeUserNewsletterUnsubscribe.fulfilled]: (state, action) => {
      if (action.payload?.message) {
        notify(action.payload.message);
      }
      state.status = "success";
    },
    [fakeUserNewsletterUnsubscribe.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { auth, logout } = slice.actions;
export default slice.reducer;
