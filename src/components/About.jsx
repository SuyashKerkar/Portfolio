import React from "react";
import Heroimg from "../assets/my image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Heroimg}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Passionate and driven professional aiming to build a career with a
              dynamic organization. Eager to embrace challenges, demonstrate
              skills, acquire new knowledge, and contribute to both
              organizational success and personal growth.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <label
                  htmlFor="htmlandcss"
                  className="w-full md:w-2/12 text-sm md:text-base mb-2 md:mb-0"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <label
                  htmlFor="htmlandcss"
                  className="w-full md:w-2/12 text-sm md:text-base mb-2 md:mb-0"
                >
                  JAVASCRIPT
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <label
                  htmlFor="htmlandcss"
                  className="w-full md:w-2/12 text-sm md:text-base mb-2 md:mb-0"
                >
                  REACT JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <label
                  htmlFor="htmlandcss"
                  className="w-full md:w-2/12 text-sm md:text-base mb-2 md:mb-0"
                >
                  TAILWIND
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 justify-center text-center md:justify-between">
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2
                </h3>
                <p>Internships</p>
              </div>
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5
                </h3>
                <p>Incubations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
