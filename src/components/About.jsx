import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex items-center bg-gradient-to-b from-slate-900 to-gray-900 text-gray-500">
      <section className="text-center md:px-32">
        <h1 className="text-xl font-bold uppercase underline underline-offset-8 py-8 md:text-2xl">
          About Me
        </h1>
        <p className="px-12 md:text-xl">
          I’m a creative front-end developer, graphic designer and game
          developer; I love to solve design problems, implement innovative web
          features and develop applications with various development tools and
          techniques. Although my work is mainly focused on front-end
          development, as a graphic designer, I’m involved in advertising and
          marketing designs. In addition, game development is a self-taught
          skill I’ve acquired by programming in my free time. I have programmed
          a couple of games that simulate traditional games, and I’ve also
          developed other working prototypes. I am committed to developing my
          skills and exploring every facet of the IT industry.
        </p>
      </section>
    </div>
  );
};
export default About;
