// libraries
import { useState, useCallback, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// pages
import ArticlePage from "../../pages/Article";

// components
import SearchFilter from "./SearchFilter";
import ArticlesCardContent from "../content/ArticlesCardContent";
import Pagination from "../UI/Pagination";

const ArticlesCard = ({ articles }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isAltered, setIsAltered] = useState(false);
  const [filteredArticle, setFilteredArticle] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [filteredArticles, setFilteredArticles] = useState(null);

  // if (query && currentPage !== page) setCurrentPage(page);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      }
    });
  }, [auth]);

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
        <ArticlePage
          article={filteredArticle}
          onClose={handleToggle}
          onAltered={setIsAltered}
          userId={userId}
        />
      )}
      <ArticlesCardContent
        items={currentItems}
        onOpen={handleToggle}
        isAltered={isAltered}
        onAltered={setIsAltered}
        userId={userId}
      />
      <Pagination
        paginate={paginate}
        totalItems={articlesData.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default ArticlesCard;
