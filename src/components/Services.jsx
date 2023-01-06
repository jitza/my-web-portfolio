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
    <div className="bg-primary h-screen w-full flex justify-center items-center">
      <section>
        <h1 className="mt-6 text-xl font-bold text-secondary uppercase underline underline-offset-8 py-6 text-center md:text-2xl">
          What I do
        </h1>
        <div className="grid grid-row-3 gap-4 md:flex justify-evenly">
          {services.map(({ id, name, img }) => (
            <div
              key={id}
              className="border-8 border-white rounded-lg p-4 text-secondary md:m-4 hover:bg-rose-300"
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
