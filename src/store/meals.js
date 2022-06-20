import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData, notify } from "./utils";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
  meals: [],
};

export const getMeals = createAsyncThunk("meals/getMeals", async () => {
  try {
    const { data } = await api.fetchMeals();
    return data;
  } catch (error) {
    console.log(error);
    notify(error.response.data.message);
  }
});

export const createMeal = createAsyncThunk("meals/createMeal", async (meal) => {
  try {
    const { data } = await api.createMeal(meal);
    notify("Meal created");
    return data;
  } catch (error) {
    console.log(error);
    notify(error.response.data.message);
  }
});

export const updateMeal = createAsyncThunk(
  "meals/updateMeal",
  async ({ id, meal }) => {
    try {
      const { data } = await api.updateMeal(id, meal);
      notify("Meal updated");
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const deleteMeal = createAsyncThunk("meals/deleteMeal", async (id) => {
  try {
    await api.deleteMeal(id);
    notify("Meal deleted");
    return id;
  } catch (error) {
    console.log(error);
    notify(error.response.data.message);
  }
});

const slice = createSlice({
  name: "meals",
  initialState: getStoreData("resources.meals", INITIAL_STATE),
  reducers: {
    mealsRemoved: (state) => {
      state.meals = [];
    },
  },
  extraReducers: {
    [getMeals.pending]: (state) => {
      state.status = "loading";
    },
    [getMeals.fulfilled]: (state, action) => {
      state.meals = action.payload;
      state.status = "success";
    },
    [getMeals.rejected]: (state) => {
      state.status = "failed";
    },
    [createMeal.pending]: (state) => {
      state.status = "loading";
    },
    [createMeal.fulfilled]: (state, action) => {
      state.meals.push(action.payload);
      state.status = "success";
    },
    [createMeal.rejected]: (state) => {
      state.status = "failed";
    },
    [updateMeal.pending]: (state) => {
      state.status = "loading";
    },
    [updateMeal.fulfilled]: (state, action) => {
      state.meals = state.meals.map((meal) =>
        meal._id === action.payload._id ? action.payload : meal
      );
      state.status = "success";
    },
    [updateMeal.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteMeal.pending]: (state) => {
      state.status = "loading";
    },
    [deleteMeal.fulfilled]: (state, action) => {
      state.meals = state.meals.filter((meal) => meal._id !== action.payload);
      state.status = "success";
    },
    [deleteMeal.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { mealsRemoved } = slice.actions;

export default slice.reducer;
