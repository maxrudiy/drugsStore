import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  filterProducts,
} from "../api/products-api.js";

export const createProductThunk = createAsyncThunk("products/createProduct", ({ apiUrl, newProduct }, thunkApi) =>
  createProduct(apiUrl, newProduct)
);
export const getProductThunk = createAsyncThunk("products/getProduct", ({ apiUrl, id }, thunkApi) =>
  getProduct(apiUrl, id)
);
export const getProductsThunk = createAsyncThunk("products/getProducts", (apiUrl, thunkApi) => getProducts(apiUrl));
export const updateProductThunk = createAsyncThunk("products/updateProduct", ({ apiUrl, id, newProduct }, thunkApi) =>
  updateProduct(apiUrl, id, newProduct)
);
export const deleteProductThunk = createAsyncThunk("products/deleteProduct", ({ apiUrl, id }, thunkApi) =>
  deleteProduct(apiUrl, id)
);
export const filterProductsThunk = createAsyncThunk("products/filterProducts", ({ apiUrl, params }, thunkApi) =>
  filterProducts(apiUrl, params)
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: false,
    response: { currentPage: 1, numberOfPages: 1, data: [] },
    isFavorite: [],
  },
  reducers: {
    setIsFavorite: (state, action) => {
      const { id, isFavorite } = action.payload;
      isFavorite ? state.isFavorite.push(id) : (state.isFavorite = state.isFavorite.filter((item) => item !== id));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(getProductsThunk.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
  },
});

export const { setIsFavorite } = productsSlice.actions;
export default productsSlice.reducer;
