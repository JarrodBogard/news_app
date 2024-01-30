import ArticleCard from "../components/UI/ArticleCard";

const ArticlePage = ({ article, onClose }) => {

  return <ArticleCard article={article} onClose={onClose} />;
};

export default ArticlePage;
