import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Admin login state
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Handle scroll visibility
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Check for token on initial render and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const adminToken = localStorage.getItem('adminToken'); // Replace with real token logic
      if (adminToken) {
        setIsAdminLoggedIn(true);
      } else {
        setIsAdminLoggedIn(false);
      }
    };

    // Check when component mounts
    checkLoginStatus();

    // Listen for changes in localStorage (when login state changes)
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Clear admin token and navigate to home page
    localStorage.removeItem('adminToken'); // Replace with real logout logic
    setIsAdminLoggedIn(false);
    navigate('/'); // Navigate to home or login page
    window.dispatchEvent(new Event('storage')); // Notify components that the token has been removed
  };

  // Check if the current route requires logout button
  const showLogoutButton = ['/admin-dashboard', '/NewsAdmin', '/RegistrationAdmin'].includes(location.pathname);

  return (
    <header className="bg-teal-500 text-white flex ">
      <div className="container mx-auto flex justify-between items-center py-3 px-5 flex-1">
        <div className="flex items-center">
          <Link to={'/'}>
            <img
              src="../../Images/Logo.png"
              alt="EduKid Logo"
              className="w-13 h-11 rounded-xl"
            />
          </Link>
          <div className="ml-2">
            <h1 className="text-2xl font-bold text-green-700">EduKids</h1>
            <p className="text-xs text-black">Making learning fun</p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 font-medium navbarVisible ? 'top-0' : '-top-24">
          <Link to="/About" className="hover:text-pink-200 transition-colors">
            About
          </Link>
          <Link to="/Programs" className="hover:text-pink-200 transition-colors">
            Programs
          </Link>
          <Link to="/News" className="hover:text-pink-200 transition-colors">
            News
          </Link>
          <Link to="/Contact" className="hover:text-pink-200 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {(isAdminLoggedIn && showLogoutButton) ? (
            <button
              onClick={handleLogout}
              className="bg-red-200 text-red-600 py-2 px-4 rounded-full hover:bg-red-300"
            >
              Logout
            </button>
          ) : (
            <button className="bg-orange-200 text-orange-600 py-2 px-4 rounded-full hover:bg-orange-300">
              <Link to="/ApplyNow">Apply Now</Link>
            </button>
          )}

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
