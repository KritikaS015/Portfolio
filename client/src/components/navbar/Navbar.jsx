import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center h-[8vh] bg-[#001f3f] sticky top-0 z-10">
      <div className="flex items-center h-full px-4 md:px-8 lg:px-12">
        <i
          className="bi bi-list text-white text-2xl font-bold cursor-pointer md:hidden"
          onClick={toggleMenu}
        ></i>
        <span className="ml-4 text-white font-bold text-2xl md:text-4xl ">
          {props.title}
        </span>
      </div>
      <div
        className={`md:flex md:items-center md:space-x-8 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-x-8 cursor-pointer">
          <li className="relative group">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              className="text-white text-lg font-semibold capitalize relative"
            >
              {props.home}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute -top-[0.5] left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 "></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              className="text-white text-lg font-semibold capitalize relative"
            >
              About
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute -top-[0.5] left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              className="text-white text-lg font-semibold capitalize relative"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute -top-[0.5] left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              className="text-white text-lg font-semibold capitalize relative mr-8"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute -top-[0.5] left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
