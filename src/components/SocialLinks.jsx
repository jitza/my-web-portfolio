import React from "react";
import { BsFacebook, BsInstagram, BsGithub, BsSnapchat } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <BsGithub />
        </>
      ),
      href: "https://github.com/jitza",
    },
    {
      id: 2,
      child: (
        <>
          <BsFacebook />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100022001766244&mibextid=LQQJ4d",
    },
    {
      id: 3,
      child: (
        <>
          <BsInstagram />
        </>
      ),
      href: "https://instagram.com/itzjitza?igshid=YmMyMTA2M2Y=",
    },
    {
      id: 4,
      child: (
        <>
          <FaSnapchat />
        </>
      ),
      href: "https://www.snapchat.com/add/iamjitza?share_id=RqX8yo85Qmq6wcYtXllfCA&locale=en_US",
    },
    {
      id: 5,
      child: (
        <>
          <MdEmail />
        </>
      ),
      href: "mailto:jennyitza06@gmail.com",
    },
  ];
  return (
    <ul className="flex flex-row gap-3 text-xl cursor-pointer">
      {links.map(({ id, child, href }) => (
        <li key={id} className="hover:scale-110 duration-200">
          <a
            href={href}
            target="_blank"
            className="text-gray-500 hover:text-white"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
