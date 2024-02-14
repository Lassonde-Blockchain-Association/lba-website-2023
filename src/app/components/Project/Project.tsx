"use client";

import React, { useEffect, useRef } from "react";
import Timeline from "./Timeline";
import setupGSAPContext from "./gsapConfig";
import timelineData from "./TimelineData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Project: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  const bodyRef = useRef(null);
  const maskRef = useRef(null); // Needed for the max

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineBlocks = Array.from(timelineRef.current.children);
        timelineBlocks.forEach((block) => {
          if (
            block.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
            block.classList.contains("is-hidden")
          ) {
            block.classList.remove("is-hidden");
            block.classList.add("bounce-in");
          }
        });
      }
    };
    let ctx = setupGSAPContext(
      sectionRef,
      triggerRef,
      maskRef,
      bodyRef,
      timelineData.length
    );

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => ctx.revert();
  }, []);

  return (
    <div id="project">
      <section
        // id="project"
        ref={triggerRef}
        className="overflow-hidden h-[100vh] flex"
      >
        <div ref={bodyRef} className="overflow-hidden  ">
          {/* <div className="bg-[#191970] min-h-screen w-full"> */}
          <div className="min-h-screen w-ful mt-10">
            {/* PROJECT HEADER */}
            <h2 className="text-xl font-semibold leading-normal tracking-widest text-white pl-[8%] pt-[3%] mb-[ddddddddd%] uppercase">
              P r o j e c t -
              <span className="text-orange-600"> [ T i m e l i n e ]</span>
            </h2>
            <div className=" md:flex hidden justify-center item-center">
              {/* MASK COVERING THE IMAGE */}
              <div className="absolute z-10">
                <div
                  ref={maskRef}
                  className="absolute bg-[#001152] h-20 w-screen z-10"
                ></div>
                <Timeline
                  className="flex flex-start h-20 opacity-100 z-0"
                  height={50}
                  length={timelineData.length}
                />
              </div>
              {/* TIMELINE TRANSLUCENT */}
              <div className="absolute z-30">
                <Timeline
                  className="flex flex-start h-20 opacity-40 z-30"
                  height={50}
                  length={timelineData.length}
                />
              </div>
            </div>
            <div className="relative">
              <div
                ref={sectionRef}
                className="h-screen w-[400vw] flex md:flex-row items-center justify-center"
              >
                {/* SHOW EVENTS IN TIMELINE */}
                {timelineData.map((item, index) => (
                  <section
                    key={index}
                    className="w-[60%] p-20 m-20 text-center rounded-lg shadow-xl shadow-cyan-500/50 border-2 border-white bg-[#ffb8ec] bg-opacity-10 backdrop-blur-30 "
                  >
                    <h4 className="item-center flex justify-center text-orange-600 text-xl font-bold tracking-widest ">
                      {item.date}
                    </h4>
                    <h1 className="text-8xl flex justify-center font-semibold text-white">
                      {item.title}
                    </h1>
                    <p className="flex font-inter text-2xl font-normal leading-normal font-alata justify-center p-5 text-slate-200">
                      {item.description}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
