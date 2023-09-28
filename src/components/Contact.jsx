import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section>
        <h1 className="text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
          How to get In Touch With Me!
        </h1>
        <div className="p-6">This is going to be my contact page :)</div>
      </section>
      <a
        className="hidden md:flex absolute bottom-0 animate-bounce"
        href="#home"
      >
        <BsChevronDoubleUp size={40} />
      </a>
    </div>
  );
};

export default Contact;
