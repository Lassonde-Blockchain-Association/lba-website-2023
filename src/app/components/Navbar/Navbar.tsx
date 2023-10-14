"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import marker from "../../../../public/marker.gif";
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
  const [open, setOpen] = useState(false);

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
    } else {
      setScrollNav(false);
    }
    setOpen(false); // Close the menu when scroll event occurs
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="backdrop-blur-7xl overflow-hidden h-[10vh] w-screen fixed z-[100]">
      <div className="container mx-auto w-[100%]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 z-50 ">
            <LinkS
              to="/"
              onClick={toggleHome}
              duration={500}
              className="text-white cursor-pointer text-3xl"
            >
              LBA
            </LinkS>
            <Link
              href="https://lba-blog.vercel.app/"
              className="text-white cursor-pointer hover:text-orange-500 text-xl"
            >
              LBA - Blog
            </Link>
          </div>

          {/* navlinks */}
          <div className="hidden md:hidden">
            <div className="flex item-basline space-x-4">
              {navlinks.map((link, index) => (
                <LinkS key={index} duration={500} to={link.link}>
                  {link.title}
                </LinkS>
              ))}
            </div>
          </div>
          {/* hamburger button*/}
          <div className="flex lg:block z-50 ">
            <button
              type="button"
              onClick={handleMenu}
              className={` inline-flex items-center justify-center rounded-lg text-white hover:text-white transition-transform transform 
                  ${open ? "rotate-90 scale-110" : "rotate-0 scale-10"}`}
            >
              <Image alt="marker" src={marker} width={125} />
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
      {open ? (
        <div className="backdrop-blur-2xl flex justify-center w-[100%] md:block fixed z-[100]">
          <div className="px-2 h-[100%] pt-2 pb-3 space-y-1 sm:px-3 flex flex-row  justify-evenly items-center">
            {navlinks.map((link, index) => (
              <LinkS
                key={index}
                to={link.link}
                duration={1500}
                smooth={true}
                className="text-white hover:bg-white hover:text-orange-600 text-center text-6xl cursor-pointer"
              >
                {link.title}
              </LinkS>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
