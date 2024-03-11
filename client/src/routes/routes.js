import { createBrowserRouter } from "react-router-dom";
import { CartLayout } from "../layouts/cart-layout";
import { MainLayout } from "../layouts/main-layout";
import { OrdersHistoryLayout } from "../layouts/orders-history-layout";
import { ShopsLayout } from "../layouts/shops-layout";
import { Products } from "../components/products";
import store from "../store/store";
import { getProductsThunk } from "../store/products-slice";
import { BestProducts } from "../components/best-products";

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
            element: <Products />,
            loader: ({ params, request }) => {
              const url = new URL(request.url);
              return store.dispatch(getProductsThunk(SERVER_URL + url.pathname + url.search));
            },
          },
          {
            path: "products/:shop/filters",
            element: <Products />,
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
