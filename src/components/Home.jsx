import React from "react";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.jpeg";
import myProfileimg from "../assets/myProfile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-primary h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-8 md:grid grid-cols-2 grid-flow-row">
        <div className="flex justify-center mt-20 md:hidden">
          <img
            src={myProfile}
            alt="myProfile"
            className="shadow-secondary shadow-2xl rounded-lg"
            width="300"
          />
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src={myProfileimg}
            alt="myProfile"
            className="h-96 absolute -translate-y-24"
          />
        </div>
        <div className="grid grid-row-4 gap-4">
          <h1 className="text-6xl text-secondary font-bold md:text-7xl">
            Jenny Itza
          </h1>
          <div className="bg-secondary h-2  w-64 md:w-80" />
          <h2 className="text-xl font-bold text-secondary uppercase">
            Front End Developer
          </h2>
          <SocialLinks />
          <div className="hidden md:flex">
            <a
              href="#projects"
              className="group text-white w-fit px-6 py-2 flex items-center rounded-md bg-rose-500 cursor-pointer hover:bg-rose-700"
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
