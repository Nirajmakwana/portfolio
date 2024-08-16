import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MyGithub, MyLinkedin, MySkils } from "../../constants";
const Media = () => {
  const NavigateToUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between mb-4">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span
              className="bannerIcon"
              onClick={() => {
                NavigateToUrl(MyLinkedin);
              }}
            >
              <FaLinkedinIn color />
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
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid xs:grid-cols-3  md:grid-cols-4 mdl:grid-cols-5 lgl:grid-cols-5 gap-4">
            {MySkils.map((item) => {
              return (
                <div className="bannerIcon group p-10" title="React">
                  <div>
                    <div className="flex justify-center">
                      {item.Icon !== '' ?  <item.Icon  /> : '' } 
                    </div>
                    <p className="text-xs capitalize group-hover:text-red-500 text-gray-400 flex items-center gap-2 text-ellipsis">
                      {
                        item.name
                      }
                    </p>
                  </div>
                </div>
              );
            })}

            {/* <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
