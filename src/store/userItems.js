import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { calculateMacrosForProducts } from "../utils/calculators";
import * as api from "../api";

const INITIAL_STATE = {
  products: [],
  temporaryProducts: [],
  meals: [],
  temporaryMeals: [],
  diaries: [],
  status: null,
};

export const getDiaries = createAsyncThunk("userItems/getDiaries", async () => {
  try {
    const { data } = await api.fetchDiaries();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createDiary = createAsyncThunk(
  "userItems/createDiary",
  async (diary) => {
    try {
      const { data } = await api.createDiary(diary);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateDiary = createAsyncThunk(
  "userItems/updateDiary",
  async ({ id, diary }) => {
    try {
      const { data } = await api.updateDiary(id, diary);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteDiary = createAsyncThunk(
  "userItems/deleteDiary",
  async (id) => {
    try {
      await api.deleteDiary(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "userItems",
  initialState: getStoreData("user.userItems", INITIAL_STATE),
  reducers: {
    productAdded: (state, action) => {
      if (action.payload.product.name.startsWith("[Template] ")) {
        const products = [...action.payload.product.products];
        products.map((product) =>
          state.temporaryProducts.push({
            ...product,
            id: uuidv4(),
          })
        );
      } else
        state.temporaryProducts.push({
          ...action.payload.product,
          id: uuidv4(),
        });

      document.getElementById("ingredient-input").value = "";
    },

    productSaved: (state, action) => {
      const reservedName = state.products.find(
        (product) => product.name === action.payload.name
      );

      if (action.payload.name && !reservedName) {
        state.products.push({
          id: uuidv4(),
          name: action.payload.name,
          category: action.payload.category,
          kcal: (action.payload.kcal / 100).toFixed(2),
          protein: (action.payload.protein / 100).toFixed(2),
          carbs: (action.payload.carbs / 100).toFixed(2),
          fat: (action.payload.fat / 100).toFixed(2),
          amount: (action.payload.amount / 100).toFixed(2),
        });
      }
    },

    productAmountCalculated: (state, action) => {
      const ingredients = action.payload.ingredients;
      const selectedProduct = state.temporaryProducts.find(
        (item) => item.id === action.payload.id
      );
      const templateProduct = ingredients.find(
        (product) => product.name === selectedProduct.name
      );

      for (let elem of ["protein", "carbs", "fat", "kcal", "amount"]) {
        selectedProduct[elem] = templateProduct[elem] * action.payload.amount;
      }
    },

    productRemoved: (state, action) => {
      state.temporaryProducts = state.temporaryProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },

    savedProductRemoved: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },

    productsRemoved: (state) => {
      state.temporaryProducts = [];
    },

    mealAdded: (state, action) => {
      if (action.payload.name) {
        state.temporaryMeals.push({
          id: uuidv4(),
          name: action.payload.name,
          products: action.payload.products,
          nutrients: calculateMacrosForProducts(action.payload.products),
        });
        state.temporaryProducts = [];
      }
    },

    mealSaved: (state, action) => {
      const reservedName = state.meals.find(
        (meal) => meal.name === action.payload.name
      );

      if (action.payload.name && !reservedName) {
        state.meals.push({
          id: uuidv4(),
          name: action.payload.name,
          products: action.payload.products,
          nutrients: calculateMacrosForProducts(action.payload.products),
        });
      }
    },

    mealRemoved: (state, action) => {
      state.temporaryMeals = state.temporaryMeals.filter(
        (meal) => meal.id !== action.payload.id
      );
    },

    mealsRemoved: (state) => {
      state.temporaryMeals = [];
    },

    diariesRemoved: (state) => {
      state.diaries = [];
    },
  },
  extraReducers: {
    [getDiaries.pending]: (state) => {
      state.status = "loading";
    },
    [getDiaries.fulfilled]: (state, action) => {
      state.diaries = action.payload;
      state.status = "success";
    },
    [getDiaries.rejected]: (state) => {
      state.status = "failed";
    },
    [createDiary.pending]: (state) => {
      state.status = "loading";
    },
    [createDiary.fulfilled]: (state) => {
      state.temporaryMeals = [];
      state.status = "success";
    },
    [createDiary.rejected]: (state) => {
      state.status = "failed";
    },
    [updateDiary.pending]: (state) => {
      state.status = "loading";
    },
    [updateDiary.fulfilled]: (state, action) => {
      state.diaries = state.diaries.map((diary) =>
        diary._id === action.payload._id ? action.payload : diary
      );
      state.status = "success";
    },
    [updateDiary.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteDiary.pending]: (state) => {
      state.status = "loading";
    },
    [deleteDiary.fulfilled]: (state, action) => {
      state.diaries = state.diaries.filter(
        (diary) => diary._id !== action.payload
      );
      state.status = "success";
    },
    [deleteDiary.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  productSaved,
  savedProductRemoved,
  mealAdded,
  mealSaved,
  mealRemoved,
  mealsRemoved,
  productAdded,
  productRemoved,
  productsRemoved,
  productAmountCalculated,
  diariesRemoved,
} = slice.actions;

export default slice.reducer;
