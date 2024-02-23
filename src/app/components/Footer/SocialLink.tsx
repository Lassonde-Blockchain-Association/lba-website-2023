import React from "react";
import { IconType } from "react-icons";
import {
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

interface DynamicSocialLinkProps {
  iconName: string;
  socialLinkTitle: string;
  url: string;
  hasRightBorder: boolean;
  textClass?: string;
  iconClass?: string;
  containerClass?: string; // Add containerClass property
}

const iconMap: { [key: string]: IconType } = {
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
};

const SocialLink = ({
  iconName,
  socialLinkTitle,
  url,
  hasRightBorder,
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
      className={`w-1/3 h-full flex flex-col items-center justify-center hover:bg-white hover:text-blue-950 ${
        hasRightBorder ? "border-r-4" : ""
      } ${containerClass}`} // Apply containerClass
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`z-50 w-full flex items-center justify-center text-4xl md:text-6xl ${textClass}`} // Adjust text size for responsive view
      >
        <IconComponent className={`text-6xl md:text-9xl ${iconClass}`} /> {/* Adjust icon size for responsive view */}
      </a>
      <p className="text-sm md:text-base">{socialLinkTitle}</p> {/* Adjust text size for responsive view */}
    </div>
  );
};

export default SocialLink;
