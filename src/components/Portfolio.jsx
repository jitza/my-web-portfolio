import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import shooting_game from "../assets/projects/shooting_game.jpg";
import hangman_game from "../assets/projects/hangman_game.jpg";
import photo_book from "../assets/projects/photo_book.jpg";
import digital_clock from "../assets/projects/digital_clock.jpg";
import notepad_with_translator from "../assets/projects/notepad_with_translator.jpg";
import notepad_with_st_file from "../assets/projects/notepad_with_st_file.jpg";
import smiley_face from "../assets/projects/smiley_face.jpg";
import charts from "../assets/projects/charts.jpg";
import final_foc from "../assets/projects/final_foc.jpg";
import cafeteria_simulator from "../assets/projects/cafeteria_simulator.jpg";
import vb_skills from "../assets/projects/vb_skills.png";
import sims from "../assets/projects/sims.png";
import sims2 from "../assets/projects/sims2.png";
import chartsVid from "../assets/projects_vid/charts.mp4";
import shooting_game_vid from "../assets/projects_vid/shooting_game.mp4";
import hangman from "../assets/projects_vid/hangman.mp4";
import foc from "../assets/projects_vid/foc_final.mp4";
import clock from "../assets/projects_vid/clock.mp4";
import vb_skills_web from "../assets/projects_vid/vb_skills_web.mp4";
import simsVid from "../assets/projects_vid/simsVid.mp4";
import { EffectCoverflow, Pagination, Keyboard, Autoplay } from "swiper";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Hangman Game",
      img: hangman_game,
      vid: hangman,
      description: "A classic word-guessing game where players try to identify a hidden word by suggesting letters within a limited number of attempts.",
      link: "https://github.com/jitza/Hangman.git",
    },
    {
      id: 2, 
      name: "Shooting Game",
      img: shooting_game,
      vid: shooting_game_vid,
      description: "An action-packed shooting game where players navigate through levels, aiming to hit targets and avoid obstacles to achieve high scores.",
      link: "https://github.com/jitza/ShootingGameVol1.git",
    },
    // {
    //   id: 3,
    //   name: "Shooting Game vol2",
    //   img: shooting_game_2,
    //   link: "https://github.com/jitza/ShootingGameVol2.git", 
    // },
    {
      id: 4,
      name: "Cafeteria Simulator",
      img: cafeteria_simulator,
      description: "A simulation of a cafeteria where the total bill is automatically calcuated for all the different universities that attended an event.",
      link: "https://github.com/jitza/CafeteriaSimulator.git",
    },
    {
      id: 5,
      name: "Photo Book",
      img: photo_book,
      description: "An application that allows users to create and manage a digital photo album, organizing images into customizable albums with captions and tags.", 
      link: "https://github.com/jitza/Photobook",
    },
    {
      id: 6,
      name: "Notepad with Statistics File Generator",
      img: notepad_with_st_file,
      description: "A simple notepad application that includes a feature to generate a statistics file, providing insights into word count, character count, and other text metrics.",
      link: "https://github.com/jitza/NotepadStatisticsFile",
    },
    {
      id: 7,
      name: "Charts",
      img: charts,
      vid: chartsVid,
      description: "A data visualization tool that enables users to create various types of charts and graphs to represent data sets effectively.",
      link: "https://github.com/jitza/Charts.git",
    },
    {
      id: 8,
      name: "Notepad with Translator",
      img: notepad_with_translator,
      description: "A notepad application that integrates a translation feature, allowing users to translate selected text into different languages directly within the app.",
      link: "https://github.com/jitza/NotepadWithTranslation",
    },
    {
      id: 9,
      name: "FOC Final",
      img: final_foc,
      vid: foc,
      description: "Final project for the Fundamentals of Computing course, showcasing a website with the differenct concepts learned throughout the course.",
      link: "https://github.com/jitza/foc-final-web-project",
    },
    {
      id: 10,
      name: "Smiley Face",
      img: smiley_face,
      description: "A simple graphical application that displays a movable smiley face, demonstrating basic drawing and user interface skills.",
      link: "https://github.com/jitza/SmileyFace",
    },
    {
      id: 11,
      name: "Digital Clock",
      img: digital_clock,
      vid: clock,
      description: "A digital clock application that displays the current time in hours, minutes, and seconds, with options for different time formats and styles.",
      link: "https://github.com/jitza/DigitalClock",
    },
    {
      id: 12,
      name: "VB Skills Web Version",
      img: vb_skills,
      vid: vb_skills_web,
      description: "A web-based version of a VB Skills application, showcasing various volleyaball skills.",
      link: "https://snazzy-custard-4db215.netlify.app/",
    },
    {
      id: 13,
      name: "SIMS",
      img: sims2,
      vid: simsVid,
      description: "A student information management system that allows users to manage and organize student data effectively. (Still in development)",
      link: ""
    },
  ];

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <h1 className="absolute top-20 font-heading text-xl font-bold uppercase underline underline-offset-8 text-center md:text-2xl md:top-20">
        My Personal Work
      </h1>
      <Swiper
        className="animated-left"
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
        {projects.map(({ id, name, img, link, vid, description}) => (
          <SwiperSlide className="relative" key={id}>
            <a href={link} target="_blank">
              {vid ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={vid} type="video/mp4" />
                </video>
              ) : (
                <img src={img} />
              )}
              <div className="slide-caption">
                <div className="text-sm font-semibold text-teal-400">{name}</div>
                <p className="text-xs opacity-75">{description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
