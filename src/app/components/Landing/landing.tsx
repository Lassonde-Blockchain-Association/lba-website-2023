"use client";

import { useEffect, useState } from "react";

const Landing = () => {
  const scrollToMission = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="Landing h-screen relative shadow flex flex-col justify-between">
      <div className="TopSection flex flex-row h-[20%] justify-between align-top">
        <div className="LassondeBlockChainVariant2 w-[40%]  relative flex flex-row ml-16 mt-12">
          <div className="MainLogo   text-white text-4xl font-bold font-['Inter'] mr-4">
            LBA
          </div>
          <div className="LbaBlog  relative text-white text-opacity-80 text-3xl font-bold font-['Inter']">
            LBA-Blog
          </div>
        </div>
        {/* <div className="flex flex-col">
          <div className="Rectangle1 w-12 h-1 bg-zinc-300 mr-12 mt-8" />
          <div className="Rectangle3 w-8 h-1 bg-zinc-300 ml-4 mt-4" />
          <div className="Rectangle2 w-4 h-1 bg-zinc-300 ml-8 mt-4" />
        </div> */}
      </div>

      <div className="LassondeBlockchainAssociation pb-[7%] ml-16 align-center">
        <span className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          LASSONDE
          <br />
        </span>
        <span className="text-rose-400 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          BLOCKCHAIN
          <br />
        </span>
        <span className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          ASSOCIATION
        </span>
      </div>
      <div className="BottomSection select-none whitespace-nowrap align-bottom mb-20 ml-20 mr-20">
        <a
          href="https://discord.gg/FHtcj7sFkv"
          className="my-auto float-left select-none text-xl border-white text-white font-['Inter'] box-border h-16 w-64 p-4 border-4 inline-block 
          rounded-full text-center hover:bg-white transition ease-in-out duration-500 hover:scale-110 hover:text-indigo-950"
        >
          Join Us
        </a>
        <div className="Line1 w-[60%] border-2 border-white mx-auto my-auto mt-5"></div>
        <button
          className="my-auto float-right box-border border-2 border-transparent p-2 w-16 h-16 rounded-full bg-white hover:bg-slate-300"
          onClick={scrollToMission}
        >
          <svg viewBox="0 0 24 24">
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
  );
};

export default Landing;
