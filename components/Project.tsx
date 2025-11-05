"use client"; // Add this directive for client-side rendering

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  techStack: string[];
  linkDemoLive: string;
  linkGithub?: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: "/projects/project-7.png",
    title: "Cilias Health Foundation Website",
    description:
      "Cilias Women’s Healthcare Foundation and Wellness Center is committed to empowering women through education, advocacy, and accessible healthcare services — fostering healthier families and stronger communities",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "API",
      "Sanity Studio",
      "Paystack",
    ],
    linkDemoLive: "https://cilias-health-care-foundation-dfhsxgas5.vercel.app/",
  },
  {
    id: 2,
    image: "/projects/walrus-tech.png",
    title: "Corperate Website",
    description:
      "Corporate website and admin panel for The-Walrus Tech Limited, creators of The-Middle-Man, a platform offering car rentals, artisan services, and social connections",
    techStack: ["React", "Next.js", "Tailwind CSS", "ReduxToolKit", "API"],
    linkDemoLive: "https://thewalrustech.com",
  },
  {
    id: 3,
    image: "/projects/project-2.png",
    title: "Hria Colleges",
    description: "An educational platform for students and teachers.",
    techStack: ["Html/CSS", "JavaScript", "Bootstrap", "PHP/MySQL", "Laravel"],
    linkDemoLive: "https://hiracolleges.com/",
  },
  {
    id: 4,
    image: "/projects/tmm.png",
    title: "The-Middle-Man",
    description:
      "TheMiddleMan is a powerful mobile app that combines car rentals, artisan job listings, and a social chatroom—all.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Shadcn"],
    linkDemoLive: "https://www.themiddleman.ng/",
  },
  {
    id: 5,
    image: "/projects/project-1.png",
    title: "Linos Booking (Modernized)",
    description: "A booking platform for cleaning servics.",
    techStack: ["React", "Next.js", "Tailwind CSS", "ReduxToolKit", "Supabase"],
    linkDemoLive: "https://linosbooking.vercel.app/",
    linkGithub: "https://github.com/codeplan73",
  },
  {
    id: 6,
    image: "/projects/project-3.png",
    title: "Frimatech",
    description: "A tech company website showcasing services and products.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Shadcn", "Zustand"],
    linkDemoLive: "https://frimatech.vercel.app/",
    linkGithub: "https://github.com/codeplan73",
  },
  // {
  //   id: 6,
  //   image: "/projects/project-4.png",
  //   title: "Linos Touch",
  //   description: "A booking platform for cleaning company.",
  //   techStack: ["HTML", "CSS", "BootStrap", "JavaScript", "PHP/MySQL"],
  //   linkDemoLive: "https://linostouch.com/",
  //   linkGithub: "https://github.com/codeplan73",
  // },

  // {
  //   id: 7,
  //   image: "/projects/project-6.png",
  //   title: "Logistics (Clone GIG - MERN Stack)",
  //   description:
  //     "A parcel tracking system for logistics companies cloned using MERN Stack",
  //   techStack: ["React", "Nodejs", "Tailwind CSS", "Express", "MongoDB"],
  //   linkDemoLive: "https://parcel-tracking-two.vercel.app/",
  //   linkGithub: "https://github.com/codeplan73",
  // },
];

const Project = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-8 mx-auto md:gap-8">
      {/* Portfolio Title and Description */}
      <div
        className="flex flex-col items-center justify-center w-full md:w-1/2"
        data-aos="fade-up"
      >
        <h1 className="text-xl text-center text-transparent md:text-4xl poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text">
          Portfolio
        </h1>
        <hr className="w-32 mx-auto my-4 border-t-2 border-slate-600" />
        <p className="text-sm text-center text-slate-600 md:text-lg helvetica">
          Here is a showcase of some of the projects I’ve worked on, ranging
          from web applications to fully responsive websites. Each project
          demonstrates my dedication to delivering high-quality, functional
          designs.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white shadow-sm hover:drop-shadow-lg rounded-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={project.id * 100} // Stagger animations
          >
            {/* Project Thumbnail */}
            <Image
              src={project.image}
              alt={`Project ${project.title}`}
              width={500}
              height={300}
              className="w-full h-auto rounded-xl"
            />

            {/* Project Title and Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-primaryColor">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-slate-600 bg-slate-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links to Live Demo and GitHub */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <Link
                href={project.linkDemoLive}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-white duration-300 rounded-full bg-primaryColor hover:bg-primaryColor/80"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </Link>
              {project.linkGithub && (
                <Link
                  href={project.linkGithub}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-primaryColor duration-300 bg-white border rounded-full border-primaryColor hover:bg-slate-100"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
