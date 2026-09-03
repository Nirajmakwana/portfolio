import React from "react";
import { bannerImg } from "../../assets/index";
import { SiNodedotjs, SiReact } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-2/5 flex justify-center items-center relative py-6">
      {/* Decorative ambient background glow */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-sky-500/15 dark:bg-sky-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Image Container */}
      <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
        {/* Frame backdrop */}
        <div className="relative rounded-3xl bg-gradient-to-b from-sky-500/20 via-slate-200/50 to-transparent dark:from-sky-500/30 dark:via-slate-800/60 dark:to-transparent border border-slate-200/80 dark:border-slate-700/60 shadow-xl overflow-hidden">
          <img
            className="w-full h-auto max-h-[100%] sm:max-h-[500px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            src={bannerImg}
            alt="Niraj Makwana - Senior React Developer"
            loading="eager"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent rounded-b-2xl pointer-events-none" />
        </div>

   {/* Floating Technical Badge 1 - Top Right */}
<div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2 animate-bounce-subtle">
  <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center text-base">
    <SiReact />
  </div>

  <div>
    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">
      Frontend & Mobile
    </p>
    <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
      React.js & React Native
    </p>
  </div>
</div>

{/* Floating Technical Badge 2 - Bottom Left */}
<div className="absolute -bottom-3 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2">
  <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/60 text-green-600 dark:text-green-400 flex items-center justify-center text-base">
    <SiNodedotjs />
  </div>

  <div>
    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">
      Backend Development
    </p>
    <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
      Node.js & Express
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default RightBanner;