import React, { useState } from 'react';
import { FaBars, FaTimes, FaGitSquare, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-5 bg-[#2B2C30] text-lg text-white z-50'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif'></h1>
      </div>

      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            My Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-50 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul className={`absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'} z-40`}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-lg'>
            <a href="https://www.linkedin.com/in/dimitris-vortelinas-757025269/" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={35} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-700 rounded-lg'>
            <a href="https://github.com/jvorte" className='flex justify-between items-center w-full text-gray-300 px-4'>
              GitHub <FaGitSquare size={35} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600 rounded-lg'>
            <a href="/Contact" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Mail <HiOutlineMail size={35} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
