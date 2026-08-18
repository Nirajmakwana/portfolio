import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  MyEmail,
  MyGithub,
  MyLinkedin,
  MyNumber,
} from "../../constants";

const Media = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h3 className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          Connect with me
        </h3>
        <div className="flex items-center gap-3">
          <a
            href={MyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Visit Niraj Makwana's LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={MyGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Visit Niraj Makwana's GitHub Profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`https://wa.me/${MyNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Chat with Niraj Makwana on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`mailto:${MyEmail}`}
            className="bannerIcon"
            aria-label="Send an email to Niraj Makwana"
            title="Email"
          >
            <FiMail />
          </a>
          <a
            href={`tel:${MyNumber}`}
            className="bannerIcon sm:hidden"
            aria-label="Call Niraj Makwana"
            title="Call"
          >
            <FiPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
