import { createSlice } from "@reduxjs/toolkit";
import { getStoreData } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { calculateMacrosForProducts } from "../utils/calculators";
import { cloneDeep } from "lodash";

const INITIAL_STATE = {
  status: null,
  temporaryProducts: [],
  temporaryMeals: [],
  currentItem: null,
  currentItemType: null,
  currentItemBackup: null,
  itemEditMode: null,
  itemCreateMode: null,
  currentCategory: null,
  modal: {
    isOpen: null,
    message: null,
    onClickAction: null,
    onClickActionArg: null,
  },
};

const slice = createSlice({
  name: "helpers",
  initialState: getStoreData("user.helpers", INITIAL_STATE),
  reducers: {
    productAdded: (state, action) => {
      if (action.payload.product.title.startsWith("[Meal] ")) {
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

    currentCategorySet: (state, action) => {
      state.currentCategory = action.payload;
    },

    currentCategoryRemoved: (state) => {
      state.currentCategory = null;
    },

    editedProductsAdded: (state, action) => {
      const products = [];
      [...action.payload.products].map((product) =>
        products.push({
          ...product,
          id: uuidv4(),
        })
      );
      state.temporaryProducts = [...products];
    },

    editedMealsAdded: (state, action) => {
      state.temporaryMeals = [...action.payload.meals];
    },

    currentItemSet: (state, action) => {
      state.currentItem = action.payload.item;
      state.currentItemType = action.payload.type;
      state.currentItemBackup = action.payload.item;
      state.itemEditMode = null;
      state.itemCreateMode = null;
    },

    currentItemRemoved: (state) => {
      state.currentItem = null;
      state.currentItemType = null;
      state.currentItemBackup = null;
      state.itemEditMode = null;
    },

    itemEditModeSet: (state) => {
      state.itemEditMode = true;
      state.itemCreateMode = null;
    },

    itemEditModeRemoved: (state) => {
      state.itemEditMode = null;
    },

    itemCreateModeSet: (state) => {
      state.itemCreateMode = true;
      state.currentItem = null;
      state.currentItemType = null;
      state.currentItemBackup = null;
      state.itemEditMode = null;
    },

    itemCreateModeRemoved: (state) => {
      state.itemCreateMode = null;
    },

    productAmountCalculated: (state, action) => {
      const productsLocalCopy = cloneDeep(state.temporaryProducts);
      const selectedProduct = productsLocalCopy.find(
        (item) => item.id === action.payload.id
      );

      const templateProduct = action.payload.products.find(
        (product) => product._id === selectedProduct._id
      );

      for (let key of Object.keys(selectedProduct.nutrients)) {
        selectedProduct.nutrients[key] =
          templateProduct.nutrients[key] * action.payload.amount;
      }

      selectedProduct.amount = action.payload.amount;

      state.temporaryProducts = state.temporaryProducts.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      );
    },

    productRemoved: (state, action) => {
      state.temporaryProducts = state.temporaryProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },

    productsRemoved: (state) => {
      state.temporaryProducts = [];
    },

    mealAdded: (state, action) => {
      if (action.payload.title) {
        state.temporaryMeals.push({
          id: uuidv4(),
          title: action.payload.title,
          products: action.payload.products,
          nutrients: calculateMacrosForProducts(action.payload.products),
        });
        state.temporaryProducts = [];
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

    modalOpened: (state, action) => {
      state.modal.isOpen = true;
      state.modal.message = action.payload.message;
      state.modal.onClickAction = action.payload.onClickAction;
      state.modal.onClickActionArg = action.payload.onClickActionArg;
    },

    modalClosed: (state) => {
      state.modal.isOpen = null;
      state.modal.message = null;
      state.modal.onClickAction = null;
      state.modal.onClickActionArg = null;
    },
  },
});

export const {
  mealAdded,
  editedMealsAdded,
  mealRemoved,
  mealsRemoved,
  productAdded,
  editedProductsAdded,
  productRemoved,
  productsRemoved,
  productAmountCalculated,
  currentItemSet,
  currentItemRemoved,
  itemEditModeSet,
  itemEditModeRemoved,
  itemCreateModeSet,
  itemCreateModeRemoved,
  currentCategorySet,
  currentCategoryRemoved,
  modalOpened,
  modalClosed,
} = slice.actions;

export default slice.reducer;
