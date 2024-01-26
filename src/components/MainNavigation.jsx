import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Logo</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
