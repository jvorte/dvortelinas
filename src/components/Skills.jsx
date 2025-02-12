import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
const Skills = () => {
    const { t } = useTranslation();
  return (
    <div name='skills' className='w-full min-h-screen bg-gray-100 text-gray-800 py-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>{t('skills')}</p>
          <p className='py-4 text-2xl'>{t('subSkills')}</p>
        </div> 

        <div className='skills w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='hover:scale-110 duration-500'>
            <img src="/html-5.svg" alt="HTML" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/css-3.svg" alt="CSS" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/php.svg" alt="PHP" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/mysql.svg" alt="MySQL" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/js.svg" alt="JavaScript" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/laravel.svg" alt="Laravel" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/reactjs.svg" alt="React" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/node-js.svg" alt="Node.js" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/tailwind.svg" alt="Tailwind CSS" className="w-20 h-20 mx-auto" />
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src="/github.svg" alt="GitHub" className="w-20 h-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
