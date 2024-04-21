import { useParams } from "react-router-dom";
import CommentCard from "../../components/Cards/CommentCard";
import { useEffect, useState } from "react";
import CreateComment from "../comments/CreateComment";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [createCommentPopup, setCreateCommentPopup] = useState(false);

  const handleCreateCommentPopup = () => {
    setCreateCommentPopup((prevState) => !prevState);
  };


  const fetchPost = async () => {
    const resposne = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await resposne.json();
    setPost(data);
  };
  const fetchComments = async () => {
    const resposne = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await resposne.json();
    setComments(data);
  };

  const deleteComment = async (cid) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${cid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const updatedComments = comments.filter((comment) => comment.id !== cid);
    setComments(updatedComments);
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <main className="mx-auto max-w-7xl  items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-md">
          <div className={`py-2 px-6 w-full rounded-md`}>
            <h3 className={`font-bold text-2xl hover:text-slate-700 my-3`}> {post.title} </h3>

            <p className="text-justify text-lg">{post.body}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold underline">Comments :</p>
            <button className="text-white hover:bg-gray-500 bg-gray-600 px-2 py-1 rounded" onClick={handleCreateCommentPopup}>
              Add
            </button>
          </div>
          <div className="flex flex-wrap">
            {comments.length > 0 &&
              comments?.map((comment) => {
                return <CommentCard key={comment.id} comment={comment} deleteComment={deleteComment} />;
              })}
          </div>
        </div>
      </main>
      {createCommentPopup && <CreateComment handleCreateCommentPopup={handleCreateCommentPopup} comments={comments} setComments={setComments} />}
    </>
  );
};

export default SinglePost;
