import React from "react";

import imageSite from "../projects/imageSite.JPG"; // Adjust the relative path
import weatherJs from "../projects/weatherJs.JPG"; // Adjust the relative path


const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 mobile-padding ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section header */}
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>

        {/* Project 1 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Project card with hover overlay */}
          <div
            style={{ backgroundImage: `url(${imageSite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio/blob/main/README.md">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
       
{/* project2 */}
          <div
            style={{ backgroundImage: `url(${weatherJs})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app?tab=readme-ov-file">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
{/* project 3 */}

<div
            style={{ backgroundImage: `url(${imageSite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 4 */}

          <div
            style={{ backgroundImage: `url(${imageSite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 5 */}
          <div
            style={{ backgroundImage: `url(${imageSite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project 6  */}

          <div
            style={{ backgroundImage: `url(${imageSite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-white tracking-wider">
                Project Title
              </span>
              <p className="text-center">Project description</p>

              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
{/* 
          end projects */}
       
        </div>
      </div>
    </div>
  );
};

export default Works;
