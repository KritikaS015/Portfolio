import React from "react";

function Cards({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="mx-auto mt-6 mb-4 w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 object-contain rounded-md transform transition-transform duration-300 hover:scale-125"
      />
      <p className="text-base sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold">
        {name}
      </p>
    </div>
  );
}

export default Cards;
