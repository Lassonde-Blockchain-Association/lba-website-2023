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
}: DynamicSocialLinkProps) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <div
      className={`w-1/3 h-full flex items-center justify-center hover:bg-white hover:text-blue-950 ${
        hasRightBorder ? "border-r-4" : ""
      }`}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="z-50 w-full flex items-center justify-center text-6xl"
      >
        <IconComponent className="text-9xl" />
        <p>{socialLinkTitle}</p>
      </a>
    </div>
  );
};

export default SocialLink;
