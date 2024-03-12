import { createBrowserRouter } from "react-router-dom";
import { CartLayout } from "../layouts/cart-layout";
import { MainLayout } from "../layouts/main-layout";
import { OrdersHistoryLayout } from "../layouts/orders-history-layout";
import { ShopsLayout } from "../layouts/shops-layout";
import { AllProducts } from "../components/all-products";
import store from "../store/store";
import { getProductsThunk } from "../store/products-slice";
import { BestProducts } from "../components/best-products";
import { CartProducts } from "../components/cart-products";
import { CartMap } from "../components/cart-map";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ShopsLayout />,
        children: [
          {
            path: "products/:shop",
            element: <AllProducts />,
            loader: ({ params, request }) => {
              const url = new URL(request.url);
              return store.dispatch(getProductsThunk(SERVER_URL + url.pathname + url.search));
            },
          },
          {
            path: "products/:shop/filters",
            element: <AllProducts />,
            loader: ({ params, request }) => {
              const url = new URL(request.url);
              return store.dispatch(getProductsThunk(SERVER_URL + url.pathname + url.search));
            },
          },
          {
            index: true,
            element: <BestProducts />,
          },
        ],
      },
      {
        path: "cart",
        element: <CartLayout />,
        children: [
          {
            index: true,
            element: <CartProducts />,
          },
          {
            path: "map",
            element: <CartMap />,
          },
        ],
      },
      {
        path: "orders-history",
        element: <OrdersHistoryLayout />,
      },
    ],
    //errorElement: <div>Error Element</div>,
  },
]);

export { router };
