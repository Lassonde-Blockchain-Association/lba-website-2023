"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import marker from "../../../../public/marker.gif";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import "src/app/globals.scss"; // Ensure this import points to your global.scss file location

const navlinks = [
  {
    title: "Blog",
    link: "https://lba-blog.vercel.app/",
    external: true,
  },
  {
    title: "Mission",
    link: "mission",
    external: false,
  },
  {
    title: "Project",
    link: "project",
    external: false,
  },
  {
    title: "Team",
    link: "team",
    external: false,
  },
  {
    title: "Contact",
    link: "footer",
    external: false,
  },
  {
    title: "Career",
    link: "career",
    external: false,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [scrollNav, setScrollNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", updateNav);
    window.addEventListener("scroll", updateProgress);
    if (window.innerWidth < 768) {
      setOpen(false);
    }
    return () => {
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const updateNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
      setOpen(false);
    } else if (window.innerWidth >= 768) {
      setScrollNav(false);
      setOpen(true);
    }
  };

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full z-[100]">
      <div className="relative">
        <div
          className="fixed top-0 left-0 h-1 gradient-bar z-[100]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="fixed overflow-hidden pl-8 md:pl-10 flex items-center h-fit pt-4 w-full z-[90]">
        <div className="mx-auto w-[100%]">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 md:gap-4 z-50">
              <LinkS to="/" onClick={toggleHome} duration={500} className="">
                <Image
                  alt="logo"
                  src={Logo}
                  className="cursor-pointer transform duration-150 h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]"
                />
              </LinkS>
              <span className="text-white text-4xl">/</span>
              <Link href="https://lba-blog.vercel.app/" className="text-white cursor-pointer text-xl hover:text-rose-500 transform duration-150">
                LBA - Blog
              </Link>
            </div>

            <div className="flex justify-end items-center">
              {open && (
                <div className="fixed inset-0 md:static md:p-4 md:rounded-full md:mx-auto my-auto md:mr-[12%] bg-[#ffffff] bg-opacity-0 md:bg-opacity-20 backdrop-blur-xl z-[100] animate-slide-in drop-shadow-md flex items-center justify-center">
                  <div className="flex flex-col md:flex-row">
                    {navlinks.map((link, index) =>
                      link.external ? (
                        <Link
                          key={index}
                          href={link.link}
                          className="text-white px-20 md:px-2 py-7 md:py-0 border-b-2 md:border-b-0 md:rounded-2xl hover:bg-white hover:rounded-2xl hover:text-rose-500 transform duration-150 text-center text-4xl md:text-2xl cursor-pointer"
                        >
                          {link.title}
                        </Link>
                      ) : (
                        <LinkS
                          key={index}
                          to={link.link}
                          duration={1500}
                          smooth={true}
                          className="text-white px-20 md:px-2 py-7 md:py-0 border-b-2 md:border-b-0 md:rounded-2xl hover:bg-white hover:rounded-2xl hover:text-rose-500 transform duration-150 text-center text-4xl md:text-2xl cursor-pointer"
                        >
                          {link.title}
                        </LinkS>
                      )
                    )}
                  </div>
                </div>
              )}
              <div className="flex-shrink-0 z-[100] md:z-[90]">
                <button
                  type="button"
                  onClick={handleMenu}
                  className={`inline-flex items-center justify-end rounded-lg transition-transform transform ${
                    open ? "rotate-90 scale-110" : "rotate-0 scale-10"
                  }`}
                >
                  <Image alt="marker" src={marker} width={125} height={125} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
