import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData, notify } from "./utils";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await api.fetchProducts();
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const { data } = await api.createProduct(product);
      notify("Product created");
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    try {
      const { data } = await api.updateProduct(id, product);
      notify("Product updated");
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      await api.deleteProduct(id);
      notify("Product deleted");
      return id;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: getStoreData("resources.products", INITIAL_STATE),
  reducers: {
    productsRemoved: (state) => {
      state.products = [];
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "success";
    },
    [getProducts.rejected]: (state) => {
      state.status = "failed";
    },
    [createProduct.pending]: (state) => {
      state.status = "loading";
    },
    [createProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload);
      state.status = "success";
    },
    [createProduct.rejected]: (state) => {
      state.status = "failed";
    },
    [updateProduct.pending]: (state) => {
      state.status = "loading";
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.products = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.status = "success";
    },
    [updateProduct.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteProduct.pending]: (state) => {
      state.status = "loading";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.status = "success";
    },
    [deleteProduct.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { productsRemoved } = slice.actions;

export default slice.reducer;
