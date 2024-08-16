import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  MyEmail,
  MyGithub,
  MyLinkedin,
  MyName,
  MyNumber,
} from "../../constants";

const ContactLeft = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${MyNumber}`, "_blank");
  };
  const NavigateToUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">{MyName}</h3>
        <p className="text-lg font-normal text-gray-400">React Developer</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText flex items-center">
            <a href="tel:919033574679">+919033574679</a>
            <FaWhatsapp className="ml-1 cursor-pointer" onClick={handleWhatsAppClick} />
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            <a href={`mailto:${MyEmail}`}>{MyEmail}</a>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span
            className="bannerIcon"
            onClick={() => {
              NavigateToUrl(MyLinkedin);
            }}
          >
            <FaLinkedinIn />
          </span>
          <span
            className="bannerIcon"
            onClick={() => {
              NavigateToUrl(MyGithub);
            }}
          >
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
