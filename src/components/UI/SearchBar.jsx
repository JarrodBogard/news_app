import { useNavigate } from "react-router";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (selection) => {
    navigate("/articles?query=" + selection + "&page=1");
  };

  return (
    <>
      <h1 className="h-1 text-center text-white m-2">Article Search</h1>
      <form className="w-50 m-auto" action="articles">
        <input
          className="form-control focus-ring focus-ring-light border border-color-white"
          type="text"
          name="query"
          placeholder="Search articles here..."
        />
      </form>
      <div className="container mt-2 d-flex justify-content-around text-white">
        <div className={classes.list} onClick={() => handleSearch("finance")}>
          Finance
        </div>
        <div className={classes.list} onClick={() => handleSearch("politics")}>
          Politics
        </div>
        <div className={classes.list} onClick={() => handleSearch("sports")}>
          Sports
        </div>
        <div className={classes.list} onClick={() => handleSearch("health")}>
          Health
        </div>
        <div
          className={classes.list}
          onClick={() => handleSearch("technology")}
        >
          Technology
        </div>
      </div>
    </>
  );
};

export default SearchBar;
