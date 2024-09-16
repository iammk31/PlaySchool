import React from "react";

const NewsCard = ({ imageUrl, title, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-0 border-5 border-black">
      <img src={imageUrl} alt="news" className="w-full h-45 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="text-gray-600 text-sm">
          <p>by {author}</p>
          <p>5 Comments</p>
        </div>
      </div>
    </div>
  );
};

const EduKidNews = () => {
  const newsData = [
    {
      imageUrl: "https://images.unsplash.com/photo-1603354351149-e97b9124020d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tips to Understand Your Child Better - A Guide for Parents!",
      author: "Ken",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620656314226-5c76c4877612?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tips to Understand Your Child Better - A Guide for Parents!",
      author: "Ben",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1719977913662-d09cd3156425?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tips to Understand Your Child Better - A Guide for Parents!",
      author: "Cen",
    },
  ];

  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto">
        <h1 className="text-left text-3xl font-bold mb-8 underline">EduKid News</h1>
        <p className="text-left mb-12">
          It is our goal to provide age-appropriate opportunities for every child enrolled in EduKid Kids Club enrichment classes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              imageUrl={news.imageUrl}
              title={news.title}
              author={news.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduKidNews;
