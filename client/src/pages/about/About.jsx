import React from "react";
import mernimage from "../../assets/KRITIKA_PHOTO.jpg";

function About() {
  return (
    <>
      <div
        className="bg-cover bg-center text-center text-white py-10 bg-black relative"
        id="about"
      >
        <div className="container mx-auto md:-mt-8 px-8 md:px-16 lg:px-24 relative">
          {/* "About me" heading */}
          <h2 className=" text-xl md:text-4xl -mt-6 md:mt-0 font-bold text-center mb-16 text-transparent bg-clip-text text-white">
            About me
          </h2>
          <div className="absolute inset-x-0 top-[-20px] md:top-[-0px] flex justify-center ">
            <h1 className="mt-5 md:mt-0 text-[12vw] md:text-[8vw] sm:text-[6vw] text-white/10 font-extrabold text-center">
              About
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={mernimage}
              alt="Kritika Photo"
              className="w-60 h-60 rounded-full text-justify border-4 border-white object-cover mb-8 md:mb-0 md:mt-12 mx-auto p-4"
            />

            <div className="flex-1 md:ml-16">
              <p className=" mb-8 text-center md:mt-16 font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#5B99C2] to-white">
                Full Stack Developer
              </p>
              <p className=" text-justify">
                I am a dedicated Computer Science student with a passion for web
                development and a solid technical foundation in full stack
                tools. My hands-on experience in building real-world
                applications during my internships and academic projects has
                equipped me with the ability to develop and maintain responsive,
                user-friendly web platforms. As a Web Development Intern at
                InternPe, I gained practical experience by creating an
                e-commerce platform and interactive games, ensuring cross-device
                compatibility to enhance the user experience. In addition to my
                internships, I've led and collaborated on academic projects like
                a vehicle sales tracking website and a student management system
                using the MERN stack, which were recognized for their innovative
                features and seamless user interfaces. My involvement in
                hackathons and hosting web development events reflects my
                enthusiasm for staying updated with the latest technologies and
                contributing to the tech community.
              </p>
              <button className="bg-gradient-to-r from-green-400  to-blue-400 text-black font-bold  transform transition-transform duration-300 hover:scale-105 px-4 py-2  rounded-full mt-4 md:mr-12 ">
                More About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
