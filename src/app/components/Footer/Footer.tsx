"use client";
import React from "react";

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
    url: "https://github.com/Lassonde-Blockchain-Association/lba-website-2023",
  },
];

const Footer = () => {
  function determineIfRightBorder(index: number): boolean {
    if (window.innerWidth < 768) {
      return index % 2 == 0;
    } else {
      return index < iconsData.length - 1;
    }
  }

  return (
    <div
      id="footer"
      className=" md:h-[80vh] h-[100vh] overflow-hidden text-white flex-col flex justify-end"
    >
      {/* <div className="fixed inset-x-0 bottom-0 h-4/6"> */}
      <div className="md:h-4/6 h-5/6 inset-x-0">
        <NewsLetter />
        <div className="md:flex md:justify-center grid grid-cols-2 grid-rows-2 w-full border-solid border-white border-t-8 md:border-b-8 h-2/5 items-center ">
          {iconsData.map((data, index) => (
            <SocialLink
              key={index}
              iconName={data.iconName}
              socialLinkTitle={data.socialLinkTitle}
              url={data.url}
              hasRightBorder={determineIfRightBorder(index)}
              textClass="text-xs sm:text-base" // Added classes for smaller text size on small screens
            />
          ))}
        </div>
        <ScrollingBar />
        <p className="text-center mt-3 tracking-wider">
          Lassonde Blockchain Association &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
