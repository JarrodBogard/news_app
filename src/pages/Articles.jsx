import SearchBar from "../components/UI/SearchBar";
import ArticlesCard from "../components/UI/ArticlesCard";

const ArticlesPage = () => {
  return (
    <div className="container position-relative">
      <SearchBar />
      <ArticlesCard />
    </div>
  );
};

export default ArticlesPage;
