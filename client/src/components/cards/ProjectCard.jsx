import React from "react";

function ProjectCard({ title, description, details, image, link }) {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg overflow-hidden cursor-pointer group">
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Card Title */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="text-2xl text-white font-bold">{title}</h3>
      </div>

      {/* Animated Text (Description) */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-80 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0`}
      >
        <div className="relative">
          <p className="text-white text-lg">{description}</p>
          <span className="absolute -top-[0.5] left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <p className="text-white text-sm pt-2">{details}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 inline-flex cursor-pointer items-center text-sm font-semibold border-solid border-white border-2 p-1 hover:text-cyan-400 hover:bg-black rounded text-white transform transition-transform duration-300 hover:scale-105">
              View Project &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
