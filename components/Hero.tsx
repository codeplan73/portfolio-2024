import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const Hero = () => {
  return (
    <header className="container flex flex-col-reverse items-center justify-between gap-8 px-12 py-12 mx-auto md:px-24 md:py-20 md:flex-row md:container">
      <div className="flex flex-col items-start justify-start flex-1 space-y-4">
        <AnimatedShinyText>
          <span className="font-bold text-md"> ✨👋 Hi I am ,</span>
        </AnimatedShinyText>

        <h4 className="text-2xl font-semibold text-primaryColor text-nowrap">
          Emmanuel Omonzebaguan
        </h4>

        <h2 className="text-4xl poppins-bold text-nowrap">
          Full-Stack Developer
        </h2>
        <p className="text-lg helvatica">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          commodi tempore aut id voluptatum eveniet velit aspernatur laborum.
        </p>
        <div className="flex items-center justify-center space-x-6 md:justify-start">
          <FaFacebook className="text-2xl text-slate-600 hover:text-primaryColor" />
          <FaGithub className="text-2xl text-slate-600 hover:text-primaryColor" />
          <FaInstagram className="text-2xl text-slate-600 hover:text-primaryColor" />
          <FaXTwitter className="text-2xl text-slate-600 hover:text-primaryColor" />
          <FaLinkedin className="text-2xl text-slate-600 hover:text-primaryColor" />
        </div>
        <div className="flex items-center justify-center space-x-4 md:justify-start">
          <Button className="px-4 py-2 text-white duration-300 rounded-full shadow hover:drop-shadow-xl bg-primaryColor poppins-bold hover:bg-primaryColor/80">
            Get in Touch
          </Button>
          <Button className="px-4 py-2 duration-300 bg-white border rounded-full shadow text-primaryColor hover:drop-shadow-xl border-primaryColor poppins-bold">
            Downlaod CV
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image
          src="/profile.png"
          width={1000}
          height={1000}
          className="object-fit md:object-cover border-2 rounded-full md:rounded-full w-[200px] h-[200px] md:h-96 md:w-96 border-primaryColor"
          alt="hero"
        />
      </div>
    </header>
  );
};

export default Hero;