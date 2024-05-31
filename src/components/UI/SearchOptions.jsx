import { useNavigate } from "react-router";

import classes from "../../css/SearchOptions.module.css";

const SearchOptions = () => {
  const navigate = useNavigate();

  const handleSearch = (selection) => {
    navigate("/articles/" + selection);
  };

  return (
    <div className="container mt-4 mb-3 d-flex justify-content-around text-white">
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
      <div className={classes.list} onClick={() => handleSearch("technology")}>
        Technology
      </div>
    </div>
  );
};

export default SearchOptions;
