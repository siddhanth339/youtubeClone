import Comment from "./Comment";
const CommentsList = ({ data }) => {
  return (
    <div>
      {/**using index is not recommended. Need to change this code to get some comment ID */}
      {data.map((comment, index) => (
        <>
          <Comment commentDetails={comment} />
          <div className="ml-10 border-l-2 border-gray-500">
            <CommentsList key={index} data={comment.replies} />
          </div>
        </>
      ))}
    </div>
  );
};
export default CommentsList;
