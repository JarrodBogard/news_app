import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import classes from "../../css/MainNavigation.module.css";

const MainNavigation = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        // console.log("User is currently signed out");
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // console.log("Sign out successful");
      setUserId(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={classes.background}>
      <nav className="navbar navbar-expand-sm">
        <div className={`container-fluid ${classes.navigation} fs-4 fw-medium`}>
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
              {userId && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/saved">
                      Saved
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-white"
                      onClick={handleLogout}
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              )}
              {!userId && (
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
