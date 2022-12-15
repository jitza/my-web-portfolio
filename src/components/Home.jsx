import React from "react";
import ReactCurvedText from "react-curved-text";
import StackProfile from "./StackProfile";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.jpeg";

const Home = () => {
  return (
    <div className="bg-pink h-screen w-full flex justify-center items-center">
      <div className="invisible md:visible absolute top-4 right-4">
        <ReactCurvedText
          width={180}
          height={170}
          cx={85}
          cy={87}
          rx={65}
          ry={61}
          startOffset={0}
          reversed={true}
          text="Jenny Emerita Itza Front End Developer"
          textProps={{
            style: { fontSize: 24, fontFamily: "serif" },
          }}
          textPathProps={{ style: { fill: "#1f0322" } }}
          tspanProps={null}
          ellipseProps={null}
          svgProps={360}
        />
        <h1 className="invisible md:visible text-5xl text-purple absolute top-16 right-20">
          JI
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:grid grid-cols-2 grid-flow-row">
        <img
          src={myProfile}
          alt="myProfile"
          className="h-96 shadow-purple shadow-2xl md:hidden"
        />
        <div className="invisible md:visible">
          <StackProfile />
        </div>
        <div className="grid grid-row-3 gap-3">
          <h1 className="text-5xl text-purple font-serif md:text-7xl">
            Jenny Itza
          </h1>
          <div className="bg-purple h-2 w-72" />
          <h2 className="text-lg font-bold text-purple uppercase">
            Front End Developer
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
