/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ path, title, ...props }) => (
  <li {...props}>
    <NavLink to={path}>{title}</NavLink>
  </li>
);

export default NavItem;
