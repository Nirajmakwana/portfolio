import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import MyResume from "../../../src/assets/Niraj-Makwana.pdf";
import { NavigateToUrl } from "../GlobalFuncation";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <div className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <embed
                src={MyResume}
                key={MyResume}
                type="application/pdf"
                height={"100%"}
                width={"100%"}
                className="xs:hidden lg:block basis-full min-h-screen  h-fit"
              />
              <button
                type="button"
                onClick={()=>{
                  NavigateToUrl(MyResume)
                }}
                className="text-white flex justify-center lg:hidden bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <p className="text-xs text-center capitalize group-hover:text-1fb6ff text-white flex items-center gap-2 text-ellipsis">
                  Open Resume
                </p>
              </button>
              {/* <iframe
                  src={MyResume}
                  key={MyResume}
                  type="application/pdf"
                  height={"100%"}
                  width={"100%"}
                  className="basis-full min-h-screen  h-fit"
                  title="My Resume"
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
