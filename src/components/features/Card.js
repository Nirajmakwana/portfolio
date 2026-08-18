import React from "react";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="portfolioCard flex flex-col justify-between group">
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold font-titleFont text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-3">
          {title}
        </h3>

        {/* Service Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Card;