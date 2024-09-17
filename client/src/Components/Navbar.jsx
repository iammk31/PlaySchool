import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (

    <header className="bg-teal-500 text-white flex ">

      <div className="container mx-auto flex justify-between items-center py-3 px-5 flex-1">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src="../../Images/Logo.png"
              alt="EduKid Logo"
              className="w-13 h-11 rounded-xl"
            />
          </Link>
          <div className="ml-2">
            <h1 className="text-2xl font-bold text-green-700">EduKid</h1>
            <p className="text-xs text-black">Making learning fun</p>
          </div>
        </div>


        <nav className="hidden md:flex space-x-6 font-medium navbarVisible ? 'top-0' : '-top-24">
          <Link to="#about" className="hover:text-pink-200 transition-colors">
            About
          </Link>
          <Link
            to="/Programs"
            className="hover:text-pink-200 transition-colors"
          >
            Programs
          </Link>
          <Link to="#shops" className="hover:text-pink-200 transition-colors">
            Shops
          </Link>
          <Link to="#news" className="hover:text-pink-200 transition-colors">
            News
          </Link>
          <Link to="/AdminDashboard" className="hover:text-pink-200 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-orange-200 text-orange-600 py-2 px-4 rounded-full hover:bg-orange-300">
            <Link to="/ApplyNow">
              Apply Now
            </Link>
          </button>

          <button className="block md:hidden">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
