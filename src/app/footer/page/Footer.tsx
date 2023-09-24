"use client"
import React from "react";

import NewsLetter from '../components/NewsLetter';
import SocialLink from "../components/SocialLink";
import ScrollingBar from "../components/ScrollingBar";

const iconsData = [
    { iconName: "BiLogoDiscordAlt", socialLinkTitle: "Discord", url: "https://www.google.com/" },
    { iconName: "BiLogoInstagramAlt", socialLinkTitle: "Instagram", url: "https://www.google.com/" },
    { iconName: "BiLogoLinkedinSquare", socialLinkTitle: "LinkedIn", url: "https://www.google.com/" }
];

const Footer = () => {
    return (
        <div className="w-screen h-screen bg-blue-950 text-white flex-col">
            <div className="fixed inset-x-0 bottom-0 h-4/6">
            <NewsLetter />
            <div className="flex w-full border-solid border-white border-t-8 h-2/5 items-center justify-center">
                {iconsData.map((data, index) => (
                    <SocialLink
                    key={index}
                    iconName={data.iconName}
                    socialLinkTitle={data.socialLinkTitle}
                    url={data.url}
                    hasRightBorder={index < iconsData.length-1}
                    />
                ))}
            </div>
            <ScrollingBar />
            </div>
        </div>
    );
}

export default Footer;