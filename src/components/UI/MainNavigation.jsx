import { NavLink } from "react-router-dom";

import classes from "../../css/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark bg-gradient sticky-top border-bottom border-light">
      <div className={`container-fluid ${classes.navigation}`}>
        <NavLink className={`navbar-brand text-white ${classes.logo}`} to={"/"}>
          Logo
        </NavLink>
        <div
          className={`navbar-collapse justify-content-between ${classes.navigation}`}
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
