import React from 'react';
import { useTranslation } from 'react-i18next';

const skills = [
  { src: '/html-5.svg', alt: 'HTML' },
  { src: '/css-3.svg', alt: 'CSS' },
  { src: '/php.svg', alt: 'PHP' },
  { src: '/mysql.svg', alt: 'MySQL' },
  { src: '/js.svg', alt: 'JavaScript' },
  { src: '/laravel.svg', alt: 'Laravel' },
  { src: '/reactjs.svg', alt: 'React' },
  { src: '/node-js.svg', alt: 'Node.js' },
  { src: '/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/github.svg', alt: 'GitHub' },
  { src: '/bootstrap.svg', alt: 'Bootstrap' },
  { src: '/docker.svg', alt: 'Docker' },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 py-20"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="w-full text-center mb-12">
          <h2 className="text-5xl sm:text-4xl font-extrabold border-b-4 border-orange-500 inline-block mb-4">
            {t('skills')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 font-medium">
            {t('subSkills')}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4 flex flex-col items-center justify-center"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-16 h-16 mb-2"
              />
              <span className="text-base font-semibold text-gray-900">
                {skill.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
