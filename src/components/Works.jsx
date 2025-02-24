import React from "react";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <div name="work" className="w-full min-h-screen text-gray-800 pt-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section header */}
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-800 border-cyan-500">
            {t("projects")}
          </p>
          <p className="py-5 text-2xl text-gray-800">{t("subProjects")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">


          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
         style={{ backgroundImage: `url('/projects/crud.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightgray-stinkbug-893714.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/PHP-React.js-CRUD">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
             style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
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

          {/* Project 4 */}
          <div
          style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
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

          {/*projects 5 */}

          <div
            style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}

          <div
            style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 7 */}

          <div
            style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          {/* Project 8 */}
          <div
            style={{ backgroundImage: `url('/projects/weather.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-64"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* end of projects */}
        </div>
      </div>
    </div>
  );
};

export default Works;
