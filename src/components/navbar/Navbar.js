import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";
import { MyGithub, MyLinkedin, MyName, NavBarLinksData } from "../../constants";
import Title from "../layouts/Title";
import { NavigateToUrl } from "../GlobalFuncation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <Link
          className="cursor-pointer"
          to={NavBarLinksData[0].link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img
            style={{ borderRadius: "100px", height: "70px" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {NavBarLinksData.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <Title des={MyName} />
              </div>
              <ul className="flex flex-col gap-4">
                {NavBarLinksData.map((item) => (
                  <li
                    key={item.id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
