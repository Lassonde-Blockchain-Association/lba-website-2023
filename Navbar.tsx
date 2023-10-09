"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  {
    title: "Mission",
    link: "#",
  },
  {
    title: "Project",
    link: "#",
  },
  {
    title: "Team",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      // Prevent scrolling down when the mouse wheel is used
      if (e.deltaY > 0) {
        e.preventDefault();
      }
    };

    // Add the event listener to the document
    document.addEventListener("wheel", handleScroll, { passive: false });

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white">
              Navbar
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:hidden">
            <div className="ml-10 flex item-basline space-x-4">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-white transition-all duration-600  
                      hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md 
                      text-xl font-large"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button*/}
          <div className="-mr-2 flex md:block">
            <button
              type="button"
              onClick={handleMenu}
              className={`inline-flex items-center justify-center p-6 rounded-lg 
                  text-white hover:text-white  focus:outline-none focus:ring-2 
                  focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                  transition-transform transform 
                  ${open ? "rotate-90 scale-110" : "rotate-0 scale-10"}`}
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <FaTimes className="text-3xl" />
              ) : (
                <FaBars className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:block">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="text-white hover:bg-gray-700 hover:text-white 
                  block text-center py-20 rounded-md text-xl font-extralarge"
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
