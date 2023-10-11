"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import marker from "../../../../public/marker.gif";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkS } from "react-scroll";

// import { animateScroll as scroll } from "react-scroll";

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
    link: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrollNav, setScrollNav] = useState(false);

  const updateNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNav);
  }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     // Prevent scrolling down when the mouse wheel is used
  //     if (e.deltaY > 0) {
  //       e.preventDefault();
  //     }
  //   };

  //   // Add the event listener to the document
  //   document.addEventListener("wheel", handleScroll, { passive: false });

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);

  return (
    <div className="bg-transparent overflow-hidden">
      <div className="container mx-auto w-screen">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 z-50 ">
            <LinkS
              to="/"
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
              className={` inline-flex items-center justify-center rounded-lgtext-white hover:text-white transition-transform transform 
                  ${open ? "rotate-90 scale-110" : "rotate-0 scale-10"}`}
            >
              <Image alt="marker" src={marker} width={125} />
              {/* <span className="sr-only">Open Main Menu</span>
              {open ? (
                <FaTimes className="text-3xl" />
              ) : (
                <FaBars className="text-3xl" />
              )} */}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="bg-black flex justify-center absolute w-[100%] z-10 md:block">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <LinkS
                key={index}
                duration={500}
                className="text-white hover:bg-white hover:text-orange-600 block text-center py-20 text-6xl cursor-pointer"
                // className="text-white hover:bg-white hover:text-orange-600 px-3 py-2 rounded-md text-xl pointer"
                to={link.link}
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
