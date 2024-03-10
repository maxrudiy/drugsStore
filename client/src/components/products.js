import { useSelector } from "react-redux";
import { MyPagination } from "./pagination";
import { Product } from "./product";
function Products() {
  const productsStore = useSelector((state) => state.productsStore);

  return (
    <>
      {productsStore.response.data.map((item) => (
        <Product product={item} />
      ))}
      <MyPagination page={productsStore.response.currentPage} count={productsStore.response.numberOfPages} />
    </>
  );
}

export { Products };
