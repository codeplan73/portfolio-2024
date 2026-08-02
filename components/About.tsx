"use client";

import React from "react";
import { FaLaptopCode, FaMobile, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const About = () => {
  return (
    <motion.div
      className="container flex flex-col gap-12 mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section heading */}
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-3xl font-bold text-white md:text-4xl poppins-bold"
          variants={itemVariants}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
          variants={itemVariants}
        />
      </div>

      {/* About text */}
      <motion.p
        className="max-w-3xl mx-auto text-base leading-relaxed text-center text-slate-400 md:text-lg"
        variants={itemVariants}
      >
        I am a full-stack developer with a deep focus on the frontend. I craft
        accessible, performant, and visually refined web applications using
        React, Next.js, and modern JavaScript. On the backend, I build robust
        APIs and services with Node.js, Express, and both SQL and NoSQL
        databases. I have shipped production applications across healthcare,
        logistics, education, and service booking domains. Every project I take
        on gets the same standard: clean code, thoughtful architecture, and a
        user experience that feels effortless.
      </motion.p>

      {/* Role cards */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
            <FaLaptopCode className="w-6 h-6 text-primaryColor" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            Frontend Development
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Responsive, accessible interfaces built with React, Next.js,
            TypeScript, and Tailwind CSS. Pixel-perfect implementation from
            design to deployment.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
            <FaMobile className="w-6 h-6 text-primaryColor" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            Mobile Development
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Cross-platform mobile applications using React Native. One codebase,
            native performance on both iOS and Android.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
            <FaServer className="w-6 h-6 text-primaryColor" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            Backend Development
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Robust APIs and services with Node.js, Express, MongoDB, and
            PostgreSQL. Secure authentication, database design, and cloud
            deployment.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
