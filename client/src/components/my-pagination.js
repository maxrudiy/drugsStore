import { Pagination, PaginationItem } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const MyPagination = ({ page, count }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.delete("page");

  return (
    <Pagination
      page={page || 1}
      count={count}
      renderItem={(item) => (
        <PaginationItem component={Link} to={`${location.pathname}?page=${item.page}&${searchParams}`} {...item} />
      )}
    />
  );
};

export { MyPagination };
