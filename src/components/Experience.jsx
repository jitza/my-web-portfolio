import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import experienceBg from "../assets/experienceBg.png";

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
      name: "react js",
    },
    {
      id: 6,
      name: "vue js",
    },
    {
      id: 7,
      name: "tailwind",
    },
  ];

  const experiences2 = [
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
    {
      id: 8,
      name: "graph ql",
    },
    {
      id: 9,
      name: "postgre sql",
    },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="absolute top-28 text-xl font-heading font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
        Tech I've Work With
      </h1>
      <div className="animated-right md:relative flex justify-center items-center">
        <img
          src={experienceBg}
          alt="experiences"
          className="hidden md:flex"
          width={1200}
        />
        <div className="uppercase font-bold absolute grid grid-cols-2 gap-10 md:text-2xl">
          <ul>
            {experiences.map(({ id, name }) => (
              <li key={id}>
                <div className="flex items-center p-4">
                  <MdDoubleArrow />
                  {name}
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {experiences2.map(({ id, name }) => (
              <li key={id} className="flex justify-center">
                <div className="flex items-center p-4">
                  <MdDoubleArrow />
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
