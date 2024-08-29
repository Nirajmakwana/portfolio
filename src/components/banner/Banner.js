import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { MySkills } from '../../constants';
const Banner = () => {
  return (
    <div className='border-b-black pb-20 border-b-[1px]'>
    <section
      id="home"
      className="w-full pt-10  flex flex-col gap-10 xl:gap-0 lgl:flex-row items-start font-titleFont "
    >
      <LeftBanner />
     <RightBanner />
    </section>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className='w-full'>
          <h2 className="text-base uppercase font-titleFont xs:mt-10 mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid xs:grid-cols-3  md:grid-cols-4 mdl:grid-cols-5 lgl:grid-cols-12 gap-4">
            {MySkills.map((item) => {
              return (
                <div
                  key={item.name}
                  className="bannerIcon group p-10"
                  title="React"
                >
                  <div>
                    <div className="flex justify-center">
                      {item.Icon !== "" ? <item.Icon /> : ""}
                    </div>
                    <p className="text-xs text-center capitalize group-hover:text-designColor text-gray-400 flex items-center gap-2 text-ellipsis">
                      {item.name}
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
}

export default Banner