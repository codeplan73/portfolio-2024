"use client";

import React, { useRef } from "react";
import { TfiEmail } from "react-icons/tfi";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwaaqda");
  const formRef = useRef<HTMLFormElement>(null);

  if (state.succeeded) {
    Swal.fire({
      title: "Success",
      text: "Thank you for your message. We will get back to you shortly.",
      icon: "success",
      confirmButtonText: "OK",
    });

    formRef.current?.reset();
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-8 mx-auto md:gap-8">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <h1 className="text-xl text-center text-transparent md:text-4xl poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text">
          Contact
        </h1>
        <hr className="w-32 mx-auto my-4 border-t-2 border-slate-600" />
        <p className="text-sm text-center text-slate-600 md:text-lg helvetica">
          Got a project? {`Let's talk.`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
        <div className="flex flex-col w-full gap-2 md:w-1/3">
          <p className="text-xs font-semibold text-muted-foreground">
            CONTACT INFO
          </p>
          <h4 className="text-2xl font-semibold poppins-semibold">
            Get in Touch
          </h4>

          <div className="flex items-start justify-start gap-2 mt-4">
            <TfiEmail className="text-2xl text-primaryColor" />
            <div className="flex flex-col items-start justify-start">
              <span className="text-sm">Talk to me</span>
              <p className="text-lg">omonzebaguan.grn@gmail.com</p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-6 md:w-2/3"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 w-full gap-2">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                name="name"
                disabled={state.submitting}
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border outline-none rounded-xl border-slate-300 focus:border-primaryColor"
              />
            </div>
            <div className="flex flex-col flex-1 w-full gap-2">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                disabled={state.submitting}
                name="email"
                placeholder="Enter your email"
                id="name"
                className="w-full p-2 border outline-none rounded-xl border-slate-300 focus:border-primaryColor"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full gap-2">
            <label htmlFor="name">Message</label>
            <textarea
              name="message"
              disabled={state.submitting}
              placeholder="Tell us what you want"
              className="p-2 border outline-none w-sfull rounded-xl border-slate-300 focus:border-primaryColor"
            />
          </div>
          <button
            disabled={state.submitting}
            className="px-4 w-full md:w-[200px] py-3 duration-300 bg-white border rounded-full shadow hover:text-white hover:bg-primaryColor text-primaryColor hover:drop-shadow-xl border-primaryColor poppins-bold"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
