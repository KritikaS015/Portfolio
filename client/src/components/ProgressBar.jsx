import React, { useState, useEffect } from "react";

function ProgressBar({ label, value }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const targetWidth = parseInt(value);
    let currentWidth = 0;
    const interval = setInterval(() => {
      if (currentWidth < targetWidth) {
        currentWidth++;
        setWidth(currentWidth);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="relative mb-4">
      <div className="flex items-center mb-1">
        <span className="text-white">{label}</span>
        <span className="ml-2 text-white">{value}</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-700 to-white h-full absolute top-0 left-0"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
