import React from "react";
import ReactCurvedText from "react-curved-text";
import StackProfile from "./StackProfile";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.jpeg";
import myProfileimg from "../assets/myProfile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-primary h-screen w-full flex justify-center items-center">
      {/* <div className="hidden md:absolute top-4 right-4">
        <ReactCurvedText
          width={180}
          height={170}
          cx={85}
          cy={87}
          rx={66}
          ry={61}
          startOffset={0}
          reversed={true}
          text="Jenny Emerita Itza Interactive Developer"
          textProps={{
            style: { fontSize: 24, fontFamily: "serif" },
          }}
          textPathProps={{ style: { fill: "#7b0d1e" } }}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
        <h1 className="hidden md:text-5xl text-secondary absolute top-16 right-20">
          JI
        </h1>
      </div> */}
      <div className="flex flex-col gap-8 md:grid grid-cols-2 grid-flow-row">
        <div className="flex justify-center mt-20 md:hidden">
          <img
            src={myProfile}
            alt="myProfile"
            className="shadow-secondary shadow-2xl rounded-lg"
            width="300"
          />
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src={myProfileimg}
            alt="myProfile"
            className="h-96 absolute -translate-y-24"
          />
        </div>
        <div className="grid grid-row-4 gap-4">
          <h1 className="text-6xl text-secondary font-bold md:text-7xl">
            Jenny Itza
          </h1>
          <div className="bg-secondary h-2  w-64 md:w-80" />
          <h2 className="text-xl font-bold text-secondary uppercase">
            Front End Developer
          </h2>
          <SocialLinks />
          <div className="hidden md:flex">
            <Link
              to="about"
              className="group text-white w-fit px-6 py-2 flex items-center rounded-md bg-rose-500 cursor-pointer hover:bg-rose-700"
            >
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
