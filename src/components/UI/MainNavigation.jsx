import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient sticky-top border-bottom border-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to={"/"}>
          Logo
        </NavLink>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className={`navbar-nav ${classes.list}`}>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-white ${({ isActive }) =>
                  isActive ? classes.active : ""}`}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={"/login"}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
