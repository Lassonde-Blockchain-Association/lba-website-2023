"use client";

import { useEffect, useState } from "react";

const Landing = () => {
  const scrollToMission = () => {
    window.scrollTo({
      top: window.innerHeight + 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="Landing h-[100vh] relative flex flex-col justify-end pb-10">
      <div className="MainContent">
        <div className=" pb-[3%] ml-16 align-center mt-20">
          <span className="text-white text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            LASSONDE
            <br />
          </span>
          <span className="text-rose-300 text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            BLOCKCHAIN
            <br />
          </span>
          <span className="text-white text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-saira_extra_condensed">
            ASSOCIATION
          </span>
        </div>
        <div className="BottomSection select-none whitespace-nowrap align-bottom mb-20 ml-16 mr-20 flex">
          <a
            href="https://discord.gg/YRdu7zeb8g"
            className="my-auto float-left select-none text-xl border-white text-white box-border h-16 w-64 p-4 border-4 inline-block 
      rounded-full text-center hover:bg-white transition ease-in-out duration-500 hover:scale-110 hover:text-indigo-950 mr-4 font-alata"
          >
            Join Discord
          </a>
          <div className="Line1 w-[80%] border-2 border-white mx-auto my-auto hidden sm:hidden md:block lg:block"></div>
          <button
            className="my-auto float-right box-border border-2 border-transparent p-2 w-16 h-16 rounded-full bg-white ml-4 hover:bg-slate-300 hidden sm:hidden md:block lg:block"
            onClick={scrollToMission}
          >
            <svg
              // className="my-auto float-right box-border border-2 border-transparent p-2 w-16 h-16 rounded-full bg-white ml-4 "
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                fill="#1E1B4B"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
