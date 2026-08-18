import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MyName } from "../../constants";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bodyColor-light dark:bg-bodyColor text-slate-700 dark:text-slate-300 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center portfolioCard">
        <span className="sectionTitlePill">404 Error</span>
        <h1 className="text-6xl font-bold font-titleFont text-sky-600 dark:text-sky-400 mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold font-titleFont text-slate-900 dark:text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The requested portfolio page or route does not exist. Let's get you back to the main showcase.
        </p>

        <Link to="/" className="primaryBtn w-full">
          <FiHome className="w-4 h-4" />
          <span>Return to {MyName}'s Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
