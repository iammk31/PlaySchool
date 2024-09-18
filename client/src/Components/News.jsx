import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsCard = ({ imageUrl, information, timing }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-0 border-5 border-black">
      <img src={imageUrl} alt="news" className="w-full h-45 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{information}</h2>
        <div className="text-gray-600 text-sm">
          <p>{timing}</p>
          <p>Be On Time</p>
        </div>
      </div>
    </div>
  );
};

const EduKidNews = () => {
  const [newsData, setNewsData] = useState([]);

  // Fetch news from the backend when the component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/news/news");
      setNewsData(response.data); // Assuming the data is in response.data
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto">
        <h1 className="text-left text-3xl font-bold mb-8 underline">EduKid News</h1>
        <p className="text-left mb-12">
          It is our goal to provide age-appropriate opportunities for every child enrolled in EduKid Kids Club enrichment classes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.length > 0 ? (
            newsData.map((news, index) => (
              <NewsCard
                key={index}
                imageUrl={news.imageUrl}
                information={news.information}
                timing={news.timing}
              />
            ))
          ) : (
            <p>No news available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EduKidNews;
