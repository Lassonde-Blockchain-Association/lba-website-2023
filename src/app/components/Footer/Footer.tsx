"use client";
import React, { useEffect, useState } from "react";

import NewsLetter from "./NewsLetter";
import SocialLink from "./SocialLink";
import ScrollingBar from "./ScrollingBar";

const iconsData = [
  {
    iconName: "BiLogoDiscordAlt",
    socialLinkTitle: "Discord",
    url: "https://discord.gg/FHtcj7sFkv",
  },
  {
    iconName: "BiLogoInstagramAlt",
    socialLinkTitle: "Instagram",
    url: "https://www.instagram.com/lassondeblockchain/",
  },
  {
    iconName: "BiLogoLinkedinSquare",
    socialLinkTitle: "LinkedIn",
    url: "https://www.linkedin.com/company/lassonde-blockchain-association/",
  },
  {
    iconName: "BiLogoGithub",
    socialLinkTitle: "Github",
    url: "https://github.com/Lassonde-Blockchain-Association",
  },
];

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-red-700 z-50 md:h-[95vh] h-[100vh] overflow-xhidden text-white flex-col flex justify-end"
    >
      {/* <div className="fixed inset-x-0 bottom-0 h-4/6"> */}
      <div className="bg-black md:h-4/7 inset-x-0">
        <NewsLetter />                                                                        {/* Adjusted height here to prevent y overflow */}
        <div className="md:h-auto md:flex md:justify-center grid shrink-0 grid-cols-2 grid-rows-2 w-full border-solid border-white border-t-8 md:border-b-8 md:h-2/5 items-center">
          {iconsData.map((data, index) => (
            <SocialLink
              key={index}
              iconsDataLength={iconsData.length}
              iconName={data.iconName}
              socialLinkTitle={data.socialLinkTitle}
              url={data.url}
              textClass="text-xs sm:text-base" // Added classes for smaller text size on small screens
            />
          ))}
        </div>
        <ScrollingBar />
        <p className="text-center tracking-wider">
          Lassonde Blockchain Association &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
