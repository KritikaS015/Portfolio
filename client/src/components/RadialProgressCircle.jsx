import React from "react";

const RadialProgressCircle = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div
        className="radial-progress relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-800 text-white"
        style={{
          "--value": 0, // Start from 0 for animation
          borderRadius: "50%",
          width: "6rem",
          height: "6rem",
          background: `conic-gradient(#4b9cd3 var(--value)%, transparent 0)`,
        }}
        data-value={value}
      >
        <span className="absolute text-xl font-bold">0%</span>
      </div>
      <p className="mt-4 text-lg">{label}</p>
    </div>
  );
};

export default RadialProgressCircle;
