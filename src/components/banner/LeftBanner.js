import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { MyName } from "../../constants";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "React Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">{MyName}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a dynamic front-end developer with over three years and two
          months of experience in designing and maintaining user interfaces for
          web applications. My expertise lies in translating intricate designs
          and wireframes into high-quality, efficient code. With a deep
          understanding of best practices in accessibility, performance
          optimization, and SEO, I am dedicated to creating user-friendly and
          engaging web applications that provide exceptional user experiences
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
