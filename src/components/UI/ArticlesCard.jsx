// libraries
import { useState, useCallback } from "react";
import { useLoaderData } from "react-router-dom";

// pages
import ArticlePage from "../../pages/Article";

// components
import SearchFilter from "./SearchFilter";
import ArticlesCardContent from "../content/ArticlesCardContent";
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

  const handleToggle = (selection) => {
    setFilteredArticle(
      ...articles.filter((article) => article.title === selection)
    );
    setIsToggled(!isToggled);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  let articlesData = filteredArticles ? filteredArticles : articles;

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articlesData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <SearchFilter onFilter={handleFilteredData} articles={articles} />
      {isToggled && (
        <ArticlePage article={filteredArticle} onClose={handleToggle} />
      )}
      <ArticlesCardContent items={currentItems} onOpen={handleToggle} />
      <Pagination
        paginate={paginate}
        totalItems={articlesData.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default ArticlesCard;
