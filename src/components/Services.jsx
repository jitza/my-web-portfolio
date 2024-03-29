import React from "react";
import graphicDesign from "../assets/services/graphicDesign.png";
import appDevelopment from "../assets/services/appDevelopment.png";
import webDevelopment from "../assets/services/webDevelopment.png";

const Services = () => {
  const services = [
    { id: 1, name: "Graphic Design", img: graphicDesign },
    { id: 2, name: "Web Development", img: webDevelopment },
    { id: 3, name: "App Development", img: appDevelopment },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section className="animated-right">
        <h1 className="text-xl font-heading font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
          What I do
        </h1>
        <div className="p-6 grid grid-row-3 gap-6 md:flex justify-evenly">
          {services.map(({ id, name, img }) => (
            <div
              key={id}
              className="border-8 border-double border-gray-500 rounded-lg p-4 md:m-4 hover:scale-105 duration-200"
            >
              <img src={img} alt="services" className="h-16 px-16 md:h-40" />
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
