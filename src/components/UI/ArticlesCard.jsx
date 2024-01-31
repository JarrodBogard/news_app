import { useState, useRef, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import ArticlePage from "../../pages/Article";
import Pagination from "../UI/Pagination";

const ArticlesCard = () => {
  const { articles } = useLoaderData();

  const [isToggled, setIsToggled] = useState(false);
  const [filteredArticle, setFilteredArticle] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [queriedArticles, setQueriedArticles] = useState(null);

  const inputRef = useRef(null);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const query = params.get("query");
  const page = params.get("page");

  if (query && currentPage !== page) setCurrentPage(page);

  const handleSearch = () => {
    const searchQuery = inputRef.current.value.trim().toLowerCase();
    onFilter(searchQuery);
  };

  const onFilter = (searchQuery) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );

    setQueriedArticles(filteredArticles);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(queriedArticles, "fired");
  }, [queriedArticles]);

  const handleOpen = (selection) => {
    setFilteredArticle(
      ...articles.filter((article) => article.title === selection)
    );
    setIsToggled(true);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  let data = queriedArticles ? queriedArticles : articles;

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const articlesCardData = (
    <div className="row">
      {currentItems.map((article) => (
        <div
          key={article.source.id + Math.random()}
          className="col-4 g-4"
          onClick={() => handleOpen(article.title)}
        >
          <div
            className="card text-center shadow border border-0 rounded-4"
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-around bg-dark bg-gradient rounded-3">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="card-img"
                style={{ maxHeight: "200px" }}
              />
              <h5 className="card-text text-white">{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type keyword here..."
        onChange={handleSearch}
      />
      {isToggled && (
        <ArticlePage article={filteredArticle} onClose={handleClose} />
      )}
      {articlesCardData}
      <Pagination
        paginate={paginate}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        query={query}
      />
    </>
  );
};

export default ArticlesCard;
