import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder, getOrder, getOrders, updateOrder, deleteOrder, getOrdersByName } from "../api/orders-api";

export const createOrderThunk = createAsyncThunk("orders/createOrder", ({ apiUrl, newOrder }, thunkApi) =>
  createOrder(apiUrl, newOrder)
);
export const getOrderThunk = createAsyncThunk("orders/getOrder", ({ apiUrl, id }, thunkApi) => getOrder(apiUrl, id));
export const getOrdersThunk = createAsyncThunk("orders/getOrders", (apiUrl, thunkApi) => getOrders(apiUrl));
export const updateOrderThunk = createAsyncThunk("orders/updateOrder", ({ apiUrl, id, newOrder }, thunkApi) =>
  updateOrder(apiUrl, id, newOrder)
);
export const deleteOrderThunk = createAsyncThunk("order/deleteOrder", ({ apiUrl, id }, thunkApi) =>
  deleteOrder(apiUrl, id)
);
export const getOrdersByNameThunk = createAsyncThunk("order/getOrdersByName", ({ apiUrl, name }, thunkApi) =>
  getOrdersByName(apiUrl, name)
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    loading: false,
    error: false,
    orders: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrderThunk.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(createOrderThunk.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(createOrderThunk.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
  },
});

export default ordersSlice.reducer;
