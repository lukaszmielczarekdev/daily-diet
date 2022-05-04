import { createSlice } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { calculateMacrosForProducts } from "../utils/calculators";

const INITIAL_STATE = {
  products: [],
  temporaryProducts: [],
  meals: [],
  temporaryMeals: [],
  diaries: [],
};

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

    diaryAdded: (state, action) => {
      const length = action.payload.name.length;

      if (3 <= length && length <= 25 && action.payload.demand.kcal > 0) {
        state.diaries.push({
          id: uuidv4(),
          date: new Date().toLocaleDateString(),
          name: action.payload.name,
          demand: action.payload.demand,
          meals: action.payload.meals,
          nutrients: action.payload.nutrients,
          demandCoverage: action.payload.demandCoverage,
        });

        state.temporaryMeals = [];
      }
    },

    diaryRemoved: (state, action) => {
      state.diaries = state.diaries.filter(
        (diary) => diary.id !== action.payload.id
      );
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
  diaryAdded,
  diaryRemoved,
  productAmountCalculated,
} = slice.actions;

export default slice.reducer;
