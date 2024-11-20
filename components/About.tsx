import React from "react";
import AboutCircle from "./AboutCircle";
import {
  // FaPaintBrush,
  // FaPalette,
  FaLaptopCode,
  FaMobile,
  FaServer,
} from "react-icons/fa";
import { AboutSkills } from "./AboutSkills";

const About = () => {
  return (
    <div className="container flex flex-col gap-8 mx-auto md:gap-2">
      <h1 className="text-xl text-center text-transparent md:text-4xl poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text">
        About Me
      </h1>
      <hr className="w-32 mx-auto my-4 -mt-8 border-t-2 md:-mt-1 border-slate-600" />

      <div className="grid items-center justify-center grid-cols-1 md:gap-10 md:items-start md:grid-cols-4">
        <div className="hidden w-full col-span-1 md:block">
          <AboutCircle />
        </div>
        <div className="flex flex-col items-center justify-center w-full col-span-3 space-y-8">
          <p className="text-sm text-center md:text-start text-slate-600 md:text-lg helvetica">
            {`I specialize in crafting accessible, interactive, and visually stunning websites tailored to your unique needs. With expertise in cutting-edge web technologies like JavaScript, React, and Next.js, I bring your ideas to life. Whether you're an independent artisan, creator, or business owner, I deliver websites that captivate and engage your audience. My robust backend skills in PHP/MySQL, Laravel, and Node.js/Express ensure seamless functionality and a reliable user experience. Let's build something exceptional together!`}
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm rounded-xl">
              <FaLaptopCode className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Frontend Development</h4>
              <p className="text-sm text-center text-slate-600">
                Building responsive and interactive web applications using
                React, Next.js, and modern JavaScript frameworks.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm drop-shadow-xl rounded-xl">
              <FaMobile className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Mobile Development</h4>
              <p className="text-sm text-center text-slate-600">
                Developing cross-platform mobile applications using React Native
                and modern mobile development tools.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm rounded-xl">
              <FaServer className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Backend Development</h4>
              <p className="text-sm text-center text-slate-600">
                Creating robust server-side applications using Node.js, Express,
                and database technologies like MongoDB and PostgreSQL.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutSkills />
    </div>
  );
};

export default About;
