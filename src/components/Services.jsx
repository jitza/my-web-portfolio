import React from "react";
import graphicDesign from "../assets/graphicDesign.png";
import gameDevelopment from "../assets/gameDevelopment.png";
import webDevelopment from "../assets/webDevelopment.png";

const Services = () => {
  const services = [
    { id: 1, name: "Graphic Design", img: graphicDesign },
    { id: 2, name: "Web Development", img: webDevelopment },
    { id: 3, name: "Game Development", img: gameDevelopment },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
      <section>
        <h1 className="text-xl font-bold uppercase underline underline-offset-8 py-6 text-center md:text-2xl">
          What I do
        </h1>
        <div className="grid grid-row-3 gap-4 md:flex justify-evenly">
          {services.map(({ id, name, img }) => (
            <div
              key={id}
              className="border-8 border-white rounded-lg p-4 md:m-4 hover:scale-105 duration-200"
            >
              <img src={img} alt="services" className="h-16 px-16 md:h-28" />
              <div className="text-center font-medium pt-2 md:font-bold text-xl">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
