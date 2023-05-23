import React from "react";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col md:grid grid-cols-2 grid-flow-row">
        <section>
          <img
            src={myProfile}
            alt="myProfile"
            className="h-96 p-6 md:absolute md:-translate-y-24"
          />
        </section>
        <section className="grid grid-row-4 gap-3">
          <h1 className="text-6xl font-bold md:text-7xl">Jenny Itza</h1>
          <h2 className="text-xl font-bold uppercase">Front End Developer</h2>
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
        </section>
      </div>
    </div>
  );
};
export default Home;
