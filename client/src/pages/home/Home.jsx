import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import mernimage from "../../assets/1.png";
import resumePdf from "../../assets/Kritika_15Resume.pdf";

function Home() {
  // const [helloText, setHelloText] = useState(""); // Initial empty string for typing

  // // Typing effect function
  // useEffect(() => {
  //   const text = "hello me there!";
  //   let index = 0;

  //   const typingInterval = setInterval(() => {
  //     if (index < text.length) {
  //       setHelloText((prev) => prev + text.charAt(index)); // Add characters one by one
  //       index++;
  //     } else {
  //       clearInterval(typingInterval); // Stop the interval when complete
  //     }
  //   }, 160);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(typingInterval);
  // }, []); // Adding an empty dependency array so useEffect runs only once

  return (
    <div
      className="bg-cover bg-center text-center text-white bg-black py-16 overflow-x-hidden"
      id="home"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for large and medium screens */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text section */}
          <div className="text-center md:text-left md:w-1/2">
            {/* Dynamic "Hello there!" */}
            <p className="text-2xl md:text-3xl lg:text-2xl text-white">
              Hello there!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold md:mt-3">
              I'm{" "}
              <span className="text-4xl md:text-5xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 md:-mx-2">
                Kritika
              </span>
            </h1>
            {/* Mern stack developer on one line */}
            <p className="mt-2 md:mt-4 text-xl md:text-2xl lg:text-4xl text-white whitespace-nowrap">
              Mern stack developer
            </p>
            <div className="mt-8 space-x-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-black font-medium transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"
              >
                Contact Me
              </Link>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-medium transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                  Resume
                </button>
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="image-wrapper md:w-1/2 mb-8 md:mb-0">
            <img
              src={mernimage}
              alt="mernimage"
              className="mx-auto h-80 w-auto md:h-96 lg:h-[500px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
