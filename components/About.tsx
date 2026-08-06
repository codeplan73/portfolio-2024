// "use client";

// import React from "react";
// import { FaLaptopCode, FaMobile, FaServer } from "react-icons/fa";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring" as const, stiffness: 100 },
//   },
// };

// const About = () => {
//   return (
//     <motion.div
//       className="container flex flex-col gap-12 mx-auto"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       {/* Section heading */}
//       <div className="flex flex-col items-center">
//         <motion.h1
//           className="text-3xl font-bold text-white md:text-4xl poppins-bold"
//           variants={itemVariants}
//         >
//           About Me
//         </motion.h1>
//         <motion.div
//           className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
//           variants={itemVariants}
//         />
//       </div>

//       {/* About text */}
//       <motion.p
//         className="max-w-3xl mx-auto text-base leading-relaxed text-center text-slate-400 md:text-lg"
//         variants={itemVariants}
//       >
//         I am a Frontend Engineer with 4+ years building production-grade web 
// applications across SaaS, fintech, and healthcare. My core stack is 
// React.js, Next.js (App Router, SSR/SSG), and TypeScript — and I back 
// it with real results: 40% faster page loads, 35% reduced load times, 
// and 99.9% API uptime across live platforms.
//       <br className=" md:block my-4" />
//         I have set frontend architecture for a regulated banking platform, led 
// a cross-functional team to ship a multi-module SaaS product across web 
// and React Native mobile, and integrated AI-powered features into 
// production healthcare applications. I work across the full product 
// lifecycle — from design handoff to deployment — and I bring the same 
// standard to every project: clean code, thoughtful architecture, and a 
// user experience that feels effortless.
//       </motion.p>

//       {/* Role cards */}
//       <motion.div
//         className="grid grid-cols-1 gap-6 md:grid-cols-3"
//         variants={containerVariants}
//       >
//         <motion.div
//           className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
//           variants={cardVariants}
//         >
//           <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
//             <FaLaptopCode className="w-6 h-6 text-primaryColor" />
//           </div>
//           <h4 className="mb-2 text-lg font-semibold text-white">
//             Frontend Engineering
//           </h4>
//           <p className="text-sm leading-relaxed text-slate-400">
//             Production-ready, accessible interfaces built with React.js, Next.js 
// (App Router), TypeScript, and Tailwind CSS — optimised for Core Web 
// Vitals, SEO, and seamless user experience from design handoff to 
// deployment.
//           </p>
//         </motion.div>

//         <motion.div
//           className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
//           variants={cardVariants}
//         >
//           <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
//             <FaMobile className="w-6 h-6 text-primaryColor" />
//           </div>
//           <h4 className="mb-2 text-lg font-semibold text-white">
// AI & Full-Stack Integration
//           </h4>
//           <p className="text-sm leading-relaxed text-slate-400">
//             AI-powered features, REST APIs, and backend services with Node.js, 
// Express, and PostgreSQL or MongoDB — including AI/ML API integration, 
// secure authentication, and Paystack payment flows.
//           </p>
//         </motion.div>

//         <motion.div
//           className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
//           variants={cardVariants}
//         >
//           <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
//             <FaServer className="w-6 h-6 text-primaryColor" />
//           </div>
//           <h4 className="mb-2 text-lg font-semibold text-white">
//             Backend Development
//           </h4>
//           <p className="text-sm leading-relaxed text-slate-400">
//             Cross-platform mobile applications using React Native and Expo — one 
// shared codebase delivering native performance on iOS and Android, with 
// component logic shared from your existing React web codebase.
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;


"use client";

import React from "react";
import { FaLaptopCode, FaMobile, FaBrain } from "react-icons/fa";
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
        I am a Frontend Engineer with 4+ years building production-grade web
        applications across SaaS, fintech, and healthcare. My core stack is
        React.js, Next.js (App Router, SSR/SSG), and TypeScript — and I back
        it with real results: 40% faster page loads, 35% reduced load times,
        and 99.9% API uptime across live platforms.
        <br className="md:block my-4" />
        I have set frontend architecture for a regulated banking platform, led
        a cross-functional team to ship a multi-module SaaS product across web
        and React Native mobile, and integrated AI-powered features into
        production healthcare applications. I work across the full product
        lifecycle — from design handoff to deployment — and I bring the same
        standard to every project: clean code, thoughtful architecture, and a
        user experience that feels effortless.
      </motion.p>

      {/* Role cards */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        variants={containerVariants}
      >
        {/* Card 1 — Frontend Engineering */}
        <motion.div
          className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
            <FaLaptopCode className="w-6 h-6 text-primaryColor" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            Frontend Engineering
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Production-ready, accessible interfaces built with React.js,
            Next.js (App Router), TypeScript, and Tailwind CSS — optimised for
            Core Web Vitals, SEO, and seamless user experience from design
            handoff to deployment.
          </p>
        </motion.div>

        {/* Card 2 — AI & Full-Stack Integration */}
        <motion.div
          className="flex flex-col items-center p-6 text-center border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/30 transition-colors duration-300"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primaryColor/10 mb-4">
            <FaBrain className="w-6 h-6 text-primaryColor" />
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            AI & Full-Stack Integration
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            AI-powered features, REST APIs, and backend services with Node.js,
            Express, and PostgreSQL or MongoDB — including AI/ML API
            integration, secure authentication, and Paystack payment flows.
          </p>
        </motion.div>

        {/* Card 3 — Mobile Development */}
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
            Cross-platform mobile applications using React Native and Expo —
            one shared codebase delivering native performance on iOS and
            Android, with component logic shared from your existing React web
            codebase.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;