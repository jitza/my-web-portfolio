import React from "react";
import aboutPhoto from "../assets/aboutPhoto.png";

const About = () => {
  return (
    <div className="bg-pink h-screen w-full">
      <div className="grid grid-cols-2 grid-flow-row">
        <section className="py-60 px-16">
          <h1 className="text-xl font-bold text-purple uppercase underline underline-offset-8 py-4">
            About Me
          </h1>
          <p className="text-purple">
            I’m a creative front-end developer, graphic designer and game
            developer; I love to solve design problems, implement innovative web
            features and develop applications with various development tools and
            techniques. Although my work is mainly focused on front-end
            development, as a graphic designer, I’m involved in advertising and
            marketing designs. In addition, game development is a self-taught
            skill I’ve acquired by programming in my free time. I have
            programmed a couple of games that simulate traditional games, and
            I’ve also developed other working prototypes. I am committed to
            developing my skills and exploring every facet of the IT industry.
          </p>
        </section>
        <section>
          <img src={aboutPhoto} alt="My About Photo" />
        </section>
      </div>
    </div>
  );
};

export default About;
