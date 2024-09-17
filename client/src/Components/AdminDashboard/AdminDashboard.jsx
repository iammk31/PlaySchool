import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'News', path: '/NewsAdmin' },
    { title: 'Programs', path: '' },
    { title: 'Registration', path: '/registration' },
    { title: 'Shops', path: '/shops' },
  ];

  return (
    <div className="min-h-52 bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={() => navigate(card.path)}
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
