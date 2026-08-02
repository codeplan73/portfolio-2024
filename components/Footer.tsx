import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-950 border-slate-800">
      <div className="container flex flex-col items-center gap-6 px-6 py-10 mx-auto md:flex-row md:justify-between md:px-24">
        {/* Copyright */}
        <p className="text-sm text-slate-400">
          &copy; {year}{" "}
          <span className="text-primaryColor">Emmanuel Omonzebaguan</span>
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/cv/Emmanuel-Omonzebaguan-Frontend-CV.pdf"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primaryColor transition-colors"
          >
            Download CV
          </Link>
          <Link
            href="https://github.com/codeplan73"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-primaryColor transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/codeplan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-primaryColor transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="https://x.com/codecps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-slate-400 hover:text-primaryColor transition-colors"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <a
            href="mailto:omonzebaguan.grn@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-primaryColor transition-colors"
          >
            <TfiEmail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
