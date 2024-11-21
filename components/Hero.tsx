import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="container flex flex-col-reverse items-center justify-between gap-8 py-12 mx-auto md:px-24 md:py-20 md:flex-row md:container">
      <div className="flex flex-col items-start justify-start flex-1 space-y-4">
        <AnimatedShinyText>
          <span className="font-bold text-md"> ✨👋 Hi I am ,</span>
        </AnimatedShinyText>

        <h4 className="text-2xl font-semibold text-primaryColor text-nowrap">
          Emmanuel Omonzebaguan
        </h4>

        <h2 className="text-2xl text-transparent md:text-4xl text-nowrap poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text">
          Full-Stack Developer
        </h2>
        <p className="text-lg helvatica">
          Innovative and results-driven Full-Stack Web Developer, performance
          management, and data integration. Skilled in leveraging modern
          frameworks, languages, to build scalable, robust applications.
        </p>
        <div className="flex items-center justify-center space-x-6 md:justify-start">
          <Link href="" target="_blank">
            <FaFacebook className="text-2xl text-slate-600 hover:text-primaryColor" />
          </Link>
          <Link href="https://github.com/codeplan73" target="_blank">
            <FaGithub className="text-2xl text-slate-600 hover:text-primaryColor" />
          </Link>
          <Link href="" target="_blank">
            <FaInstagram className="text-2xl text-slate-600 hover:text-primaryColor" />
          </Link>
          <Link href="https://x.com/codecps" target="_blank">
            <FaXTwitter className="text-2xl text-slate-600 hover:text-primaryColor" />
          </Link>
          <Link href="https://www.linkedin.com/in/codeplan/" target="_blank">
            <FaLinkedin className="text-2xl text-slate-600 hover:text-primaryColor" />
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4 md:justify-start">
          <Button className="px-4 py-2 text-white duration-300 rounded-full shadow hover:drop-shadow-xl bg-primaryColor poppins-bold hover:bg-primaryColor/80">
            Get in Touch
          </Button>
          <Link
            href="/cv/Omonzebaguan-frontend-erpf.pdf"
            target="_blank"
            className="px-4 py-2 duration-300 bg-white border rounded-full shadow text-primaryColor hover:drop-shadow-xl border-primaryColor poppins-bold"
          >
            Downlaod CV
          </Link>
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
