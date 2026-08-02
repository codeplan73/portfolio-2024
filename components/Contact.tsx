"use client";

import React, { useRef } from "react";
import { TfiEmail } from "react-icons/tfi";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwaaqda");
  const formRef = useRef<HTMLFormElement>(null);

  if (state.succeeded) {
    Swal.fire({
      title: "Success",
      text: "Thank you for your message. I will get back to you shortly.",
      icon: "success",
      confirmButtonText: "OK",
      background: "#1e293b",
      color: "#e2e8f0",
    });

    formRef.current?.reset();
  }

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
          Contact
        </motion.h1>
        <motion.div
          className="w-16 h-1 mt-3 rounded-full bg-primaryColor"
          variants={itemVariants}
        />
        <motion.p
          className="mt-4 text-sm text-center text-slate-400 md:text-base"
          variants={itemVariants}
        >
          Got a project? Let us talk.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col items-start w-full gap-10 md:flex-row"
        variants={itemVariants}
      >
        {/* Contact info */}
        <div className="flex flex-col w-full gap-3 md:w-1/3">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-500">
            Contact Info
          </p>
          <h4 className="text-2xl font-semibold text-white poppins-semibold">
            Get in Touch
          </h4>

          <div className="flex items-start gap-3 mt-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primaryColor/10">
              <TfiEmail className="text-lg text-primaryColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-400">Email me at</span>
              <a
                href="mailto:omonzebaguan.grn@gmail.com"
                className="text-white hover:text-primaryColor transition-colors"
              >
                omonzebaguan.grn@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5 md:w-2/3"
        >
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="fullname" className="text-sm text-slate-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                disabled={state.submitting}
                id="fullname"
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 text-sm text-white placeholder-slate-500 bg-transparent border rounded-lg outline-none border-slate-600 focus:border-primaryColor focus:ring-1 focus:ring-primaryColor transition-colors"
                required
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="email" className="text-sm text-slate-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                disabled={state.submitting}
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 text-sm text-white placeholder-slate-500 bg-transparent border rounded-lg outline-none border-slate-600 focus:border-primaryColor focus:ring-1 focus:ring-primaryColor transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-slate-400">
              Message
            </label>
            <textarea
              name="message"
              disabled={state.submitting}
              id="message"
              placeholder="Tell me about your project"
              rows={5}
              className="w-full px-4 py-2.5 text-sm text-white placeholder-slate-500 bg-transparent border rounded-lg outline-none resize-none border-slate-600 focus:border-primaryColor focus:ring-1 focus:ring-primaryColor transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full md:w-48 bg-primaryColor hover:bg-primaryColor/80 hover:shadow-lg hover:shadow-primaryColor/25 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
