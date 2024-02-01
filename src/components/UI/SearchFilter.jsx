import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SearchFilter = ({ onFilter }) => {
  const { articles } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery !== "") {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery)
      );

      onFilter(filteredArticles);
    } else {
      onFilter(articles);
    }
  }, [onFilter, articles, searchQuery]);

  return (
    <div className={`position-absolute top-0 start-0`}>
      <input
        value={searchQuery}
        type="text"
        placeholder="Type keyword here..."
        onChange={() => setSearchQuery(event.target.value.trim().toLowerCase())}
        className="form-control focus-ring focus-ring-light border border-color-white"
      />
    </div>
  );
};

export default SearchFilter;
