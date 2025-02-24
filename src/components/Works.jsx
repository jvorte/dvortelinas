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
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Weather App with Tailwind CSS & JavaScript</p>
                <p className="text-center line-clamp-3 text-center">
                  A simple weather app built with JavaScript and styled with Tailwind CSS. It fetches real-time weather data from
                  a public API, providing users with temperature, humidity, and conditions for any city.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightpink-peafowl-874363.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/weather-forecast-app">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
         style={{ backgroundImage: `url('/projects/crud.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">PHP & React.js CRUD Application</p>
                <p className="text-center line-clamp-3 text-center">
                PHP & React.js CRUD Application This repository contains a simple CRUD (Create, Read, Update, Delete)
                 application built using PHP for the backend and React.js for the frontend.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightgray-stinkbug-893714.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/PHP-React.js-CRUD">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
             style={{ backgroundImage: `url('/projects/eshop.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">ReactShop</p>
                <p className="text-center line-clamp-3 text-center">
                This is a simple e-commerce web application built with React. The application 
                allows users to browse products, add them to the cart, and proceed to checkout.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://navajowhite-narwhal-391117.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/ReactShop">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div
          style={{ backgroundImage: `url('/projects/veterinary.jpg')` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Veterinary</p>
                <p className="text-center line-clamp-3 text-center">
                A simple and efficient appointment booking system where only customers can schedule appointments.

                 Built with PHP and SQL, this project ensures a smooth and reliable booking experience.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://limegreen-alpaca-415646.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/Veterinary-php_ap-/tree/master">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*projects 5 */}

          <div
            style={{ backgroundImage: `url('/projects/training.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Dog Training</p>
                <p className="text-center line-clamp-3 text-center">
                A user-friendly platform offering dog training services with a focus on building strong, positive relationships 
                between dogs and their owners. The site features personalized training plans and an easy-to-navigate interface.
             
               
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://snow-hyena-132513.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/dog_training/tree/master">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}

          <div
            style={{ backgroundImage: `url('/projects/portal.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">User Login Portal</p>
                <p className="text-center line-clamp-3 text-center">
                A secure and simple login portal where users can access their accounts by entering a 
                username and password. The platform also offers password recovery and account creation options. 
                Designed with user experience in mind, it ensures easy access and interaction for both new and returning users. 
                Ideal for applications requiring secure user authentication.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lightcyan-crocodile-961873.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/myportal/tree/master">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 7 */}

          <div
            style={{ backgroundImage: `url('/projects/hair.jpg')` }}
            className="card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover bg-center h-65"
          >
            {/* Hover content */}
            <div className="opacity-0 group-hover:opacity-100 m-8 flex justify-center items-center flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                <p className="text-white">Hair-Studio</p>
                <p className="text-center line-clamp-3 text-center">
                Hair Studio is a simple, single-page website built with React. This website is designed for a hair salon, 
                showcasing the services, contact information, 
                and a brief introduction to the salon. It aims to provide an elegant and responsive user experience for visitors.
                </p>
              </div>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://lemonchiffon-wombat-119714.hostingersite.com/">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
                <a href="https://github.com/jvorte/Hair-Studio/tree/master">
                  <button className=" shadow-lg shadow-[#040c16]  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          {/* Project 8 */}
     

          {/* end of projects */}
        </div>
      </div>
    </div>
  );
};

export default Works;
