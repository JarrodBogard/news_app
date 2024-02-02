import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const SearchFilter = ({ onFilter }) => {
  const { articles } = useLoaderData();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (navigation.state === "loading") {
      console.log(navigation.state, "state");
      setSearchQuery("");
    }

    if (searchQuery !== "") {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );

      onFilter(filteredArticles);
    } else {
      onFilter(articles);
    }
  }, [onFilter, articles, searchQuery, navigation]);

  return (
    <div className={`position-absolute top-0 start-0`}>
      <input
        value={searchQuery}
        type="text"
        placeholder="Type keyword here..."
        onChange={() => setSearchQuery(event.target.value)}
        className="form-control focus-ring focus-ring-light border border-color-white"
      />
    </div>
  );
};

export default SearchFilter;
