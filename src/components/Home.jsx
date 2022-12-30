import React from "react";
import ReactCurvedText from "react-curved-text";
import StackProfile from "./StackProfile";
import SocialLinks from "./SocialLinks";
import myProfile from "../assets/myProfile.jpeg";
import myProfileCut from "../assets/myProfileCut.jpeg";

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
        <div className="flex justify-center mt-8">
          <img
            src={myProfileCut}
            alt="myProfile"
            className="shadow-secondary shadow-2xl"
            width="300"
          />
        </div>
        <div className="grid grid-row-3 gap-3">
          <h1 className="text-5xl text-secondary font-semibold md:text-7xl">
            Jenny Itza
          </h1>
          <div className="bg-secondary h-2 w-80" />
          <h2 className="text-lg font-bold text-secondary uppercase">
            Front End Developer
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
