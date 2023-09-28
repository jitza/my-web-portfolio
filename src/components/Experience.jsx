import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import test5 from "../assets/bg/test5.png";

const Experience = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section>
        <h1 className="text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
          Tech I've Work With
        </h1>
        <img src={test5} alt="experiences" className="absolute-center" />
        <div className="pt-6 uppercase font-bold md:flex flex-col-2">
          <ul className="w-80">
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2"> html</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2"> js</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">c++</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">sql</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2"> css</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">github</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">react js</span>
            </li>
          </ul>
          <ul className="w-80">
            {" "}
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2"> vue js</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2"> tailwind css</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">graph ql</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">postgres</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">docker</span>
            </li>
            <li className="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">mui</span>
            </li>
            <li className="p-2 flex items-center bg-white text-pink-500  md:p-4">
              <MdDoubleArrow />
              <span className="pl-2">sass</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
