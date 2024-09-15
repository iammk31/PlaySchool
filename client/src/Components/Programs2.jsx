import React from 'react';

const programsData = [
  {
    title: 'Settling',
    description: 'To round out our weekend of celebrations, we are holding our reunion.',
    age: '4-5 yrs',
    days: '3 days',
    hours: '3.30 hrs',
    image: '../../Images/boy.png', 
  },
  {
    title: 'Play Group',
    description: 'We will be magically transforming the School’s Sports Center into a full game area.',
    age: '4-5 yrs',
    days: '3 days',
    hours: '3.30 hrs',
    image: '../../Images/card.png', 
  },
  {
    title: 'Pre-Nursery',
    description: 'EduKid is thrilled to teach pre-nursery courses to better the lives of our children.',
    age: '4-5 yrs',
    days: '3 days',
    hours: '3.30 hrs',
    image: '../../Images/children.png', 
  },
];

const Programs = () => {
  return (
    <section className="text-center py-12 bg-gradient-to-b bg-pink-50 to-white">
      <h2 className="text-3xl font-bold mb-6 underline">Our Programs</h2>
      <p className="mb-10 mx-auto max-w-2xl text-lg">
        EduKid opened its doors in 1998 with a unique vision to provide students with a globally focused study of arts.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:-translate-y-2"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-42 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <p>
                <strong className="text-red-500">{program.age}</strong> age
              </p>
              <p>
                <strong className="text-red-500">{program.days}</strong> weekly
              </p>
              <p>
                <strong className="text-red-500">{program.hours}</strong> period
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
