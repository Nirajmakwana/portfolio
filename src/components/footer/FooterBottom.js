import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";
import {
  MyEmail,
  MyGithub,
  MyLinkedin,
  MyName,
  MyNumber,
  NavBarLinksData,
} from "../../constants";
import { logo } from "../../assets/index";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-12 mt-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200/60 dark:border-slate-800/60">
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full" src={logo} alt="Niraj Makwana Logo" />
          <div>
            <h3 className="font-titleFont font-bold text-slate-900 dark:text-white text-base">
              {MyName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Senior Full Stack Developer
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NavBarLinksData.map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={MyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href={MyGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${MyNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 flex items-center justify-center transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${MyEmail}`}
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© {currentYear} {MyName}. Designed & engineered with React & Tailwind CSS.</p>

        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <FiArrowUp className="w-3.5 h-3.5" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterBottom;