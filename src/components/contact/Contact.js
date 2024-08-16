import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import MyResume from "../../../src/assets/NirajMakwana.pdf";

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
                  className="basis-full min-h-screen  h-fit"
                />
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
