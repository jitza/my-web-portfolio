import React from "react";
import graphicDesign from "../assets/graphicDesign.png";
import appDevelopment from "../assets/appDevelopment.png";
import webDevelopment from "../assets/webDevelopment.png";

const Services = () => {
  const services = [
    { id: 1, name: "Graphic Design", img: graphicDesign },
    { id: 2, name: "Web Development", img: webDevelopment },
    { id: 3, name: "App Development", img: appDevelopment },
  ];
  return (
    <div className="bg-primary h-screen w-full flex justify-center items-center">
      <section>
        <h1 className="mt-6 text-xl font-bold text-secondary uppercase underline underline-offset-8 py-6 text-center md:text-2xl">
          What I do
        </h1>
        <div className="grid grid-row-3 gap-4">
          {services.map(({ id, name, img }) => (
            <div key={id} className="border-8 rounded-lg p-4 text-secondary">
              <img src={img} alt="services" className="h-16 px-16" />
              <div className="text-center font-medium pt-2">{name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
