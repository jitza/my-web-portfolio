import React from "react";
import MyProfile from "../assets/MyProfile.jpeg";

const Home = () => {
  return (
    <div className="bg-pink h-screen w-full flex justify-center items-center">
      <div>
        <img src={MyProfile} alt="My Profile" className="h-96" />
      </div>
      <div></div>
    </div>
  );
};
export default Home;
