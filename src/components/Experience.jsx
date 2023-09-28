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
        {/* <ul className="uppercase font-bold">
          <li>
            <MdDoubleArrow />
            html
          </li>
          <li>
            <MdDoubleArrow />
            js
          </li>
          <li>
            <MdDoubleArrow />
            c++
          </li>
          <li>
            <MdDoubleArrow />
            sql
          </li>
          <li>
            <MdDoubleArrow />
            css
          </li>
          <li>
            <MdDoubleArrow />
            github
          </li>
          <li>
            <MdDoubleArrow />
            react js
          </li>
          <li>
            <MdDoubleArrow />
            vue js
          </li>
          <li>
            <MdDoubleArrow />
            tailwind css
          </li>
          <li>
            <MdDoubleArrow />
            graph ql
          </li>
          <li>
            <MdDoubleArrow />
            postgres
          </li>
          <li>
            <MdDoubleArrow />
            docker
          </li>
          <li>
            <MdDoubleArrow />
            mui
          </li>
          <li>
            <MdDoubleArrow />
            sass
          </li>
        </ul> */}
      </section>
    </div>
  );
};

export default Experience;
