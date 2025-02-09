
import React from 'react';
import { FaHtml5 } from "react-icons/fa";



const Skills = () => {
  return (
    // Main container with dark background
    <div name='skills' className='w-full h-screen bg-[] text-gray-800'>
      {/* Content wrapper with max width and centering */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          {/* Header section with title and intro */}
          <div className='w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          {/* Skills grid - responsive layout with hover effects */}
          <div className='skills w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

              {/* Individual skill cards with shadow and scale animation */}

              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p> 
              </div> */}
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4 '> <img src="public\html-5.svg" alt=""  /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'>  <img src="public\css-3.svg" alt="" /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\php.svg" alt=""  /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\mysql.svg" alt=""  /></p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\js.svg" alt="" /></p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\laravel.svg" alt="" /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\reactjs.svg" alt="" /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\node-js.svg" alt="" /></p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\tailwind.svg" alt="" /></p>
              </div>
              <div className=' hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\github.svg" alt="" /></p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <p className='my-4'><img src="public\js.svg" alt="" /></p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
