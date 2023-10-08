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
];

const Footer = () => {
  return (
    <div className="h-[80vh] overflow-hidden text-white flex-col flex justify-end">
      {/* <div className="fixed inset-x-0 bottom-0 h-4/6"> */}
      <div className="h-4/6 inset-x-0">
        <NewsLetter />
        <div className="flex w-full border-solid border-white border-t-8 h-2/5 items-center justify-center">
          {iconsData.map((data, index) => (
            <SocialLink
              key={index}
              iconName={data.iconName}
              socialLinkTitle={data.socialLinkTitle}
              url={data.url}
              hasRightBorder={index < iconsData.length - 1}
            />
          ))}
        </div>
        <ScrollingBar />
        <p className="text-center mt-3 tracking-wide">
          lassondeblockchain © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
