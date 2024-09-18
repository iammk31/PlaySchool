import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 md:px-20">
            {/* Hero Section */}
            <section className="bg-teal-700 rounded-2xl shadow-lg p-10 mb-12 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Welcome to EduKids Play School</h1>
                <p className="text-lg text-white mb-6">
                    Where Learning Meets Fun! We nurture curious minds with love, care, and creativity.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1686644472167-4dabcd14bc53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Kids Learning"
                    className="w-full h-64 object-cover rounded-lg"
                />
            </section>

            {/* Introduction Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-teal-600 mb-6 underline">About EduKids</h2>
                <p className="text-gray-700 text-lg">
                    At EduKids, we believe that early childhood education lays the foundation for a lifetime of learning.
                    Our experienced and passionate educators guide children in a safe, engaging, and joyful environment
                    where every child’s individual potential can flourish.
                </p>
            </section>

            {/* Key Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Creative Curriculum</h3>
                    <p className="text-gray-700">
                        Our play-based curriculum fosters creativity, critical thinking, and problem-solving skills
                        through hands-on learning activities.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Safe Environment</h3>
                    <p className="text-gray-700">
                        We prioritize safety and security, providing children with a nurturing environment where they feel
                        loved and protected.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Experienced Teachers</h3>
                    <p className="text-gray-700">
                        Our educators are not only certified but also passionate about making learning exciting and
                        meaningful for young children.
                    </p>
                </div>
            </section>

            {/* Mission and Values Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Mission & Values</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Our mission is to create a playful and engaging environment where children can learn and grow at
                    their own pace.
                </p>
                <ul className="space-y-4">
                    <li className="text-lg text-gray-600">
                        🌟 <span className="font-semibold">Curiosity:</span> We inspire children to ask questions, explore their world, and never stop learning.
                    </li>
                    <li className="text-lg text-gray-600">
                        🌟 <span className="font-semibold">Respect:</span> Every child and family is treated with respect, dignity, and kindness.
                    </li>
                    <li className="text-lg text-gray-600">
                        🌟 <span className="font-semibold">Joy of Learning:</span> Learning should be fun, engaging, and enjoyable.
                    </li>
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="bg-teal-500 rounded-lg shadow-lg p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Join EduKids Family</h2>
                <p className="text-lg mb-6">
                    Ready to give your child the best start in life? Enroll today and watch them thrive in a loving,
                    stimulating environment!
                </p>
                <Link to = "/Contact">
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-3xl">
                    Contact Us
                </button>
                </Link>
            </section>
        </div>
    );
};

export default AboutUs;
