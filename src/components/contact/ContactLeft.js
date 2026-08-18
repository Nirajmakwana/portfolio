import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import {
  MyEmail,
  MyGithub,
  MyLinkedin,
  MyName,
  MyNumber,
  MyFormattedPhone,
  MyLocation,
} from "../../constants";
import MyResumePdf from "../../assets/Niraj-Makwana.pdf";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-2/5 flex flex-col justify-between gap-8 portfolioCard">
      <div className="flex flex-col gap-6">
        <div>
          <span className="sectionTitlePill !mb-2 text-[10px]">
            Direct Channels
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-titleFont text-slate-900 dark:text-white">
            {MyName}
          </h3>
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
            Senior Full Stack Developer
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          I am currently open to senior frontend and full-stack engineering roles, high-impact consulting projects, and technical leadership opportunities. Feel free to reach out via form, email, or WhatsApp.
        </p>

        {/* Contact Info Items */}
        <div className="space-y-4 pt-2">
          <a
            href={`mailto:${MyEmail}`}
            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform">
              <FiMail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-semibold">Email Address</p>
              <p className="font-medium text-slate-900 dark:text-white">{MyEmail}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${MyNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
              <FaWhatsapp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-semibold">WhatsApp & Phone</p>
              <p className="font-medium text-slate-900 dark:text-white">{MyFormattedPhone}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <FiMapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-semibold">Location</p>
              <p className="font-medium text-slate-900 dark:text-white">{MyLocation} (Open to Global Remote)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Socials & Resume */}
      <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <a
            href={MyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Niraj Makwana LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={MyGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Niraj Makwana GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`https://wa.me/${MyNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Niraj Makwana WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <a
          href={MyResumePdf}
          download="Niraj-Makwana-Resume.pdf"
          className="w-full secondaryBtn text-center"
          aria-label="Download Niraj Makwana CV"
        >
          <FiDownload className="w-4 h-4" />
          <span>Download Formal Resume (PDF)</span>
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
