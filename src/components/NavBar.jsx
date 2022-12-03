import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
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
    <nav className="bg-purple text-pink absolute inset-x-0 bottom-0 p-8">
      <ul className="flex justify-center">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="cursor-pointer uppercase px-4 hover:scale-110 duration-200"
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
