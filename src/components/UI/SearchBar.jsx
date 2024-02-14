import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOptions from "./SearchOptions";

import classes from "../../css/SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/articles/" + search);
    setSearch("");
  };
  return (
    <>
      <h1 className={`h-1 text-center text-white mt-4 ${classes.title}`}>
        Article Search
      </h1>
      <form className={`w-50 m-auto ${classes.form}`} onSubmit={handleSubmit}>
        <input
          className="form-control focus-ring focus-ring-light border border-color-white"
          type="text"
          name="category"
          value={search}
          placeholder="Search articles here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <SearchOptions />
    </>
  );
};

export default SearchBar;
