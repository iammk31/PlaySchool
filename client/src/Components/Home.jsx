import React from 'react';

const Home = () => {
    return (

        <div className="bg-pink-50 min-h-screen">
            <section className="py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-green-600 text-xl font-semibold">Kindergarten Program</h2>
                    <h1 className="text-5xl font-bold text-gray-800">Best Children's Education Curriculum</h1>
                    <p className="text-gray-600">Admission Open 20-24 April</p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-3xl">
                        Apply Now
                    </button>
                </div>

                <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
                    <div className="absolute -top-8 -right-8 w-72 h-72 bg-pink-200 rounded-full"></div>
                    <img
                        src="../../Images/Vector.png"
                        alt="Kindergarten"
                        className="rounded-xl relative z-10"
                    />
                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-white rounded-full shadow-lg"></div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;