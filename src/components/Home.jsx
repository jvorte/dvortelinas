import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Img7 from '../assets/7.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="min-h-screen w-full pt-24">
      {/* flex-col-reverse για κινητά: εικόνα πάνω, μετά κείμενο */}
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-stretch justify-center h-full px-4">

        {/* Left side (text) */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            {t('homeTitle')}
          </h2>
          <h3 className="text-gray-900 py-4 max-w-md">
            {t('homeSubTitle')}
          </h3>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-800 to-slate-800 cursor-pointer"
            >
              {t('homeButton')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right side (image) */}
        <div className="mb-12 w-80 mx-auto md:w-[490px] md:h-[580px] flex-shrink-0">
          <img
            src={Img7}
            alt="Dimitrios Vortelinas - Developer Portrait"
            className="w-full h-auto md:h-full object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
};


export default Home;
