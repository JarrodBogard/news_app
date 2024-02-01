// libraries
import { useState, useCallback } from "react";
import { useLoaderData } from "react-router-dom";

// pages
import ArticlePage from "../../pages/Article";

// components
import SearchFilter from "./SearchFilter";
import Pagination from "../UI/Pagination";

const ArticlesCard = () => {
  const { articles } = useLoaderData();

  const [isToggled, setIsToggled] = useState(false);
  const [filteredArticle, setFilteredArticle] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [filteredArticles, setFilteredArticles] = useState(null);

  // if (query && currentPage !== page) setCurrentPage(page);

  const handleFilteredData = useCallback((filtered) => {
    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, []);

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

  let articlesData = filteredArticles ? filteredArticles : articles;

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articlesData.slice(indexOfFirstItem, indexOfLastItem);

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
      <SearchFilter onFilter={handleFilteredData} articles={articles} />
      {isToggled && (
        <ArticlePage article={filteredArticle} onClose={handleClose} />
      )}
      {articlesCardData}
      <Pagination
        paginate={paginate}
        totalItems={articlesData.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default ArticlesCard;
