import ArticleCard from "../components/UI/ArticleCard";

const ArticlePage = ({ article, onClose }) => {
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage

  return <ArticleCard article={article} onClose={onClose} />;
};

export default ArticlePage;
