import React from "react";
import { motion } from "framer-motion";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { HighlightSkills } from "../../constants";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col-reverse lgl:flex-row items-center gap-12 lgl:gap-8 justify-between"
      >
        <LeftBanner />
        <RightBanner />
      </motion.div>

      {/* Quick Tech Stack Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 pt-8 border-t border-slate-200/60 dark:border-slate-800/60"
      >
        <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 mb-4 text-center sm:text-left">
          Core Technologies & Ecosystem
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          {HighlightSkills.map(({ name, Icon }) => (
            <div
              key={name}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium shadow-sm hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {Icon && <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;