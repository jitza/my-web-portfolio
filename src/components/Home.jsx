import React from "react";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.jpeg";
import myProfileimg from "../assets/myProfile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
      <div className="flex flex-col gap-8 md:grid grid-cols-2 grid-flow-row">
        <div className="flex justify-center md:hidden">
          <img
            src={myProfile}
            alt="myProfile"
            className="rounded-lg"
            width="280"
          />
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src={myProfileimg}
            alt="myProfile"
            className="h-96 absolute -translate-y-24"
          />
        </div>
        <div className="grid grid-row-4 gap-3">
          <h1 className="text-6xl font-bold md:text-7xl">Jenny Itza</h1>
          <h2 className="text-xl font-bold uppercase">Front End Developer</h2>
          <SocialLinks />
          <div className="hidden md:flex mt-2">
            <a
              href="#portfolio"
              className="cursor-pointer group text-white w-fit px-6 py-2 flex items-center rounded-md bg-rose-500 hover:bg-rose-700"
            >
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
