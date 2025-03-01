"use client";

import { useEffect, useState } from "react";
import { BiLogoGithub } from "react-icons/bi";

const Landing = () => {
  const scrollToMission = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="Landing md:h-screen relative flex flex-col justify-end pb-[1vh] px-6 md:px-16 pt-20 md:pt-24">
      <div className="MainContent">
        <div className="md:pb-[3%] md:ml-16 text-center md:text-right mt-10 pl-0">
          <span className="text-black text-7xl md:text-7xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            LASSONDE
            <br />
          </span>
          <span className="text-rose-500 text-7xl md:text-8xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            BLOCKCHAIN
            <br />
          </span>
          <span className="text-black text-6xl md:text-8xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            ASSOCIATION
          </span>
        </div>

        
<div className="BottomSection select-none whitespace-nowrap align-bottom mt-16 md:mt-0 mb-16 md:mb-20 md:ml-16 md:mr-20 flex justify-start">
  <div className="flex flex-col md:flex-row">
    <a
      href="https://discord.gg/YRdu7zeb8g"
      className="flex items-center justify-center my-auto float-left select-none text-xl border-white text-white box-border h-16 w-64 p-4 border-4 rounded-full text-center hover:bg-white transition ease-in-out duration-500 hover:scale-110 hover:text-indigo-950 md:mr-4 font-alata"
    >
      Join Us
    </a>
    <a
      href="https://github.com/Lassonde-Blockchain-Association"
      className="md:mt-0 mt-4 flex items-center justify-center my-auto float-left select-none text-xl border-white text-white box-border h-16 w-64 p-4 border-4 rounded-full text-center hover:bg-white transition ease-in-out duration-500 hover:scale-110 hover:text-indigo-950 md:mr-4 font-alata"
    >
      <BiLogoGithub size={30}></BiLogoGithub>
      <p className="ml-3">Github</p>
    </a>
  </div>
</div>


      </div>
    </div>
  );
};

export default Landing;
