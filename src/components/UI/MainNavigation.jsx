import { NavLink } from "react-router-dom";

import classes from "../../css/MainNavigation.module.css";
// import papersImg from "../../assets/images/papers.jpg";

const MainNavigation = () => {
  return (
    <header className={classes.background}>
      <nav className="navbar navbar-expand-sm sticky-top">
        <div className={`container-fluid ${classes.navigation}`}>
          <NavLink
            className={`navbar-brand text-white ${classes.logo}`}
            to={"/"}
          >
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
                <NavLink className="nav-link text-white" to="/saved">
                  Saved
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
