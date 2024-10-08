import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'News', path: '/NewsAdmin' },
    { title: 'Registration', path: '/RegistrationAdmin' }
  ];

  return (
    <div className="min-h-52 bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 text-center"
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
