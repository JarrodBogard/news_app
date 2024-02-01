import SearchBar from "../components/UI/SearchBar";
import ArticlesCard from "../components/UI/ArticlesCard";

const HomePage = () => {
  return (
    <div className="container position-relative">
      <SearchBar />
      <ArticlesCard />
    </div>
  );
};

export default HomePage;
