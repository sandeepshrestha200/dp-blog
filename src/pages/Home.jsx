/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PostCard from "../components/Cards/PostCard";
import CreatePost from "./posts/CreatePost";

const Home = ({ createPostPopup, handleCreatePostPopup }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    console.log(posts);
  };

  const deletePost = async (pid) => {
    const resposne = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await resposne.json();
    console.log(data);
    // alert(`Post ${pid} is deleted successfully`);
    const updatedPosts = posts.filter((post) => post.id !== pid);
    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} deletePost={deletePost} posts={posts} setPosts={setPosts} />
        ))}
      </div>
      {createPostPopup && <CreatePost handleCreatePostPopup={handleCreatePostPopup} posts={posts} setPosts={setPosts} />}
    </>
  );
};

export default Home;
