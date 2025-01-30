"use client"; // Add this directive to ensure client-side rendering

import React from "react";
import AboutCircle from "./AboutCircle";
import { FaLaptopCode, FaMobile, FaServer } from "react-icons/fa";
import { AboutSkills } from "./AboutSkills";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const About = () => {
  return (
    <motion.div
      className="container flex flex-col gap-8 mx-auto md:gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation only plays once
    >
      {/* About Me Title */}
      <motion.h1
        className="text-xl text-center text-transparent md:text-4xl poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text"
        variants={itemVariants}
      >
        About Me
      </motion.h1>

      {/* Divider */}
      <motion.hr
        className="w-32 mx-auto my-4 -mt-8 border-t-2 md:-mt-1 border-slate-600"
        variants={itemVariants}
      />

      {/* Main Content */}
      <div className="grid items-center justify-center grid-cols-1 md:gap-10 md:items-start md:grid-cols-4">
        {/* Left Section - AboutCircle */}
        <motion.div
          className="hidden w-full col-span-1 md:block"
          variants={itemVariants}
        >
          <AboutCircle />
        </motion.div>

        {/* Right Section - Text and Cards */}
        <motion.div
          className="flex flex-col items-center justify-center w-full col-span-3 space-y-8"
          variants={containerVariants}
        >
          {/* About Text */}
          <motion.p
            className="text-sm text-center md:text-start text-slate-600 md:text-lg helvetica"
            variants={itemVariants}
          >
            {`I specialize in crafting accessible, interactive, and visually stunning websites tailored to your unique needs. With expertise in cutting-edge web technologies like JavaScript, React, and Next.js, I bring your ideas to life. Whether you're an independent artisan, creator, or business owner, I deliver websites that captivate and engage your audience. My robust backend skills in PHP/MySQL, Laravel, and Node.js/Express ensure seamless functionality and a reliable user experience. Let's build something exceptional together!`}
          </motion.p>

          {/* Cards Section */}
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            variants={containerVariants}
          >
            {/* Frontend Development Card */}
            <motion.div
              className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm rounded-xl"
              variants={cardVariants}
            >
              <FaLaptopCode className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Frontend Development</h4>
              <p className="text-sm text-center text-slate-600">
                Building responsive and interactive web applications using
                React, Next.js, and modern JavaScript frameworks.
              </p>
            </motion.div>

            {/* Mobile Development Card */}
            <motion.div
              className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm drop-shadow-xl rounded-xl"
              variants={cardVariants}
            >
              <FaMobile className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Mobile Development</h4>
              <p className="text-sm text-center text-slate-600">
                Developing cross-platform mobile applications using React Native
                and modern mobile development tools.
              </p>
            </motion.div>

            {/* Backend Development Card */}
            <motion.div
              className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm rounded-xl"
              variants={cardVariants}
            >
              <FaServer className="w-8 h-8 mb-3 text-primaryColor" />
              <h4 className="mb-2 font-semibold">Backend Development</h4>
              <p className="text-sm text-center text-slate-600">
                Creating robust server-side applications using Node.js, Express,
                and database technologies like MongoDB and PostgreSQL.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* AboutSkills Section */}
      <AboutSkills />
    </motion.div>
  );
};

export default About;
