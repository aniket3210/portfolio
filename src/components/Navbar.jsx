import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full navbar shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="flex items-center space-x-2">
          <div className="bg-white text-blue-900 w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl">
            <img
              src="/portfolio/logo.png"
              alt="logo"
              className="rounded-full border-2 w-15 h-15"
            />
          </div>
          <span className="hidden md:block text-xl font-semibold text-white">
            Aniket Hedau
          </span>
        </a>
        <ul className="flex space-x-6">
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
    </nav>
  );
}

export default Navbar;
