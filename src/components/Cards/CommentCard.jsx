/* eslint-disable react/prop-types */
const CommentCard = (props) => {
  const { comment, deleteComment } = props;

   const editfunc = () => {
     return alert("Edit function is not available in Jsonplaceholder.");
   };


  return (
    <div className="my-2 pt-2 md:ml-6 md:mt-0 bg-white rounded shadow-md lg:min-w-[48%] max-w-xl p-4">
      <span className="font-semibold">{comment.name}</span>
      <span className="text-xs block">{comment.email}</span>
      <p className="my-2  text-gray-900">{comment.body}</p>
      <div className="space-x-2 text-xs">
        <button className="text-white hover:bg-green-500 bg-green-600 px-2 py-1 rounded" onClick={editfunc}>
          Edit
        </button>
        <button
          className="text-white hover:bg-red-500 bg-red-600 px-2 py-1 rounded"
          onClick={() => {
            deleteComment(comment.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
