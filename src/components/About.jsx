import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <section className="animated-left text-center mx-4 pt-8 md:px-32">
        <h1 className="text-xl font-heading font-bold uppercase underline underline-offset-8 md:text-2xl">
          Who Am I
        </h1>
        <div className="p-6 flex flex-col items-center md:text-xl">
          Hello, I am Jenny, a versatile creative professional with expertise in
          web development, graphic design, and app development.{" "}
          <div
            style={{
              maxHeight: isExpanded
                ? `${contentRef.current?.scrollHeight}px`
                : "0px",
            }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div ref={contentRef}>
              <p>
                I have a passion for tackling design challenges, implementing
                innovative web features, and creating applications using a
                variety of development tools and techniques. While my primary
                focus centers on front-end development, I also lend my creative
                talents to the realms of advertising and marketing as a graphic
                designer. My journey has been characterized by active
                involvement in numerous app projects, each contributing to the
                depth and breadth of my knowledge in the field of app
                development. My unwavering commitment to self-improvement fuels
                my passion for continuous skill enhancement and professional
                advancement. I have full confidence in my capacity to utilize my
                expertise and abilities for ongoing personal and career growth.
              </p>
            </div>
          </div>
          <button
            className="flex items-center text-sm w-fit px-2 m-2 rounded-md cursor-pointer text-white bg-rose-500 hover:bg-rose-700"
            onClick={handleClick}
          >
            <span class="pr-1">{isExpanded ? "Show Less" : "Show More"}</span>
            <span>{isExpanded ? <FaChevronUp size={14} /> : ""}</span>
            <span>{!isExpanded ? <FaChevronDown size={14} /> : ""}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

