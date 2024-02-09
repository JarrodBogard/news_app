import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "../../css/Pagination.module.css";
import { useEffect } from "react";

const Pagination = ({ paginate, itemsPerPage, totalItems }) => {
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();
  // const location = useLocation();
  // const pathname = location.pathname;
  // const query = location.search.split("&")[0];

  // const queryString = window.location.search;
  // const params = new URLSearchParams(queryString);
  // const query = params.get("query");

  useEffect(() => {
    navigate(category ? `/articles/${category}` : `/`);
  }, [category, navigate]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li className="page-item m-2" key={number}>
      <Link
        className="page-link rounded m-1 bg-dark bg-gradient text-white border border-0 shadow"
        to={`${
          category ? `/articles/${category}?page=${number}` : `?page=${number}`
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
