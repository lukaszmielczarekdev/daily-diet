import { createSlice } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";

const INITIAL_STATE = {
  weight: null,
  height: null,
  age: null,
  activity: null,
  bmr: null,
  demandPercentage: { protein: 20, carbs: 50, fat: 30 },
  demandAmount: { protein: null, carbs: null, fat: null },
};

const slice = createSlice({
  name: "userProfile",
  initialState: getStoreData("user.userProfile", INITIAL_STATE),
  reducers: {
    bmrChanged: (state, action) => {
      state.weight = action.payload.weight;
      state.height = action.payload.height;
      state.age = action.payload.age;
      state.activity = action.payload.activity;
      state.bmr = action.payload.bmr;
    },
    demandChanged: (state, action) => {
      state.demandPercentage = action.payload.demandPercentage;
      state.demandAmount = action.payload.demandAmount;
    },
  },
});

export const { bmrChanged, demandChanged } = slice.actions;
export default slice.reducer;
