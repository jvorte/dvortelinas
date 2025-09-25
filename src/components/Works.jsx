import React from "react";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <div name="work" className="w-full min-h-screen text-gray-800 pt-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section header */}
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-800 border-orange-500">
            {t("projects")}
          </p>
          <p className="py-5 text-2xl text-gray-800">{t("subProjects")}</p>
        </div>

        <div className="pb-4 grid sm:grid-cols-2 md:grid-cols-1 gap-4">

          {/* Project 1 */}
          <a
            href="https://linkroom.pro/"
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 max-w-4xl mx-auto overflow-hidden"
          >
            {/* Image */}
            <img
              src="/projects/linkroom.jpg"
              alt="Link Room"
              className="w-full h-64 md:h-auto md:w-80 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-1">
              {/* Title & Description */}
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">
                  Link Room
                </h5>
                <p className="text-base font-medium text-gray-800 mb-4 line-clamp-6">
                    {t('project1')}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-white bg-blue-500 px-2 py-1 rounded">
                  Laravel 12
                </span>
                <span className="text-white bg-purple-500 px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="text-white bg-green-500 px-2 py-1 rounded">
                  React Components
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Authentication
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Profile Management
                </span>
                <span className="text-white bg-indigo-500 px-2 py-1 rounded">
                  De/En
                </span>
                <span className="text-white bg-pink-500 px-2 py-1 rounded">
                  Responsive Design
                </span>
                <span className="text-white bg-yellow-500 px-2 py-1 rounded">
                  Smooth Scrolling
                </span>
                <span className="text-white bg-teal-500 px-2 py-1 rounded">
                  API Integration
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://linkroom.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Visit
                  </button>
                </a>
                <a
                  href="https://github.com/jvorte/linkroom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </a>

          {/* Project 2 - Meine Anzeigen */}
          <a
            href="https://meineanzeigen.pro/"
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 max-w-4xl mx-auto overflow-hidden"
          >
            {/* Image */}
            <img
              src="/projects/meine-anzeigen.jpg"
              alt="Meine Anzeigen"
              className="w-full h-64 md:h-auto md:w-80 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-1">
              {/* Title & Description */}
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">
                  Meine Anzeigen
                </h5>
               <p className="text-base font-medium text-gray-800 mb-4 line-clamp-6">
                 {t('project2')}
                </p>
              </div>

              {/* Technologies (προαιρετικά) */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-white bg-blue-500 px-2 py-1 rounded">
                  Laravel 12
                </span>
                <span className="text-white bg-purple-500 px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="text-white bg-green-500 px-2 py-1 rounded">
                  React Components
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Authentication
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Profile Management
                </span>
                <span className="text-white bg-indigo-500 px-2 py-1 rounded">
                  De/En
                </span>
                <span className="text-white bg-pink-500 px-2 py-1 rounded">
                  Responsive Design
                </span>
                <span className="text-white bg-yellow-500 px-2 py-1 rounded">
                  Smooth Scrolling
                </span>
                <span className="text-white bg-teal-500 px-2 py-1 rounded">
                  SEO Optimized
                </span>
                <span className="text-white bg-red-500 px-2 py-1 rounded">
                  API Integration
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://meineanzeigen.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Visit
                  </button>
                </a>
                <a
                  href="https://github.com/jvorte/meine-anzeigen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </a>



      {/* Project 3 - Dashboard */}
          <a
            href="https://green-chamois-604233.hostingersite.com/login"
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 max-w-4xl mx-auto overflow-hidden"
          >
            {/* Image */}
            <img
              src="/projects/dashboard.jpg"
              alt="Meine Anzeigen"
              className="w-full h-64 md:h-auto md:w-80 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-1">
              {/* Title & Description */}
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">
                Admin Dashboard
                </h5>
               <p className="text-base font-medium text-gray-800 mb-4 line-clamp-6">
                 {t('project3')}
                </p>
              </div>

              {/* Technologies () */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-white bg-blue-500 px-2 py-1 rounded">
                  Laravel 12
                </span>
                <span className="text-white bg-purple-500 px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="text-white bg-green-500 px-2 py-1 rounded">
                  React Components
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Authentication
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Profile Management
                </span>
           
                <span className="text-white bg-pink-500 px-2 py-1 rounded">
                  Responsive Design
                </span>
        
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://green-chamois-604233.hostingersite.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Visit
                  </button>
                </a>
                <a
                  href="https://github.com/jvorte/laravel-order-invoice-tool/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </a>


               {/* Project 4 - Dashboard */}
          <a
            href="https://servicesdb.site/login"
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 max-w-4xl mx-auto overflow-hidden"
          >
            {/* Image */}
            <img
              src="/projects/servicesDb.jpg"
              alt="Meine Anzeigen"
              className="w-full h-64 md:h-auto md:w-80 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-1">
              {/* Title & Description */}
              <div>
                <h5 className="text-2xl font-bold text-gray-900 mb-2">
                ServicesDb
                </h5>
             <p className="text-base font-medium text-gray-800 mb-4 line-clamp-6">
                 {t('project4')}
                </p>
              </div>

              {/* Technologies () */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-white bg-blue-500 px-2 py-1 rounded">
                  Laravel 12
                </span>
                <span className="text-white bg-purple-500 px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="text-white bg-green-500 px-2 py-1 rounded">
                  React Components
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Authentication
                </span>
                <span className="text-white bg-gray-700 px-2 py-1 rounded">
                  Profile Management
                </span>
           
                <span className="text-white bg-pink-500 px-2 py-1 rounded">
                  Responsive Design
                </span>
        
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://servicesdb.site/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Visit
                  </button>
                </a>
                <a
                  href="https://github.com/jvorte/servicesDb/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-white text-gray-700 font-bold rounded shadow hover:bg-gray-100 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </a>


          {/* Project 4 */}

          {/*projects 5 */}

          {/* Project 6 */}

          {/* Project 7 */}

          {/* Project 8 */}

          {/* end of projects */}
        </div>
      </div>
    </div>
  );
};

export default Works;
