"use client";

import React, { useEffect, useRef } from "react";
import Timeline from "./Timeline";
import setupGSAPContext from "./gsapConfig";
import timelineData from "./TimelineData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TimelineMask from "./TimelineMask";
import TimelineEvent from "./TimelineEvent";

const Project: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  const bodyRef = useRef(null);
  const maskRef = useRef(null); // Needed for the max

  useEffect(() => {
    if (window.innerWidth >= 768) {
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
    } else {
      console.log("Skipped  scroll animations on mobile.");
    }

    console.log(`Screen size is ${window.innerWidth}`);
  }, []);

  return (
    <div id="project">
      <section
        // id="project"
        ref={triggerRef}
        className="overflow-hidden md:h-[100vh] flex"
      >
        <div ref={bodyRef} className="overflow-hidden  ">
          {/* <div className="bg-[#191970] min-h-screen w-full"> */}
          <div className="min-h-screen w-ful mt-10">
            {/* PROJECT HEADER */}
            <h2 className="text-xl font-semibold leading-normal tracking-widest text-white pl-[8%] pt-[3%] mb-[ddddddddd%] uppercase">
              P r o j e c t -
              <span className="text-orange-600"> [ T i m e l i n e ]</span>
            </h2>
            <TimelineMask
              maskRef={maskRef}
              timelineDataCount={timelineData.length}
            ></TimelineMask>
            <div className="relative">
              <div
                ref={sectionRef}
                className="md:h-screen md:w-[400vw] flex md:flex-row flex-col items-center md:justify-center"
              >
                {/* SHOW EVENTS IN TIMELINE */}
                {timelineData.map((item, index) => (
                  <TimelineEvent key={index} item={item} />
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
