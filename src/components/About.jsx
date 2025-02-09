import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full min-h-screen text-gray-800 pt-20">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
            <div className="text-center sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="text-center sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm a Full-Stack Developer | PHP (Laravel) → React & Node.js | 
                Passion for Scalable Web Apps.
              </p>
            </div>
            <div>
              <p>
                I am a dedicated Full-Stack Developer with a strong background
                in PHP (Symfony & Laravel) and a growing expertise in
                JavaScript, React, and Node.js. With a keen eye for clean code
                and scalable architectures, I enjoy building high-performing web
                applications that deliver seamless user experiences.
              </p>
              <ul className="list-disc mt-3">
                <li>
                  Skills: PHP (Symfony, Laravel), JavaScript (ES6+), React,
                  Node.js, REST APIs, SQL & NoSQL Databases
                </li>
                <li>
                  Looking for: Remote opportunities in modern full-stack
                  development
                </li>
                <li>
                  Passionate about: Writing maintainable code, problem-solving,
                  and continuous learning
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
