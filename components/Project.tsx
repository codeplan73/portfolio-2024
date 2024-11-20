import React from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  image: string;
  linkDemoLive?: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: "/projects/project-1.png",
    linkDemoLive: "https://linosbooking.vercel.app/",
  },
  {
    id: 2,
    image: "/projects/project-2.png",
    linkDemoLive: "https://ideacolleges.com/",
  },
  {
    id: 3,
    image: "/projects/project-3.png",
    linkDemoLive: "https://frimatech.vercel.app/",
  },
  {
    id: 4,
    image: "/projects/project-4.png",
    linkDemoLive: "https://linostouch.com/",
  },
  {
    id: 5,
    image: "/projects/project-5.png",
    linkDemoLive: "https://hng-task2-timbucloudshop.vercel.app/",
  },
  {
    id: 6,
    image: "/projects/project-6.png",
    linkDemoLive: "https://parcel-tracking-two.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-8 mx-auto md:gap-8">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center w-full max-w-lg p-2 ease-in-out bg-white shadow-sm hover:drop-shadow-lg rounded-xl"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={500}
              height={500}
              className="w-full h-auto p-2 bg-primaryColor/15 rounded-xl"
            />
            <div className="flex items-center justify-center pt-2">
              <Link target="_blank" href={project.linkDemoLive || "#"}>
                Demo/Live
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
