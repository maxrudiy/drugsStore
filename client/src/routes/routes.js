import { createBrowserRouter } from "react-router-dom";
import { CartLayout } from "../layouts/cart-layout";
import { MainLayout } from "../layouts/main-layout";
import { OrdersHistoryLayout } from "../layouts/orders-history-layout";
import { ShopsLayout } from "../layouts/shops-layout";
import { Products } from "../components/products";
import store from "../store/store";
import { getProductsThunk } from "../store/products-slice";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "products/:shop?",
        element: <ShopsLayout />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: async ({ params, request }) => {
              const url = new URL(request.url);
              return store.dispatch(getProductsThunk(`${SERVER_URL}/products/${params.shop}${url.search}`));
            },
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
    errorElement: <div>Error Element</div>,
  },
]);

export { router };
