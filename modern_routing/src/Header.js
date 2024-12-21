import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navItems">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>
      <div className="navItems">
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
