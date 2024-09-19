import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-green-50 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800 py-10">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold text-orange-700">EduKid</h1>
                            <p className="text-sm text-gray-600">Making learning fun</p>
                        </div>
                        <div>
                            <p className="text-md font-medium">
                                It is our goal to provide age-appropriate opportunity for every child enrolled in EduKid Kids Club enrichment classes.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                        <h2 className="font-bold text-xl">Quick Links</h2>
                        <ul className="space-y-1 text-center">
                            <li><Link to="/About" className="hover:underline">About</Link></li>
                            <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/Programs" className="hover:underline">Programs</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                        <ul className="space-y-2 text-center ">
                            <li><Link to="#recently" className="hover:underline">Recently Viewed</Link></li>
                            <li><Link to="/News" className="hover:underline">News Programs</Link></li>
                            <li><Link to="#curriculum" className="hover:underline">Curriculums</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-1 text-center">
                        <div>
                            <p className="text-md font-semibold">Westlands Building,</p>
                            <p className="text-md">Kirti Nagar, New Delhi</p>
                        </div>
                        <div>
                            <p className="text-md">+91-9835274566</p>
                        </div>
                        <div>
                            <p><a href="mailto:edukidsupport@gmail.com" className="hover:underline text-md">edukidsupport@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
