import { Link } from "react-router-dom";

const Pagination = ({ paginate, itemsPerPage, totalItems }) => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li className="page-item m-2" key={number}>
      <Link
        className="page-link rounded m-1 bg-dark bg-gradient text-white border border-0 shadow"
        to={`${
          query ? `/articles?query=${query}&page=${number}` : `?page=${number}`
        }`}
        onClick={() => paginate(number)}
      >
        {number}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className="pagination mt-2 justify-content-center">{pages}</ul>
    </nav>
  );
};

export default Pagination;
