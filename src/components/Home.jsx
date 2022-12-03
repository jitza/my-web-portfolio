import React from "react";
import MyProfile from "../assets/MyProfile.jpeg";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-pink h-screen w-full ">
      <div className="text-purple font-bold text-xl">
        Jenny Emerita Itza Front End Developer
      </div>
      <div className="flex justify-center">
        <div className="columns-2">
          <div className="bg-purple boder-8">
            <img src={MyProfile} alt="My Profile" className="h-96 p-4" />
          </div>

          <div className="grid grid-rows-5">
            <h1 className="text-7xl text-purple font-serif">Jenny Itza</h1>
            <div className="bg-purple h-1 w-72" />
            <div className="bg-purple h-1 w-72" />
            <h2 className="text-xl font-bold text-purple uppercase">
              Front End Developer
            </h2>
            <div className="flex flex-row">
              <a>
                <BsGithub />
              </a>
              <a>
                <BsFacebook />
              </a>
              <a>
                <BsInstagram />
              </a>
              <a>
                <BsGithub />
              </a>
              <a>
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
