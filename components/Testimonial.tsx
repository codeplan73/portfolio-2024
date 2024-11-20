import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const Testomonial = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-8 mx-auto md:gap-8">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <h1 className="text-xl text-center text-transparent md:text-4xl poppins-bold bg-gradient-to-b from-slate-800 to-primaryColor bg-clip-text">
          What Our Clients Say
        </h1>
        <hr className="w-32 mx-auto my-4 border-t-2 border-slate-600" />
        <p className="text-sm text-center text-slate-600 md:text-lg helvetica">
          Our clients are at the heart of everything we do. Here’s what they
          have to say about working with us and how we’ve helped bring their
          visions to life.
        </p>
      </div>

      <TestimonialCard />
    </div>
  );
};

export default Testomonial;
