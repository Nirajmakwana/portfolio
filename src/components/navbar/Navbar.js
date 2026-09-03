import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { logo } from "../../assets/index";
import {
  dynamicResumeName,
  MyGithub,
  MyLinkedin,
  MyName,
  MyNumber,
  NavBarLinksData,
} from "../../constants";
import { useTheme } from "../../utils/theme";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  return (
    <header
      className={`w-full h-20 sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="flex items-center gap-3 cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          aria-label="Niraj Makwana - Home"
        >
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-sky-500/30 group-hover:border-sky-500 transition-colors"
            src={logo}
            alt="Niraj Makwana Logo"
          />
          <div className="flex flex-col">
            <span className="font-titleFont font-bold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {MyName}
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
              Senior Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {NavBarLinksData.map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  activeClass="active-nav-link"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer py-1.5 px-1 relative focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label={theme === "dark" ? "Switch to Light theme" : "Switch to Dark theme"}
              type="button"
            >
              {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>

            {/* Resume CTA */}
            <a
              href="/Niraj-Makwana.pdf"
              download={dynamicResumeName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Download Niraj Makwana's Resume"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Let's Talk
            </Link>
          </div>
        </nav>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setShowMenu(true)}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Open Navigation Menu"
            aria-expanded={showMenu}
            type="button"
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {showMenu && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end" role="dialog" aria-modal="true">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowMenu(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative w-[85%] max-w-sm h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
                  <div>
                    <h3 className="font-titleFont font-bold text-slate-900 dark:text-white text-base">
                      {MyName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Senior Full Stack Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-label="Close Navigation Menu"
                  type="button"
                >
                  <MdClose className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <ul className="flex flex-col gap-3 py-6">
                {NavBarLinksData.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="text-sky-600 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-950/40"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Footer CTAs & Socials */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <a
                href="/Niraj-Makwana.pdf"
                download={dynamicResumeName}
                className="w-full primaryBtn text-center"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={MyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={MyGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href={`https://wa.me/${MyNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                  aria-label="WhatsApp Contact"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
