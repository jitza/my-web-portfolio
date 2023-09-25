import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const Experience = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section>
        <h1 className="text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
          Tech I've Work With
        </h1>
        <div class="pt-6 uppercase font-bold md:flex flex-col-20 ">
          <ul>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2"> html</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2"> js</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">c++</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">sql</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2"> css</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">github</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">react js</sapn>
            </li>
          </ul>
          <ul>
            {" "}
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2"> vue js</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2"> tailwind css</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">graph ql</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">postgres</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500 md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">docker</sapn>
            </li>
            <li class="p-2 flex items-center bg-pink-500 text-white md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">mui</sapn>
            </li>
            <li class="p-2 flex items-center bg-white text-pink-500  md:p-4">
              <MdDoubleArrow />
              <sapn class="pl-2">sass</sapn>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
