import React from "react";
import { IconType } from "react-icons";
import {
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";

interface DynamicSocialLinkProps {
  key: number;
  iconsDataLength: number;
  iconName: string;
  socialLinkTitle: string;
  url: string;
  textClass?: string;
  iconClass?: string;
  containerClass?: string; // Add containerClass property
}

const iconMap: { [key: string]: IconType } = {
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoGithub,
};

const SocialLink = ({
  key,
  iconsDataLength,
  iconName,
  socialLinkTitle,
  url,
  textClass,
  iconClass,
  containerClass, // Include containerClass in the props
}: DynamicSocialLinkProps) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <div
      className={`md:w-full h-full pt-3 flex flex-col items-center justify-center hover:bg-white hover:text-blue-950 md:border-b-0 border-b-8  ${
        key < iconsDataLength - 1 ? "" : ""
      } ${key % 2 == 0 ? "" : ""} ${containerClass}`} // Apply containerClass
    > 
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer" 
        className={`w-full md:h-10 h-auto flex items-center justify-center text-4xl md:text-6xl ${textClass}`} // Adjust text size for responsive view
      > 
        <IconComponent className={`text-6xl md:h-10 md:text-9x1${iconClass}`} />{" "}
        {/* Adjust icon size for responsive view */}
      </a>
      <p className="text-sm md:text-base mb-1">{socialLinkTitle}</p>{" "}
      {/* Adjust text size for responsive view */}
    </div>
  );
};

export default SocialLink;
