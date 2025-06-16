import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { MyName } from "../../constants";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Developer.",
      "Front-End Developer.",
      "React Developer.",
      "Team Leader.",
      "UI/UX Designer.",
    ],
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
          Hi, I'm <span className="text-designColor capitalize">{MyName}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#fff" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I’m a full-stack developer with a strong focus on building scalable
          and user-friendly web and mobile applications. Skilled in both
          front-end and back-end technologies including React, Next.js, React
          Native, Node.js, and Express. I specialize in turning complex ideas
          into seamless, high-performance digital experiences. Passionate about
          clean code, accessibility, performance, and real-world
          problem-solving. Always learning, growing, and delivering solutions
          that make an impact.I’m a full-stack developer with a strong focus on
          building scalable and user-friendly web and mobile applications.
          Skilled in both front-end and back-end technologies including React,
          Next.js, React Native, Node.js, and Express. I specialize in turning
          complex ideas into seamless, high-performance digital experiences.
          Passionate about clean code, accessibility, performance, and
          real-world problem-solving. Always learning, growing, and delivering
          solutions that make an impact.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
