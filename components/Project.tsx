"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectCategory = "All" | "Full-Stack" | "Frontend" | "Backend";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  techStack: string[];
  category: Exclude<ProjectCategory, "All">;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/projects/project-9.png",
    title: "Frima Technology",
    description:
      "A technology services platform offering PC and laptop repairs, COMPTIA certification training (A+, Network+, Security+), managed IT support, and a hardware shop. Built with a custom CMS for blog, product, and training content management.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Shadcn", "Zustand", "Sanity Studio"],
    category: "Full-Stack",
    liveUrl: "https://www.frimatechnology.com/",
    githubUrl: "https://github.com/codeplan73",
  },
  {
    id: 2,
    image: "/projects/project-7.png",
    title: "Cilias Health Foundation",
    description:
      "A women's healthcare foundation and wellness center offering fertility support, pregnancy counseling, therapy programs, and community health advocacy. Includes appointment booking, blog, and campaign management.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Sanity Studio",
      "Paystack",
    ],
    category: "Full-Stack",
    liveUrl: "https://ciliaswomenhealthcarefoundation.com",
    githubUrl: "https://github.com/codeplan73",
  },
  {
    id: 3,
    image: "/projects/walrus-tech.png",
    title: "The-Walrus Tech",
    description:
      "Corporate website and admin dashboard for The-Walrus Tech Limited, creators of The-Middle-Man, a platform combining car rentals, artisan services, and social connections into one application.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "REST API"],
    category: "Full-Stack",
    liveUrl: "https://thewalrustech.com",
    githubUrl: "https://github.com/codeplan73",
  },
  {
    id: 4,
    image: "/projects/project-1.png",
    title: "Linos-Touch",
    description:
      "A professional cleaning service booking platform serving South East London. Customers book house, office, deep clean, and end-of-tenancy services through a streamlined postcode-based scheduling flow.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Supabase"],
    category: "Full-Stack",
    liveUrl: "https://linosbooking.vercel.app",
    githubUrl: "https://github.com/codeplan73",
  },
  {
    id: 5,
    image: "/projects/project-8.png",
    title: "Father Heart of God Foundation",
    description:
      "A faith-based NGO website serving orphans and vulnerable children in Nigeria. Features program pages for child advocacy, education, emotional restoration, and family reintegration, plus a blog, photo gallery, donation calls-to-action, and volunteer sign-up.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Sanity Studio", "Vercel Blob"],
    category: "Full-Stack",
    liveUrl: "https://thefatherheartofgodngo.vercel.app",
    githubUrl: "https://github.com/codeplan73",
  },
  {
    id: 6,
    image: "/projects/project-3.png",
    title: "AI Healthcare Diagnostic System",
    description:
      "An AI-powered symptom checker and health tracking web app. Users input symptoms for smart diagnostic suggestions and track health metrics over time. The Express backend, hosted on Railway, powers the diagnostic API that drives the frontend intelligence.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Express", "Railway", "AI/ML API"],
    category: "Full-Stack",
    liveUrl: "https://healthcaresystemai.vercel.app",
    githubUrl: "https://github.com/codeplan73",
  },
];

const filterTabs: ProjectCategory[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
          Portfolio
        </motion.h1>
        <motion.div
          className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
          variants={itemVariants}
        />
        <motion.p
          className="max-w-xl mt-4 text-sm text-center text-slate-400 md:text-base"
          variants={itemVariants}
        >
          A selection of projects I have built, from full-stack web applications
          to backend services. Each one is live and in production.
        </motion.p>
      </div>

      {/* Filter tabs */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2"
        variants={itemVariants}
      >
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === tab
                ? "bg-primaryColor text-white shadow-lg shadow-primaryColor/25"
                : "text-slate-400 bg-slate-800/50 border border-slate-700 hover:text-white hover:border-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Project cards */}
      <motion.div
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        layout
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col overflow-hidden transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-700 hover:border-primaryColor/40 hover:shadow-[0_0_20px_rgba(253,111,0,0.08)] group"
            variants={itemVariants}
            layout
          >
            {/* Project image */}
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-primaryColor/10 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold text-white poppins-semibold">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-slate-700 text-slate-300 border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4 mt-auto border-t border-slate-700/50">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-white transition-colors rounded-full bg-primaryColor hover:bg-primaryColor/80"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm transition-colors border rounded-full text-slate-300 border-slate-600 hover:border-primaryColor hover:text-primaryColor"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
