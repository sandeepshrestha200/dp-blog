import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SinglePost from "./pages/posts/SinglePost";
import { useState } from "react";

const App = () => {
  const [createPostPopup, setCreatePostPopup] = useState(false);
  const handleCreatePostPopup = () => {
    setCreatePostPopup((prevState) => !prevState);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar handleCreatePostPopup={handleCreatePostPopup} />
        <Routes>
          <Route path="/" element={<Home createPostPopup={createPostPopup} handleCreatePostPopup={handleCreatePostPopup} />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
