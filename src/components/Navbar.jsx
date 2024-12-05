import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Suyash Kerkar</div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Connect Button (Desktop) */}
        <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="#contact">Connect With Me</a>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white space-y-4 py-4">
          <a
            href="#home"
            className="block px-4 py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href="#service"
            className="block px-4 py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#project"
            className="block px-4 py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
