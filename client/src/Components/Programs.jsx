import React, { useState } from 'react';

const programData = [
  {
    id: 1,
    title: 'Sport Class',
    description: 'Each day at EduKid is a celebration. We celebrate all sports!',
    buttonLabel: 'View Details',
    icon: '../../Images/sport.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    borderColor: 'border-orange-300',
    btnBgColor: 'bg-orange-500',
    btnHoverBgColor: 'hover:bg-orange-600',
    details: 'In Sport Class, we focus on physical activities like football, basketball, and more to build coordination and teamwork.',
  },
  {
    id: 2,
    title: 'Music Class',
    description: 'Musical indoor and outdoor activities that cater to all domains of development!',
    buttonLabel: 'View Details',
    icon: '../../Images/music.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    borderColor: 'border-orange-300',
    btnBgColor: 'bg-orange-500',
    btnHoverBgColor: 'hover:bg-orange-600',
    details: 'In Music Class, children explore different instruments, rhythms, and melodies to boost their auditory and motor skills.',
  },
  {
    id: 3,
    title: 'Drawing Class',
    description: 'Fun arts and crafts projects for the children to work on together!',
    buttonLabel: 'View Details',
    icon: '../../Images/paint.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    borderColor: 'border-orange-300',
    btnBgColor: 'bg-orange-500',
    btnHoverBgColor: 'hover:bg-orange-600',
    details: 'In Drawing Class, we encourage creativity with various arts and crafts activities, including painting, sketching, and more.',
  },
];

const ProgramsSection = () => {
  const [openProgramId, setOpenProgramId] = useState(null);

  const toggleDetails = (id) => {
    setOpenProgramId(openProgramId === id ? null : id);
  };

  return (
    <section className="py-16 px-8 lg:px-32 bg-pink-50">


      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 underline">Our Programs</h2>
        <p className="text-lg text-gray-600">
          Our multi-level kindergarten caters to the age groups 2-5 years with a curriculum focused on children.
        </p>
      </div>


      <div className="overflow-x-auto">
        <div className="flex space-x-6 md:grid md:grid-cols-3 md:gap-8 md:space-x-0">
          {programData.map((program) => (
            <div
              key={program.id}
              className={`${program.bgColor} flex-shrink-0 w-80 md:w-auto rounded-xl p-8 shadow-lg relative text-center ${program.textColor} border-2 border-dotted ${program.borderColor}`}
            >

              {openProgramId === program.id && (
                <div className="mb-6 p-4 bg-orange-100 rounded-md shadow-md">
                  <p className="text-gray-700">{program.details}</p>
                </div>
              )}


              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={program.icon} alt={`${program.title} Icon`} />
              </div>


              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <p className="mb-6">{program.description}</p>


              <button
                onClick={() => toggleDetails(program.id)}
                className={`${program.btnBgColor} text-white px-6 py-2 rounded-lg shadow-lg ${program.btnHoverBgColor} transition-transform transform hover:scale-105`}
              >
                {program.buttonLabel}
              </button>


              <div className={`absolute inset-0 border-2 border-dotted ${program.borderColor} rounded-xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
