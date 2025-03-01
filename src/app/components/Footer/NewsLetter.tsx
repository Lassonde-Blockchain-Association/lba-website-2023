import React from "react";
import Logo from "../../../../public/logo.png";
import Link from "next/link";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";


const toggleHome = () => {
  scroll.scrollToTop();
};


const NewsLetter = () => {
  return (
<div className="relative w-full">
  <div className="flex flex-col items-start gap-3 md:gap-4 z-50 ml-8 md:ml-24 w-full">
    <div className="flex items-center w-full">
      <div className="flex flex-col items-center">
        <LinkS to="/" onClick={toggleHome} duration={500} className="flex flex-col items-center">
          <Image
            alt="logo"
            src={Logo}
            className="cursor-pointer transform duration-150 h-[150px] w-[150px] hover:h-[180px] hover:w-[180px]"
          />
          <span className="mt-2 text-lg md:text-3xl font-semibold text-center">Lassonde Blockchain Association</span>
        </LinkS>
      </div>
      <div className="absolute right-0 mr-8">
        <p className="text-lg md:text-xl font-medium italic text-gray-300" style={{ fontFamily: 'Dancing Script, cursive' }}>We are always looking for new talent,</p>
        <p className="text-lg md:text-xl font-medium italic text-gray-300" style={{ fontFamily: 'Dancing Script, cursive' }}>consider joining us to further explore Blockchain technology in York University!</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default NewsLetter;



