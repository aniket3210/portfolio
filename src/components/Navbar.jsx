import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-blue-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo and Name */}
        <a href="#home" className="flex items-center space-x-2">
          <div className="bg-white text-blue-900 w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl">
            <img
              src="/portfolio/logo.png"
              alt="logo"
              className="rounded-full border-2 w-10 h-10"
            />
          </div>
          <span className="md:block text-lg font-semibold text-white">
            Aniket Hedau
          </span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-white hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#workExperience"
              className="text-white hover:text-yellow-300"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-yellow-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-yellow-300">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#tech-updates"
              className="text-white hover:text-yellow-300"
            >
              Tech Updates
            </a>
          </li>
          <li>
            <a href="#contactMe" className="text-white hover:text-yellow-300">
              Connect With Me
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 px-4 pb-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#workExperience"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#tech-updates"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Tech Updates
              </a>
            </li>
            <li>
              <a
                href="#contactMe"
                onClick={toggleMenu}
                className="block text-white hover:text-yellow-300"
              >
                Connect With Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
