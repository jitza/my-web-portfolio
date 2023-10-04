import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import test6 from "../assets/bg/test6.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      name: "html",
    },
    {
      id: 2,
      name: "js",
    },
    {
      id: 3,
      name: "css",
    },
    {
      id: 4,
      name: "github",
    },
    {
      id: 5,
      name: "react.js",
    },
    {
      id: 6,
      name: "vue.js",
    },
    {
      id: 7,
      name: "tailwind",
    },
    {
      id: 8,
      name: "graph ql",
    },
    {
      id: 9,
      name: "postgresql",
    },
    {
      id: 10,
      name: "c++",
    },
    {
      id: 11,
      name: "node",
    },
    {
      id: 12,
      name: "sql",
    },
    {
      id: 13,
      name: "pinia",
    },
    {
      id: 14,
      name: "mui",
    },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="absolute top-48 text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
        Tech I've Work With
      </h1>
      <section>
        <div className="relative flex justify-center items-center">
          <img src={test6} alt="experiences" />
          <ul className="uppercase font-bold absolute md:text-xl">
            {experiences.map(({ id, name }) => (
              <li key={id} className="flex items-center">
                <MdDoubleArrow />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
