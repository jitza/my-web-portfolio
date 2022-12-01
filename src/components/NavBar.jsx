import React from "react";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 6,
      link: "Portfolio",
    },
    {
      id: 7,
      link: "Experience",
    },
    {
      id: 8,
      link: "Contact",
    },
  ];
  return (
    <div className="bg-purple text-pink absolute inset-x-0 bottom-0 p-8">
      <ul className="flex justify-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer uppercase px-4 hover:scale-110 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
