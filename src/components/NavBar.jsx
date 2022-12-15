import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "about",
      link: "about",
    },
    {
      id: 3,
      name: "services",
      link: "services",
    },
    {
      id: 6,
      name: "portfolio",
      link: "portfolio",
    },
    {
      id: 7,
      name: "experience",
      link: "experience",
    },
    {
      id: 8,
      name: "contact",
      link: "contact",
    },
  ];
  return (
    <nav className="text-pink md:bg-purple absolute inset-x-0 bottom-0">
      <ul className="hidden md:flex justify-center p-6 lg:p-8">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="cursor-pointer uppercase px-6 hover:scale-110 duration-200"
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointe absolute z-10 top-6 right-6 ${
          nav ? "rotate-90" : "-rotate-180 text-purple"
        } duration-500 md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul
        className={`flex flex-col justify-center items-center w-full h-screen bg-purple ${
          nav ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 md:hidden `}
      >
        {links.map(({ id, name, link }) => (
          <li key={id} className="px-4 cursor-pointer uppercase py-6 text-2xl">
            <Link onClick={() => setNav(!nav)} to={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
