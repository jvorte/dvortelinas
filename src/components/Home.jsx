
// Import required components and assets
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { Link } from "react-scroll"; // For smooth scrolling
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
 return (
   // Main container - full screen with dark background
   <div name="home" className="h-screen w-full pt-22">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         <h1></h1> 
         <h2 className="text-4xl sm:text-7xl font-bold text-black">
         {t('homeTile')}
         </h2>
         {/* Brief introduction */}
         <p className="text-gray-500 py-4 max-w-md">
         {t('homeSubTitle')}
         </p>
         {/* About Me button with hover effect */}
         <div>
           <Link
             to="about"
             smooth
             duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
           >
             {t('homeButton')}
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight size={25} className="ml-3" />
             </span>
           </Link>
         </div>
       </div>
       {/* Right side - Profile image */}
       <div className='mb-4 rightImg'>
      <img src="/src/assets/8.png" alt="desk" />
       </div>
     </div>
   </div>

  
 );
};

export default Home;
