import SearchOptions from "./SearchOptions";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <h1 className={`h-1 text-center text-white m-2 ${classes.title}`}>
        Article Search
      </h1>
      <form className={`w-50 m-auto ${classes.form}`} action="articles">
        <input
          className="form-control focus-ring focus-ring-light border border-color-white"
          type="text"
          name="query"
          placeholder="Search articles here..."
        />
      </form>
      <SearchOptions />
    </>
  );
};

export default SearchBar;
