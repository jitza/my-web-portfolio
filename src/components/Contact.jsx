import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { CiPaperplane } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="absolute top-32 text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
        How to get In Touch With Me!
      </h1>
      <form
        className="flex flex-col p-6 px-10 w-full md:w-1/2 md:border-2"
        action="https://getform.io/f/868e8ac1-8001-4bf8-a83c-9fa8be7ba595"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="mt-4 p-2 bg-transparent border-b-2 text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="my-4 p-2 bg-transparent border-b-2 text-white focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 bg-transparent border-b-2 text-white focus:outline-none"
        />
        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
          <span className="pr-2">Send</span> <CiPaperplane />
        </button>
      </form>
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
