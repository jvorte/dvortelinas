import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 py-20"
    >
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center items-center h-full">
        
        {/* Title */}
        <div className="w-full text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold inline border-b-4 border-orange-500">
            {t('homeButton')}
          </h2>
        </div>

        {/* Content */}
        <div className="w-full grid sm:grid-cols-2 gap-10">
          
          {/* Left side */}
          <div className="text-2xl sm:text-4xl font-semibold text-center sm:text-right text-gray-800 leading-snug">
            <p>{t('aboutmeL')}</p>
          </div>
          
          {/* Right side */}
          <div className="text-base sm:text-lg leading-relaxed text-gray-700">
            <p className="mb-4">{t('aboutmeR')}</p>
            <ul className="list-disc list-inside space-y-2 font-medium text-gray-800">
              <li>{t('aboutmeR1')}</li>
              <li>{t('aboutmeR2')}</li>
              <li>{t('aboutmeR3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
