"use client";
import React, { useEffect, useRef } from "react";
import Timeline from "./Timeline";
import timelineData from "./TimelineData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Project: React.FC = () => {
  console.log("ScrollSection component rendered"); // Add this line

  const timelineRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);
  console.log(sectionRef); // Add this line

  const bodyRef = useRef(null);
  const maskRef = useRef(null); // Needed for the max
  let projectBodyColour = "gray-200";

  const heightOfTimeline = 20;

  const bodyClassName: string = `bg-gray-500 min-h-screen p-5 pl-40 w-full`;
  // Unsure how to make the rectangle fill the whole screen, causes glitches in smaller screens
  const maskClassName: string = `absolute bg-gray-500 h-20 w-full z-10`;

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
          Math.ceil(9 * timelineData.length) +
          8 * timelineData.length * (1920 / window.innerWidth - 1)
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
            end: `${800 + 100 * Math.pow(timelineData.length, 1.2)} top`,
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
    <section ref={triggerRef} className="overflow-hidden flex">
      <div ref={bodyRef} className="overflow-hidden ">
        <div className={bodyClassName}>
          <h2 className="text-3xl font-bold mb-12">Project Timeline</h2>
          <div className="flex justify-center">
            <div className="absolute z-10">
              <div ref={maskRef} className={maskClassName}></div>
              <Timeline
                className="flex flex-start h-20 opacity-100 z-0"
                heightClassName="h-20"
                length={timelineData.length}
              />
            </div>
            <div className="absolute z-30">
              <Timeline
                className="flex flex-start h-20 opacity-40 z-30"
                heightClassName="h-20"
                length={timelineData.length}
              />
            </div>
          </div>

          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative items-center justify-center "
          >
            {timelineData.map((item, index) => (
              <section
                key={index}
                className="w-screen p-20 m-20 text-center bg-slate-50 rounded-lg shadow-lg"
              >
                <h4 className="item-center flex justify-center text-red-400 text-lg">
                  {item.date}
                </h4>
                <h1 className="text-5xl flex justify-center font-semibold">
                  {item.title}
                </h1>
                <p className="text-lg italic leading-6 flex justify-center p-5">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
