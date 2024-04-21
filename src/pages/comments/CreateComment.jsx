/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateComment = ({ postId, comments, setComments, handleCreateCommentPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      postId: postId,
      name: formData.name,
      email: formData.email,
      body: formData.body,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    setComments([data, ...comments]);

    setFormData({
      name: "",
      email: "",
      body: "",
    });

    handleCreateCommentPopup();
  };

  return (
    <>
      <section className="z-[100] h-screen w-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-400/80 px-6 lg:px-20 py-14">
        <div className="bg-[#E5E5E5] md:w-1/2 xl:w-1/3 rounded-lg p-8 relative text-black space-y-6">
          <i
            className="ri-close-fill text-xl font-bold absolute top-4 right-4 bg-red-700 hover:bg-red-700/80 text-white px-1 rounded cursor-pointer"
            onClick={handleCreateCommentPopup}
          ></i>
          <h2 className="text-2xl text-center font-medium">Create Comment</h2>
          <form>
            <div className="mb-2 w-full space-y-3">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                type="text"
                className="w-full block rounded-lg border-none py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2 w-full space-y-3">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                type="email"
                className="w-full block rounded-lg border-none py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2 w-full space-y-3">
              <label htmlFor="body">Body</label>
              <textarea
                placeholder="Body"
                id="body"
                name="body"
                value={formData.body}
                rows="4"
                className="w-full block rounded-lg border-none py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
          <div className="flex flex-wrap justify-evenly">
            <button className="hover:bg-[#646cf7] bg-[#4a4e9c] text-white px-8 py-2 rounded" onClick={handleSubmit}>
              Create
            </button>
            <button className="bg-red-700 hover:bg-red-700/80 px-8 py-2 text-white rounded" onClick={handleCreateCommentPopup}>
              No
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateComment;
