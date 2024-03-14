import { COMMENTS } from "../utils/constants";
import CommentsList from "./CommentsList";
const CommentsContainer = () => {
  return (
    <div>
      <CommentsList data={COMMENTS}></CommentsList>
    </div>
  );
};

export default CommentsContainer;
