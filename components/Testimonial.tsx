"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  body: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Musa Alayafin",
    role: "Business Owner",
    body: "The website exceeded my expectations. It is sleek, user-friendly, and performs flawlessly. The attention to detail is remarkable.",
  },
  {
    id: 2,
    name: "Linos Touch",
    role: "Cleaning Service, London",
    body: "Highly professional work. My business website has attracted so many new clients since the redesign. Thank you.",
  },
  {
    id: 3,
    name: "Amin Abbas",
    role: "Startup Founder",
    body: "Amazing attention to detail. The final product was delivered on time and exceeded what we had in mind.",
  },
  {
    id: 4,
    name: "Michael Chuks",
    role: "Entrepreneur",
    body: "Outstanding service from start to finish. The result is exactly what I needed for my startup to look credible.",
  },
  {
    id: 5,
    name: "Sarah L.",
    role: "Small Business Owner",
    body: "I am thrilled with my new website. The design is stunning and it is incredibly easy to manage on my own.",
  },
  {
    id: 6,
    name: "James C.",
    role: "Agency Partner",
    body: "I highly recommend these services. The website is fast, responsive, and visually appealing across all devices.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <motion.div
      className="container flex flex-col items-center gap-10 mx-auto"
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
          What Clients Say
        </motion.h1>
        <motion.div
          className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
          variants={itemVariants}
        />
        <motion.p
          className="max-w-xl mt-4 text-sm text-center text-slate-400 md:text-base"
          variants={itemVariants}
        >
          Feedback from clients and collaborators I have built products for.
        </motion.p>
      </div>

      {/* Carousel */}
      <motion.div
        className="relative w-full max-w-2xl mx-auto"
        variants={itemVariants}
      >
        {/* Slide container */}
        <div className="relative overflow-hidden min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="flex flex-col items-center p-8 mx-4 text-center border rounded-2xl bg-slate-800/50 border-slate-700">
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 mb-4 text-primaryColor/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.659-2.917-1.679zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.659-2.917-1.679z" />
                </svg>

                <blockquote className="max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
                  &ldquo;{testimonials[current].body}&rdquo;
                </blockquote>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous button */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-0 transform -translate-y-1/2 top-1/2 -translate-x-3 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:border-primaryColor hover:bg-slate-700 transition-all duration-200"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-0 transform -translate-y-1/2 top-1/2 translate-x-3 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:border-primaryColor hover:bg-slate-700 transition-all duration-200"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 h-2.5 bg-primaryColor"
                  : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
