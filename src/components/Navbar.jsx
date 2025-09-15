import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaGithub,  FaEnvelope } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { House,LibraryBig , Cpu,FolderKanban, SquareUserRound } from 'lucide-react';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdown(false);
  };

  // Μενού αντικείμενα με label, to (scroll target) και icon React component
  const menuItems = [
    { to: "home", label: t("navHome"), icon: <House />},
    { to: "about", label: t("About me"), icon: <LibraryBig /> },
    { to: "skills", label: t("navSkills"), icon: <Cpu /> },
    { to: "work", label: t("navProjects"), icon: <FolderKanban />},
    { to: "contact", label: t("Contact"), icon: <SquareUserRound /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-5 text-gray-800">

        {/* Logo */}
        <div className="text-2xl font-serif italic font-thin cursor-pointer" onClick={() => scroll.scrollToTop()}>
       {/* logo */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg">
          {menuItems.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-amber-500 font-bold border-b-2 border-amber-500"
                className="flex items-center gap-2 cursor-pointer hover:text-amber-500 transition"
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}

          {/* Language selector */}
          <li className="relative">
    <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center px-6 py-3 rounded-md  transition"
          >
            <GrLanguage size={24} />
            <span className="ml-2">{i18n.language.toUpperCase()}</span>
          </button>
          {langDropdown && (
            <ul className="mt-2 bg-gray-800 text-white rounded-md shadow-lg w-32 mx-auto">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                onClick={() => changeLanguage("en")}
              >
                English
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                onClick={() => changeLanguage("de")}
              >
                Deutsch
              </li>
            </ul>
          )}
        </li>
      </ul>

        {/* Hamburger for mobile */}
        <div className="md:hidden z-50 cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
   <ul
  className={`md:hidden fixed top-0 left-0 w-full h-screen text-white sm:text-amber-500 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center text-3xl gap-10 transform transition-transform duration-300 ${
    navOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
        {menuItems.map(({ to, label, icon }) => (
          <li key={to}>
            <Link
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(false)}
              activeClass="text-amber-400 font-bold"
              className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition "
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}

        {/* Language selector mobile */}
        <li className="mt-8">
          <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center px-6 py-3 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition"
          >
            <GrLanguage size={24} />
            <span className="ml-2">{i18n.language.toUpperCase()}</span>
          </button>
          {langDropdown && (
            <ul className="mt-2 bg-gray-800 text-white rounded-md shadow-lg w-32 mx-auto">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                onClick={() => changeLanguage("en")}
              >
                English
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                onClick={() => changeLanguage("de")}
              >
                Deutsch
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Social Icons fixed left */}
      <div className="hidden lg:flex fixed top-[35%] left-0 flex-col space-y-3 z-50">
        <a
          href="https://www.linkedin.com/in/dimitris-vortelinas-757025269/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-40 h-14 bg-blue-600 text-white rounded-r-lg px-4 hover:bg-blue-700 transition ml-[-130px] hover:ml-0 duration-300"
        >
          LinkedIn <FaLinkedin size={30} className="ml-auto" />
        </a>
        <a
          href="https://github.com/jvorte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-40 h-14 bg-gray-800 text-white rounded-r-lg px-4 hover:bg-gray-900 transition ml-[-130px] hover:ml-0 duration-300"
        >
          GitHub <FaGithub size={30} className="ml-auto" />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="flex items-center w-40 h-14 bg-red-600 text-white rounded-r-lg px-4 hover:bg-red-700 transition ml-[-130px] hover:ml-0 duration-300"
        >
          Gmail <FaEnvelope size={30} className="ml-auto" />
        </a>
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="fixed bottom-6 right-6 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
