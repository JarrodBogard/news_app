import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient sticky-top border-bottom border-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to={"/"}>
          Logo
        </Link>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
