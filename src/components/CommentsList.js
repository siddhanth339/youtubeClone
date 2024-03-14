import Comment from "./Comment";
const CommentsList = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <>
          <Comment commentDetails={comment} />
          <div className="ml-10 border-l-2 border-gray-500">
            <CommentsList data={comment.replies} />
          </div>
        </>
      ))}
    </div>
  );
};
export default CommentsList;
