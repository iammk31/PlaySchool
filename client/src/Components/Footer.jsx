import React from 'react';

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
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#courses" className="hover:underline">Courses</a></li>
                            <li><a href="#shop" className="hover:underline">Shop</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                            <li><a href="#blog" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                        <ul className="space-y-2 text-center ">
                            <li><a href="#recently" className="hover:underline">Recently Viewed</a></li>
                            <li><a href="#programs" className="hover:underline">New Programs</a></li>
                            <li><a href="#curriculum" className="hover:underline">Curriculums</a></li>
                            <li><a href="#career" className="hover:underline">Career</a></li>
                            <li><a href="#school" className="hover:underline">School Stuff</a></li>
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
