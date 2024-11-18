import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiMysql, SiCss3, SiTypescript, SiRedux } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:-mt-20 ">
      <span className="text-xl font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text dark:from-white dark:to-black">
        Skills
      </span>

      {/* 1st Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={40}
      >
        <Icons.html />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        radius={40}
      >
        <Icons.css />
      </OrbitingCircles>

      {/* 2nd Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={80}
        duration={20}
        reverse
      >
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={80}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.bootstrap />
      </OrbitingCircles>

      {/* 3nd Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
      >
        <Icons.github />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={20}
      >
        <Icons.javascript />
      </OrbitingCircles>
      {/* 4nd Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        reverse
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nextjs />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  html: () => <TiHtml5 className="text-4xl text-slate-600 " />,
  css: () => <SiCss3 className="text-2xl text-slate-600 " />,
  bootstrap: () => <FaBootstrap className="text-2xl text-slate-600 " />,
  tailwind: () => <RiTailwindCssFill className="text-2xl text-slate-600 " />,
  github: () => <FaGithub className="text-2xl text-slate-600 " />,
  javascript: () => <IoLogoJavascript className="text-2xl text-slate-600 " />,
  react: () => <RiReactjsFill className="text-2xl text-slate-600 " />,
  nextjs: () => <RiNextjsFill className="text-2xl text-slate-600 " />,
  redux: () => <SiRedux className="text-4xl text-slate-600 " />,
  typescript: () => <SiTypescript className="text-2xl text-slate-600 " />,
  reactnative: () => (
    <TbBrandReactNative className="text-2xl text-slate-600 " />
  ),
  nodejs: () => <FaNodeJs className="text-2xl text-slate-600 " />,
  php: () => <FaPhp className="text-2xl text-slate-600 " />,
  mysql: () => <SiMysql className="text-2xl text-slate-600 " />,
  laravel: () => <FaLaravel className="text-2xl text-slate-600 " />,
};
