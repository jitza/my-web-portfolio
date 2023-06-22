import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiMailSend, BiCodeBlock } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import logo from "../assets/Logos/3.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      icon: IoHome,
      link: "#home",
    },
    {
      id: 2,
      name: "about",
      icon: BsPersonLinesFill,
      link: "#about",
    },
    {
      id: 3,
      name: "services",
      icon: VscTools,
      link: "#services",
    },
    {
      id: 6,
      name: "portfolio",
      icon: AiFillFolderOpen,
      link: "#portfolio",
    },
    {
      id: 7,
      name: "experience",
      icon: BiCodeBlock,
      link: "#experience",
    },
    {
      id: 8,
      name: "contact",
      icon: BiMailSend,
      link: "#contact",
    },
  ];
  return (
    <div className="w-full h-28 flex justify-end items-center fixed z-10 bg-teal-500">
      <ul className="hidden md:flex px-20 ">
        <img
          src={logo}
          className="absolute left-24 top-0"
          width="300"
          height="400"
        />
        {links.map(({ id, name, link, icon: Icon }) => (
          <li
            key={id}
            className="px-8 cursor-pointer uppercase font-medium text-white hover:scale-105 duration-200"
          >
            <a href={link}>{Icon && <Icon size={25} />}</a>
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
        <ul className="w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
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
