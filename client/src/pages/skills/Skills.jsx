import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "../../components/ProgressBar";
import RadialProgressCircle from "../../components/RadialProgressCircle";

function Skills() {
  const [isAdditionalSkillsVisible, setIsAdditionalSkillsVisible] =
    useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillRef.current;
    const progressCircles = skillsSection.querySelectorAll(".radial-progress");
    const progressBars = skillsSection.querySelectorAll(".progress-bar");

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressCircles.forEach((circle) => {
            const targetValue = parseInt(circle.getAttribute("data-value"));
            let currentValue = 0;
            const interval = setInterval(() => {
              if (currentValue <= targetValue) {
                circle.style.setProperty("--value", currentValue);
                circle.textContent = `${currentValue}%`;
                currentValue++;
              } else {
                clearInterval(interval);
              }
            }, 20); // Adjust speed as needed
          });

          progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            let currentWidth = 0;
            const interval = setInterval(() => {
              if (currentWidth <= parseInt(targetWidth)) {
                bar.style.width = `${currentWidth}%`;
                currentWidth++;
              } else {
                clearInterval(interval);
              }
            }, 20); // Adjust speed as needed
          });

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust the threshold as needed
    });

    observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-cover bg-center text-center text-white py-10 bg-black"
      id="skills"
      ref={skillRef}
    >
      <div className="relative mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl sm:text-2xl md:text-4xl -mt-6 md:mt-0 font-bold text-center mb-10 text-transparent bg-clip-text text-white">
          Skillset
        </h2>

        {/* Background Text */}
        <div className="absolute inset-x-0 top-[-10px] md:top-[-1px] flex justify-center">
          <h1 className="mt-5 md:mt-0 text-[12vw] md:text-[8vw] sm:text-[6vw] text-white/10 font-extrabold text-center">
            Skills
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-6 md:pt-0">
          <div className="lg:w-6/12 lg:mr-8">
            <h3 className="text-2xl font-semibold mb-4 sm:mt-4 lg:mt-16 bg-clip-text text-transparent bg-gradient-to-r from-[#5B99C2] to-white">
              Professional Skillset
            </h3>
            {/* Radial Progress Circles for Skills */}
            <div className="grid grid-cols-2 gap-8 mb-12 mt-10 lg:mb-0">
              <RadialProgressCircle label="Creativity" value="90" />
              <RadialProgressCircle label="Teamwork" value="85" />
              <RadialProgressCircle label="Problem Solving" value="80" />
              <RadialProgressCircle label="Communication" value="75" />
            </div>
          </div>

          {/* Horizontal Progress Bars for Skills */}
          <div className="space-y-4 lg:w-6/12 md:mt-44 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4 -mt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#5B99C2] to-white">
              Technical Skills
            </h3>
            <ProgressBar label="Java" value="95%" />
            <ProgressBar label="Python" value="75%" />
            <ProgressBar label="HTML & CSS" value="100%" />
            <ProgressBar label="JavaScript" value="85%" />
            <ProgressBar label="ReactJS" value="85%" />
            <ProgressBar label="Node.js" value="75%" />
            <ProgressBar label="MongoDB" value="75%" />
            <ProgressBar label="MySQL" value="75%" />

            {/* Additional Skills Box */}
            <div className="relative">
              <button
                className="bg-gradient-to-r from-[#5B99C2] to-white text-black font-bold transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4 md:mr-12"
                onClick={() =>
                  setIsAdditionalSkillsVisible(!isAdditionalSkillsVisible)
                }
              >
                {isAdditionalSkillsVisible
                  ? "Hide Additional Skills"
                  : "Show More Skills"}
              </button>
              {isAdditionalSkillsVisible && (
                <div className="mt-4 space-y-4">
                  <ProgressBar label="Tailwind CSS" value="80%" />
                  <ProgressBar label="Bootstrap" value="70%" />
                  <ProgressBar label="jQuery" value="65%" />
                  <ProgressBar label="Express" value="75%" />
                  <ProgressBar label="REST API" value="85%" />
                  {/* Add more skills as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
