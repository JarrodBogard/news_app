import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import SearchBar from "../components/UI/SearchBar";
import ArticlesCard from "../components/UI/ArticlesCard";

const ArticlesPage = () => {
  const { articles } = useLoaderData();
  return (
    <div className="container position-relative">
      <SearchBar />
      <Suspense
        fallback={
          <p style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>
            Loading...
          </p>
        }
      >
        <Await resolve={articles}>
          {(loadedArticles) => <ArticlesCard articles={loadedArticles} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
