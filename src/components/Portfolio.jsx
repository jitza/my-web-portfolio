import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import hangman_game from "../assets/projects/hangman_game.jpg";
import shooting_game from "../assets/projects/shooting_game.jpg";
import cafeteria from "../assets/projects/cafeteria.png";
import photobook from "../assets/projects/photobook.jpg";
import charts from "../assets/projects/charts.png";
import focFinal from "../assets/projects/focFinal.jpg";
import smiley_face from "../assets/projects/smiley_face.jpg";
import { EffectCoverflow, Pagination, Keyboard, Autoplay } from "swiper";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Hangman Game",
      img: hangman_game,
      link: "https://github.com/jitza/Hangman.git",
    },
    {
      id: 2,
      name: "Shooting Game",
      img: shooting_game,
      link: "https://github.com/jitza/ShootingGameVol1.git",
    },
    {
      id: 3,
      name: "Cafeteria Simulator",
      img: cafeteria,
      link: "https://github.com/jitza/CafeteriaSimulator.git",
    },
    {
      id: 4,
      name: "Photo Book",
      img: photobook,
      link: "https://github.com/jitza/Photobook",
    },
    {
      id: 5,
      name: "Charts",
      img: charts,
      link: "https://github.com/jitza/Charts.git",
    },
    {
      id: 6,
      name: "FOC Final",
      img: focFinal,
      link: "https://github.com/jitza/foc-final-web-project",
    },
    {
      id: 7,
      name: "Smiley Face",
      img: smiley_face,
      link: "https://github.com/jitza/SmileyFace",
    },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#fff",
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        keyboard={{ enabled: true }}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
      >
        {projects.map(({ id, name, img, link }) => (
          <SwiperSlide>
            <a href={link}>
              <img src={img} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="absolute bottom-10 text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl">
        My Personal Work
      </h1>
    </div>
  );
};

export default Portfolio;
