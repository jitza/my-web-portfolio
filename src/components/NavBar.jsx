import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      link: "#home",
    },
    {
      id: 3,
      name: "services",
      link: "#services",
    },
    {
      id: 6,
      name: "portfolio",
      link: "#portfolio",
    },
    {
      id: 7,
      name: "experience",
      link: "#experience",
    },
    {
      id: 8,
      name: "contact",
      link: "#contact",
    },
  ];
  return (
    <div className="flex justify-end items-center w-full h-20 text-white bg-slate-900 fixed z-10">
      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer absolute right-6 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-6 text-2xl"
            >
              <a onClick={() => setNav(!nav)} href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
