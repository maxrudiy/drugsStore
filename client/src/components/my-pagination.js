import { Pagination, PaginationItem } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const MyPagination = ({ page, count }) => {
  const location = useLocation();

  return (
    <Pagination
      page={page || 1}
      count={count}
      renderItem={(item) => <PaginationItem component={Link} to={`${location.pathname}?page=${item.page}`} {...item} />}
    />
  );
};

export { MyPagination };
