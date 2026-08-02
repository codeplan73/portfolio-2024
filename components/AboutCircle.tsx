import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMysql, SiTypescript, SiRedux } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:-mt-20 ">
      <span className="text-xl font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-white to-slate-500 bg-clip-text">
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
        reverse
      >
        <Icons.laravel />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={140}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nodejs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.reactnative />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.php />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  html: () => <TiHtml5 className="text-4xl text-slate-400 hover:text-primaryColor transition-colors" />,
  css: () => <FaCss3 className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  bootstrap: () => <FaBootstrap className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  tailwind: () => <RiTailwindCssFill className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  github: () => <FaGithub className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  javascript: () => <IoLogoJavascript className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  react: () => <RiReactjsFill className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  nextjs: () => <RiNextjsFill className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  redux: () => <SiRedux className="text-4xl text-slate-400 hover:text-primaryColor transition-colors" />,
  typescript: () => <SiTypescript className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  reactnative: () => (
    <TbBrandReactNative className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />
  ),
  nodejs: () => <FaNodeJs className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  php: () => <FaPhp className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  mysql: () => <SiMysql className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
  laravel: () => <FaLaravel className="text-2xl text-slate-400 hover:text-primaryColor transition-colors" />,
};
