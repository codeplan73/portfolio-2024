"use client";

import React, { useState } from "react";
import Image from "next/image";
import { routes } from "@/utils/contant";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="relative z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="flex items-center justify-between px-6 py-4 mx-auto md:container md:px-12">
        <Image
          src="/logo.png"
          className="object-cover w-10 h-10 rounded-full"
          width={1000}
          height={1000}
          alt="logo"
        />

        {/* Desktop nav links */}
        <ul className="items-center hidden space-x-8 md:flex">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                className="text-sm text-slate-300 hover:text-primaryColor transition-colors duration-200 poppins-regular"
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me button */}
        <Link
          href="#contact"
          className="hidden px-5 py-2 text-sm text-white duration-300 rounded-full shadow md:block hover:shadow-lg bg-primaryColor poppins-bold hover:bg-primaryColor/80"
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-primaryColor"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <LuMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-64 bg-slate-900 border-l border-slate-700 shadow-2xl backdrop-blur-md backdrop-saturate-150 backdrop-brightness-90 bg-light-slate-950"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <span className="text-sm font-semibold text-slate-300 poppins-semibold">
                  Menu
                </span>
                <button
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="text-slate-400 hover:text-primaryColor"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col px-6 py-4 space-y-4 backdrop-blur-md bg-slate-950/90">
                {routes.map((route) => (
                  <li key={route.name}>
                    <Link
                      className="block text-sm text-slate-300 hover:text-primaryColor transition-colors duration-200 poppins-regular"
                      href={route.path}
                      onClick={closeMobile}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#contact"
                    onClick={closeMobile}
                    className="block px-5 py-2 mt-4 text-sm text-center text-white rounded-full bg-primaryColor poppins-bold hover:bg-primaryColor/80"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
