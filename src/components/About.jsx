import React from "react";
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  return (
    <div name="about" id="about" className="w-full min-h-screen text-gray-800 pt-20">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
            <div className="text-center sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              {t('homeButton')}
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="text-center sm:text-right text-4xl font-bold">
              <p>
             {t('aboutmeL')}
              </p>
            </div>
            <div>
              <p>
            {t('aboutmeR')}
              </p>
              <ul className="list-disc mt-3">
                <li>
                {t('aboutmeR1')}
                </li>
                <li>
                {t('aboutmeR2')}
                </li>
                <li>
                {t('aboutmeR3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
