import { createSlice } from "@reduxjs/toolkit";

const totalCost = (productsInCart) => {
  const reducer = (sum, item) => sum + item.product.price * item.quantity;
  return productsInCart.reduce(reducer, 0);
};

const initialState = {
  productsInCart: [],
  totalCost: 0,
  customerData: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.productsInCart.find((item) => item.product._id === action.payload._id);
      product ? (product.quantity += 1) : state.productsInCart.push({ product: action.payload, quantity: 1 });
      state.totalCost = totalCost(state.productsInCart);
    },
    removeFromCart: (state, action) => {
      state.productsInCart = state.productsInCart.filter((item) => item.product._id !== action.payload);
      state.totalCost = totalCost(state.productsInCart);
    },
    addToCartAmount: (state, action) => {
      const product = state.productsInCart.find((item) => item.product._id === action.payload.product._id);
      product
        ? (product.quantity = action.payload.quantity)
        : state.productsInCart.push({ product: action.payload.product, quantity: action.payload.quantity });
    },
    removeAllFromCart: () => initialState,
  },
});

export const { addToCart, addToCartAmount, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
