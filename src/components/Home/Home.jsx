import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    fetchPosts();
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  const handlePostSelect = (postId) => {
    setSelectedPost(posts.find((post) => post.id === postId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleModalOpen}
      >
        Open Modal
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-lg font-bold">Select Post</h5>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800"
                onClick={handleModalClose}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <select
              className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mb-4"
              onChange={(e) => handlePostSelect(parseInt(e.target.value))}
            >
              <option value="">Select a Post</option>
              {posts.map((post) => (
                <option key={post.id} value={post.id}>
                  {post.title}
                </option>
              ))}
            </select>

            <div className="mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mb-4"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mb-4"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mb-4"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;