import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import * as api from "../api";

const INITIAL_STATE = {
  weight: null,
  height: null,
  age: null,
  activity: null,
  bmr: null,
  demandPercentage: { protein: 20, carbs: 50, fat: 30 },
  demandAmount: { protein: null, carbs: null, fat: null },
};

export const updateProfile = createAsyncThunk(
  "userProfile/updateProfile",
  async (profile) => {
    try {
      const { data } = await api.updateUserProfile(profile);
      console.log("Thunk response after update");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "userProfile",
  initialState: getStoreData("user.userProfile", INITIAL_STATE),
  reducers: {
    resetProfile: (state, action) => {
      state = INITIAL_STATE;
    },
  },
  extraReducers: {
    [updateProfile.pending]: (state) => {
      state.status = "loading";
    },
    [updateProfile.fulfilled]: (state, action) => {
      console.log(action.payload);
      state = { ...action.payload?.profile };
      state.status = "success";
    },
    [updateProfile.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetProfile } = slice.actions;
export default slice.reducer;
