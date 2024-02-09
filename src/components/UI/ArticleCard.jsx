import Modal from "../UI/Modal";
import ArticleCardContent from "../content/ArticleCardContent";

const ArticleCard = ({ article, onClose }) => {
  const articleData = (
    <Modal onClose={onClose}>
      <ArticleCardContent article={article} />
    </Modal>
  );

  return articleData;
};

export default ArticleCard;
