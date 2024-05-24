import ArticleCard from "../components/UI/ArticleCard";

const ArticlePage = ({ article, onClose, onAltered, userId }) => {
  return (
    <ArticleCard
      article={article}
      onClose={onClose}
      onAltered={onAltered}
      userId={userId}
    />
  );
};

export default ArticlePage;
