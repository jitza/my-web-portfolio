import React from "react";
import ReactCurvedText from "react-curved-text";
import StackProfile from "./StackProfile";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div className="bg-pink h-screen w-full flex justify-center items-center">
      <div className="absolute top-4 right-4">
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
      </div>
      <div className="grid grid-cols-2 grid-flow-row">
        <div>
          <StackProfile />
        </div>
        <div className="grid grid-row-3 gap-3">
          <h1 className="text-7xl text-purple font-serif">Jenny Itza</h1>
          <div className="bg-purple h-2 w-72" />
          <h2 className="text-xl font-bold text-purple uppercase">
            Front End Developer
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
