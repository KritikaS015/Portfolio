import React from "react";
import Card from "../../components/cards/ProjectCard";
import carimage from "../../assets/car.webp";
import food from "../../assets/food.webp";
import school from "../../assets/school.webp";

export default function Projects() {
  return (
    <>
      <div
        className="bg-cover bg-center text-center text-white py-10 bg-black"
        id="skills"
      >
        <div className="relative mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="p-1 text-xl md:text-4xl -mt-6 md:mt-0 font-bold text-center mb-10 text-transparent bg-clip-text text-white">
            Projects
          </h2>
          <div className="absolute inset-x-0 top-[-18px] md:top-[-2px] flex justify-center">
            <h1 className="mt-7 md:mt-0 text-[12vw] md:text-[8vw] sm:text-[6vw] text-white/10 font-extrabold text-center">
              Projects
            </h1>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 sm:gap-x-0 gap-y-8 pt-12 md:pt-16 md:mt-16">
            <Card
              description="School Management System"
              details="A School Management System using the MERN stack provides a comprehensive platform for managing student data, attendance, grades, and communication between teachers, students, and parents."
              image={school}
              link="https://github.com/KritikaS015/School-Management-System"
            />
            <Card
              description="Vehicle Sales Tracker"
              details="A Vehicle Sales Tracker is a system that monitors and manages vehicle sales transactions, inventory, and customer details to streamline the sales process and provide insights into sales performance."
              image={carimage}
              link="https://github.com/KritikaS015/Vehicle-Sales-Tracker"
            />
            <Card
              description="Online Food Ordering System"
              details="An Online Food Order System enables customers to browse menus, place orders, and make payments online, while restaurants manage orders, track deliveries, and handle customer interactions through a digital platform."
              image={food}
              link="https://up-wala.vercel.app/"
            />
          </div>
        </div>
        <p className="mt-4 text-xl font-bold">For more Projects</p>
        <a
          href="https://github.com/KritikaS015"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4 md:mr-5 ">
            Github
          </button>
        </a>
      </div>
    </>
  );
}
