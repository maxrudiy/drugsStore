import { Link } from "react-router-dom";
import { Tab } from "@mui/material";

const LinkTab = (props) => {
  return <Tab component={Link} to={props.pathname} {...props} />;
};

export { LinkTab };
