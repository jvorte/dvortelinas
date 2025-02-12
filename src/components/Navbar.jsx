import React, { useState } from 'react';
import { FaBars, FaTimes, FaGitSquare, FaLinkedin ,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";


  const Navbar = () => {
    
  const { t, i18n } = useTranslation();
  const [nav, setNav] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const handleClick = () => setNav(!nav);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageDropdown(false); // Κλείσιμο dropdown μετά την επιλογή
  
  
  };

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-5 bg-[#2B2C30] text-lg text-white z-50">
      <div>
        <h1 className="font-thin text-2xl italic font-serif"></h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t('navHome')}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
          {t('navAbout')}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
          {t('navSkills')}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
          {t('navProjects')}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
          {t('navConatact')}
          </Link>
        </li>
        {/* Language Dropdown for Desktop */}
        <li className="relative">
          <button
            onClick={() => setLanguageDropdown(!languageDropdown)}
            className="bg-gray-700 px-4 py-2 rounded-md"
          >
            <GrLanguage />
          </button>
          {languageDropdown && (
            <ul className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => changeLanguage('en')}
              >
                En
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => changeLanguage('de')}
              >
                De
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-50 cursor-pointer">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#2B2C30] flex flex-col justify-center items-center transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          {t('navHome')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          {t('navAbout')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          {t('navSkills')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          {t('navProjects')}          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          {t('navConatact')}
          </Link>
        </li>

        {/* Language Dropdown for Mobile */}
        <li className="py-6 text-4xl">
          <div className="relative">
            <button
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="bg-gray-700 px-4 py-2 rounded-md text-xl"
            >
              <GrLanguage />
            </button>
            {languageDropdown && (
              <ul className="absolute top-12 left-0 bg-gray-800 text-white rounded-md shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage('en')}
                >
                  En
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => changeLanguage('de')}
                >
                  De
                </li>
              </ul>
            )}
          </div>
        </li>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/dimitris-vortelinas-757025269/"
            className="text-3xl text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jvorte"
            className="text-3xl text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitSquare />
          </a>
          <a href="/Contact" className="text-3xl text-rose-500 hover:text-rose-600">
            <HiOutlineMail />
          </a>
        </div>
      </ul>

      {/* Social Icons (Left Side) */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg">
            <a
              href="https://www.linkedin.com/in/dimitris-vortelinas-757025269/"
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              LinkedIn <FaLinkedin size={35} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-700 rounded-lg">
            <a
              href="https://github.com/jvorte"
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              GitHub <FaGitSquare size={35} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600 rounded-lg">
            <a href="/Contact" className="flex justify-between items-center w-full text-gray-300 px-4">
              Mail <HiOutlineMail size={35} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
