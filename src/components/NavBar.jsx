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
    <div className="flex justify-center items-center w-full h-20 px-4 text-primary bg-secondary fixed md:bottom-0">
      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium text-primary hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer absolute right-6 z-10 text-primary md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary text-primary">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-6 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooths
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
