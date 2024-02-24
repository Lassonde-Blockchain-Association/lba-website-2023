"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import marker from "../../../../public/marker.gif";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

const navlinks = [
  {
    title: "Mission",
    link: "mission",
  },
  {
    title: "Project",
    link: "project",
  },
  {
    title: "Team",
    link: "team",
  },
  {
    title: "Contact",
    link: "footer",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", updateNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const updateNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setScrollNav(true);
      setOpen(false);
    } else {
      setScrollNav(false);
      setOpen(true); // pop out when logo is trigger (to landing page)
    }
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    // old
    // <div className="fixed overflow-hidden py-10 pl-10 flex items-center h-[10vh] w-[100%] z-[100]">
    <div className="fixed overflow-hidden pl-8 md:pl-10 flex items-center h-fit pt-4 w-full z-[90]">
      <div className="mx-auto w-[100%]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 md:gap-4 z-50">

            {/* With Logo Background */}
            {/* <LinkS
              to="/"
              onClick={toggleHome}
              duration={500}
              className="text-white cursor-pointer text-3xl hover:text-orange-300 rounded-lg p-2 bg-white bg-opacity-20 backdrop-blur-xl transform duration-150"
            >
              LBA
            </LinkS>
            <Link
              href="https://lba-blog.vercel.app/"
              className="text-white cursor-pointer text-xl hover:text-orange-300 rounded-lg p-2 bg-white bg-opacity-20 backdrop-blur-xl transform duration-150"
            >
              LBA - Blog
            </Link> */}

            {/* <LinkS
              to="/"
              onClick={toggleHome}
              duration={500}
              className="text-white cursor-pointer text-3xl hover:text-orange-300 transform duration-150"
            >
              LBA
            </LinkS> */}

            <LinkS
              to="/"
              onClick={toggleHome}
              duration={500}
              className=""
            >
              <Image alt="logo" src={Logo} className="cursor-pointer transform duration-150 h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]" />
            </LinkS>
            <span className="text-white text-4xl">/</span>
            <Link
              href="https://lba-blog.vercel.app/"
              className="text-white cursor-pointer text-xl hover:text-orange-300 transform duration-150"
            >
              LBA - Blog
            </Link>
          </div>

          {/* Old Nav Links */}
          {/* navlinks
          <div className="">
            <div className="flex item-basline space-x-4">
              {navlinks.map((link, index) => (
                <LinkS key={index} duration={500} to={link.link}>
                  {link.title}
                </LinkS>
              ))}
            </div>
          </div> */}

          {/* hamburger button*/}
          
          <div className="flex justify-end items-center">
            {open && (
              <div className="fixed inset-0 md:static md:p-4 md:rounded-full md:mx-auto my-auto md:mr-[12%] bg-[#ffffff] bg-opacity-0 md:bg-opacity-20 backdrop-blur-xl z-[100] animate-slide-in drop-shadow-md flex items-center justify-center">
                <div className="flex flex-col md:flex-row">
                  {navlinks.map((link, index) => (
                    <LinkS
                      key={index}
                      to={link.link}
                      duration={1500}
                      smooth={true}
                      className="text-white px-20 md:px-2 py-7 md:py-0 border-b-2 md:border-b-0 md:rounded-2xl hover:bg-white hover:rounded-2xl hover:text-orange-600 transform duration-150 text-center text-4xl md:text-2xl cursor-pointer"
                    >
                      {link.title}
                    </LinkS>
                  ))}
                </div>
              </div>
            )}
            <div className="flex-shrink-0 z-[100] md:z-[90]">
              <button
                type="button"
                onClick={handleMenu}
                className={`inline-flex items-center justify-end rounded-lg transition-transform transform ${open ? "rotate-90 scale-110" : "rotate-0 scale-10"}`}
              >
                <Image alt="marker" src={marker} width={125} height={125} />

                {/* <span className="sr-only ">Open Main Menu</span>
                {open ? (
                  <FaTimes className="text-3xl " />
                ) : (
                  <FaBars className="text-3xl" />
                )} */}

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
