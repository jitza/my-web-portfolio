import React, { useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";
import myAIImage from "../assets/myAIImage.png";
import testProfile from "../assets/testProfile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
  const imageRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      imageRef.current.classList.remove("-translate-y-full");
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col md:grid grid-cols-2 grid-flow-row">
        <section className="overflow-hidden relative">
          <img
            ref={imageRef}
            src={myAIImage}
            alt="myProfile"
            className="h-96 p-6 -translate-y-full transition-transform ease-in duration-1000"
          />
        </section>
        <section className="flex items-center">
          <div className="grid grid-row-4 gap-3">
            <h1 className="text-6xl font-bold md:text-7xl hover:text-rose-500">
              Jenny Itza
            </h1>
            <h2 className="text-xl font-bold uppercase">IT Specialist & Web Developer</h2>
            <SocialLinks />
            <a
              href="#portfolio"
              className="hidden md:flex items-center w-fit px-6 py-2 mt-2 rounded-md cursor-pointer group text-white bg-rose-500 hover:bg-rose-700"
            >
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </section>
      </div>
      <a
        className="hidden md:flex absolute bottom-0 animate-bounce"
        href="#contact"
      >
        <BsChevronDoubleDown size={40} />
      </a>
      <footer className="hidden md:block md:absolute right-4 bottom-4 text-sm text-gray-500 italic">
         "The only way to do great work is to love what you do." ~ Steve Jobs
      </footer>
    </div>
  );
};
export default Home;
