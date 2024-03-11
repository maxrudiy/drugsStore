import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";

const LinkListItem = (props) => {
  return <ListItem component={Link} to={props.pathname} {...props} />;
};

export { LinkListItem };
