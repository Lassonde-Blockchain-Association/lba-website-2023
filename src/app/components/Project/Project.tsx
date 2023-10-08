"use client";

import React, { useEffect, useRef } from "react";
import Timeline from "./Timeline";
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
    let ctx = gsap.context(() => {
      gsap.to(maskRef.current, {
        width: "1%",
        translateX: `${
          Math.ceil(9.4 * timelineData.length) +
          9 * timelineData.length * (1920 / window.innerWidth - 1)
        }vw`,
        duration: 20,
        // Trying to figure out how to sync it with the scroll

        scrollTrigger: {
          trigger: bodyRef.current,
          markers: false,
          start: "top top",
          end: `+=${Math.ceil(1500 * Math.pow(timelineData.length, 0.4))}`,
          scrub: 1,
          pin: true,
        },
      });
      gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: `${-250 - 7 * Math.pow(timelineData.length, 1.35)}vw`,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            // updated
            end: `${900 + 150 * Math.pow(timelineData.length, 1.2)} top`,
            scrub: 0.6,
            pin: true,
            markers: false,
          },
        }
      );
    });

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="overflow-hidden h-[100vh] flex">
      <div ref={bodyRef} className="overflow-hidden ">
        <div className="bg-[#191970] min-h-screen w-full">
          <h2 className="text-3xl font-bold tracking-widest  text-white pl-[150px] pt-[3%] mb-20">
            Project Timeline
          </h2>
          <div className=" flex justify-center item-center">
            <div className="absolute z-10">
              <div
                ref={maskRef}
                className="absolute bg-[#191970] h-40 w-screen z-10"
              ></div>
              <Timeline
                className="flex flex-start h-30 opacity-100 z-0"
                heightClassName="h-30"
                length={timelineData.length}
              />
            </div>
            <div className="absolute z-30">
              <Timeline
                className="flex flex-start h-30 opacity-40 z-30"
                heightClassName="h-30"
                length={timelineData.length}
              />
            </div>
          </div>
          <div className="relative">
            <div
              ref={sectionRef}
              className="h-screen w-[400vw] flex flex-row  items-center justify-center"
            >
              {timelineData.map((item, index) => (
                <section
                  key={index}
                  className="w-screen p-20 m-20 text-center rounded-lg shadow-xl shadow-cyan-500/50 border-2 border-white bg-[#ffb8ec] bg-opacity-10 backdrop-blur-30"
                >
                  <h4 className="item-center flex justify-center text-orange-600 text-xl font-bold tracking-widest ">
                    {item.date}
                  </h4>
                  <h1 className="text-7xl flex justify-center font-semibold text-white">
                    {item.title}
                  </h1>
                  <p className="text-2xl leading-6 flex justify-center p-5 text-slate-200">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
