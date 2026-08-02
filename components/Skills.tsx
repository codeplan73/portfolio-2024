"use client";

import React from "react";
import OrbitingCirclesDemo from "./AboutCircle";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  proficiency: "Expert" | "Proficient" | "Familiar";
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", proficiency: "Expert" },
      { name: "Next.js", proficiency: "Expert" },
      { name: "TypeScript", proficiency: "Expert" },
      { name: "Tailwind CSS", proficiency: "Expert" },
      { name: "JavaScript", proficiency: "Expert" },
      { name: "Redux / Zustand", proficiency: "Proficient" },
      { name: "Framer Motion", proficiency: "Proficient" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", proficiency: "Expert" },
      { name: "Express", proficiency: "Expert" },
      { name: "MongoDB", proficiency: "Proficient" },
      { name: "PostgreSQL", proficiency: "Proficient" },
      { name: "REST APIs", proficiency: "Expert" },
      { name: "Laravel / PHP", proficiency: "Familiar" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", proficiency: "Proficient" },
      { name: "Expo", proficiency: "Proficient" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", proficiency: "Expert" },
      { name: "Vercel / Netlify", proficiency: "Expert" },
      { name: "Sanity CMS", proficiency: "Proficient" },
      { name: "Supabase", proficiency: "Proficient" },
      { name: "Firebase", proficiency: "Familiar" },
      { name: "Docker", proficiency: "Familiar" },
    ],
  },
];

const proficiencyBadge = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primaryColor/20 text-primaryColor border-primaryColor/30";
    case "Proficient":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Familiar":
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    default:
      return "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }
};

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

const Skills = () => {
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
          Skills & Expertise
        </motion.h1>
        <motion.div
          className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
          variants={itemVariants}
        />
      </div>

      {/* Orbiting skills circle */}
      <motion.div variants={itemVariants}>
        <OrbitingCirclesDemo />
      </motion.div>

      {/* Categorized skill cards */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className="p-5 border rounded-xl bg-slate-800/50 border-slate-700"
            variants={itemVariants}
          >
            <h4 className="mb-4 text-lg font-semibold text-white poppins-semibold">
              {category.name}
            </h4>
            <ul className="space-y-2.5">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-slate-300">{skill.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs border ${proficiencyBadge(skill.proficiency)}`}
                  >
                    {skill.proficiency}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
