import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import * as api from "../api";

const INITIAL_STATE = {
  weight: null,
  height: null,
  age: null,
  activity: null,
  bmr: null,
  demandPercentage: { protein: null, carbs: null, fat: null },
  demandAmount: { protein: null, carbs: null, fat: null },
  status: null,
};

export const updateProfile = createAsyncThunk(
  "userProfile/updateProfile",
  async ({ id, profile }) => {
    try {
      const { data } = await api.updateUserProfile(id, profile);
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
      state = { ...action.payload.profile, status: "success" };
    },
    [updateProfile.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetProfile } = slice.actions;
export default slice.reducer;
