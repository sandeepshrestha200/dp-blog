/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import EditPost from "../../pages/posts/EditPost";
import { useState } from "react";

const Card = ({ post, deletePost, posts, setPosts }) => {
  const [editPostPopup, setEditPostPopup] = useState(false);
  const handleEditPostPopup = () => {
    setEditPostPopup(true);
  };

  const editfunc = () => {
    return alert("Edit function is not available in Jsonplaceholder.");
  };
  
  return (
    <div className="sm:w-[48%] lg:w-[32%] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <h2 className="text-xl  font-semibold">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
        <div className="flex justify-between items-center mt-4">
          <Link to={`/posts/${post.id}`}>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read More </button>
          </Link>
          <div className="space-x-2">
            <button className="text-white hover:bg-green-500 bg-green-600 px-4 py-1 rounded" onClick={editfunc}>
              Edit
            </button>
            <button
              className="text-white hover:bg-red-500 bg-red-600 px-4 py-1 rounded "
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {editPostPopup && <EditPost handleEditPostPopup={handleEditPostPopup} post={post} posts={posts} setPosts={setPosts} />}
    </div>
  );
};

export default Card;
