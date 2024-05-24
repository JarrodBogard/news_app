import Modal from "../UI/Modal";
import ArticleCardContent from "../content/ArticleCardContent";

const ArticleCard = ({ article, onClose, onAltered, userId }) => {
  const articleData = (
    <Modal onClose={onClose}>
      <ArticleCardContent
        article={article}
        onClose={onClose}
        onAltered={onAltered}
        userId={userId}
      />
    </Modal>
  );

  return articleData;
};

export default ArticleCard;
