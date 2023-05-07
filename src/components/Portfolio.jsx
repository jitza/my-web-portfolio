import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import hangman_game from "../assets/projects/hangman_game.png";
import shooting_game from "../assets/projects/shooting_game.png";
import cafeteria from "../assets/projects/cafeteria.png";
import photobook from "../assets/projects/photobook.png";
import charts from "../assets/projects/charts.png";
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
      link: "https://github.com/jitza/CafeteriaSimulator.git",
    },
    {
      id: 5,
      name: "Charts",
      img: charts,
      link: "https://github.com/jitza/Charts.git",
    },
  ];
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
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
    </div>
  );
};

export default Portfolio;
