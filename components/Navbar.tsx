import React from "react";
import Image from "next/image";
import { routes } from "@/utils/contant";
import Link from "next/link";
// import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="s">
      <div className="flex items-center justify-between px-6 py-4 mx-auto md:container md:px-12">
        <Image
          src="/logo.png"
          className="object-cover w-12 h-12"
          width={1000}
          height={1000}
          alt="logo"
        />
        <div className="flex items-center space-x-6">
          <ul className="items-center hidden space-x-6 md:flex">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  className="poppins-regular hover:text-primaryColor easse-in-out text-md"
                  href={route.path}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="#contact"
          className="px-4 py-2 text-white duration-300 rounded-full shadow hover:drop-shadow-xl bg-primaryColor poppins-bold hover:bg-primaryColor/80"
        >
          Hire Me
        </Link>
        {/* <LuMenu className="w-6 h-6 text-primaryColor md:hidden" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
