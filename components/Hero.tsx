"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPlayCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);


  return (
    <motion.header
      className="container flex flex-col-reverse items-center justify-between gap-8 py-12 mx-auto md:px-24 md:py-20 md:flex-row md:container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col items-start justify-start flex-1 space-y-4"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <AnimatedShinyText>
            <span className="font-bold text-md">Hi, I am</span>
          </AnimatedShinyText>
        </motion.div>

        <motion.h4
          className="text-2xl font-semibold text-primaryColor"
          variants={itemVariants}
        >
          Emmanuel Omonzebaguan
        </motion.h4>

        <motion.h2
          className="text-3xl text-white md:text-5xl poppins-bold"
          variants={itemVariants}
        >
          Frontend Engineer
        </motion.h2>

        <motion.p
          className="max-w-lg text-base leading-relaxed text-slate-400"
          variants={itemVariants}
        >
          I build production-grade web applications across SaaS, fintech, 
and healthcare — specialising in React.js, Next.js, and TypeScript. 
4+ years shipping fast, accessible, and scalable interfaces that 
users actually enjoy using.
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex items-center justify-center space-x-5 md:justify-start"
          variants={itemVariants}
        >
          <Link
            href="https://github.com/codewithomonz"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl text-slate-400 hover:text-primaryColor transition-colors duration-200" />
          </Link>
          <Link
            href="https://x.com/codewithomonz"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="text-xl text-slate-400 hover:text-primaryColor transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/codewithomonz/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl text-slate-400 hover:text-primaryColor transition-colors duration-200" />
          </Link>
          <button
            onClick={() => setShowVideo(true)}
            aria-label="Play professional summary video"
          >
            <FaPlayCircle className="text-xl text-slate-400 hover:text-primaryColor transition-colors duration-200" />
          </button>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center space-x-4 md:justify-start"
          variants={itemVariants}
        >
          <Link
            href="#contact"
            className="px-5 py-2.5 text-sm text-white duration-300 rounded-full shadow-lg bg-primaryColor poppins-bold hover:bg-primaryColor/80 hover:shadow-primaryColor/25"
          >
            Get in Touch
          </Link>
          <Link
            href="/cv/Emmanuel_Omonzebaguan_Frontend_Engineer.pdf"
            target="_blank"
            className="px-5 py-2.5 text-sm duration-300 border rounded-full text-primaryColor hover:text-white border-primaryColor hover:bg-primaryColor poppins-bold transition-colors"
          >
            Download CV
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 text-sm transition-colors text-slate-400 hover:text-primaryColor"
          >
            <FaPlayCircle className="text-lg" />
            <span className="underline underline-offset-4">
              Watch My Professional Summary
            </span>
          </button>
        </motion.div>

        {/* Video Modal */}
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowVideo(false)}
          >
            <div
              className="relative w-full max-w-2xl p-4 rounded-lg bg-slate-900 border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                &times;
              </button>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/yLplG7EUbeM?si=_jhxTINYFcSFkaXE&controls=0&start=6"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="flex items-center justify-center flex-1"
        variants={imageVariants}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primaryColor/20 blur-3xl" />
          <Image
            src="/profile.png"
            width={1000}
            height={1000}
            className="relative object-cover border-2 rounded-full w-[200px] h-[200px] md:h-96 md:w-96 border-primaryColor shadow-[0_0_40px_rgba(253,111,0,0.15)]"
            alt="Emmanuel Omonzebaguan"
          />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
