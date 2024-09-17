import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [newsData, setNewsData] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        imageUrl: "",
    });

    // Fetch news from the backend
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/news/news");
            setNewsData(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Add new news
    const handleAddNews = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/news/news", formData);
            setNewsData([...newsData, response.data]);
            setFormData({ title: "", author: "", imageUrl: "" });
        } catch (error) {
            console.error("Error adding news:", error);
        }
    };

    // Delete news
    const handleDeleteNews = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/news/news/${id}`);
            setNewsData(newsData.filter((news) => news._id !== id));
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };
    

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <form onSubmit={handleAddNews} className="mb-8">
                <div className="mb-4">
                    <label className="block text-lg font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="border p-2 rounded-md w-full"
                        placeholder="Enter news title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="border p-2 rounded-md w-full"
                        placeholder="Enter author name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        className="border p-2 rounded-md w-full"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleAddNews}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add News
                </button>
            </form>

            {/* List of news */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news) => (
                    <div key={news._id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img src={news.imageUrl} alt={news.title} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-lg font-semibold mt-4">{news.title}</h2>
                        <p className="text-gray-600">by {news.author}</p>
                        <button
                            onClick={() => handleDeleteNews(news._id)}
                            className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
