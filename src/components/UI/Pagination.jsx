import { Link, useLocation } from "react-router-dom";
import classes from "./Pagination.module.css";

const Pagination = ({ paginate, itemsPerPage, totalItems }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const query = location.search.split("&")[0];

  // const queryString = window.location.search;
  // const params = new URLSearchParams(queryString);
  // const query = params.get("query");

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li className="page-item m-2" key={number}>
      <Link
        className="page-link rounded m-1 bg-dark bg-gradient text-white border border-0 shadow"
        to={`${
          pathname !== "/"
            ? `/articles${query}&page=${number}`
            : `?page=${number}`
        }`}
        onClick={() => paginate(number)}
      >
        {number}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul
        className={`pagination mt-2 justify-content-center ${classes.pagination}`}
      >
        {pages}
      </ul>
    </nav>
  );
};

export default Pagination;
