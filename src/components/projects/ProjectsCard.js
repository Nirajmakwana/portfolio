import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { NavigateToUrl } from "../GlobalFuncation"

const ProjectsCard = ({
  title,
  des,
  src,
  link,
  tech,
  code,
  WorkLike,
  WorklikeLink,
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      {/* <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div> */}
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {code !== false && code !== undefined && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              )}
              {link !== false && link !== undefined && (
                <span
                  onClick={() => NavigateToUrl(link)}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </span>
              )}
            </div>
          </div>
          {WorkLike !== undefined && (
            <p className="text-sm t tracking-wide mt-3 mb-3 ">
              Work Like:{" "}
              <span
                className="text-designColor cursor-pointer"
                onClick={() => {
                  NavigateToUrl(WorklikeLink);
                }}
              >
                {WorkLike}
              </span>
            </p>
          )}
          <p className="text-sm tracking-wide mt-3 mb-3 ">
            Tech Name: {Array.isArray(tech) && tech.join(", ")}
          </p>
          <ul className="duration-300 text-ellipsis overflow-hidden">
            {Array.isArray(des) &&
              des.map((item, index) => {
                return (
                  <div className="flex items-baseline" key={item + index}>
                    <li className="flex items-start gap-2">
                      <p className="text-sm mb-1 mt-1">&#x21c0;</p>
                      <p className="text-sm mb-1 mt-1"> {item}</p>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
