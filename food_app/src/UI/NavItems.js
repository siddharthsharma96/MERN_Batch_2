import { NavLink } from "react-router-dom";

const NavItems = ({ path, content }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {content}
      </NavLink>
    </li>
  );
};

export default NavItems;
