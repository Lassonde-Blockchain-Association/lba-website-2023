"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";
import "./timeline.css";
import Timeline from "../Timeline";
import gsap from "gsap";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    date: "Jan 2023",
    title: "Project Kickoff",
    description: "Met with the team and defined the scope of the project.",
  },
  {
    date: "Feb 2023",
    title: "Design Phase",
    description: "Developed wireframes and high-fidelity prototypes.",
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => (
  <div className="flex items-center relative mb-16 last:mb-0">
    <div className="justify-center align-top items-center flex-col w-16 h-16">
      <img src="/isometric_cube.png"></img>
      {/* Timeline line */}
      <div className="mx-auto w-1 h-[165%] bg-gray-400"></div>
    </div>
    {/* <div className="ml-8 bg-white rounded-lg p-4 shadow-lg border border-gray-200 w-72">
      <div className="flex items-center justify-between mb-2"> */}
    <li className="direction-r">
      <div className="relative">
        <div className="flex justify-end items-center space-x">
          <span className="flag bg-gray-100 px-2.5 py-1.5 rounded-md shadow-md relative text-left font-semibold">
            {title}
          </span>

          <span className="bg-gray-50 text-red-400 text-sm px-2">{date}</span>
        </div>
        <p className="desc mt-3 italic text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  </div>
);

const Project: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const bodyRef = useRef(null);
  const maskRef = useRef(null);
  const projectBodyColour = "gray-200";

  const bodyClassName: string = `bg-${projectBodyColour} min-h-screen p-8`;
  // Unsure how to make the rectangle fill the whole screen, causes glitches in smaller screens
  const maskClassName: string = `absolute bg-${projectBodyColour} h-16 w-3/4`;

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

    gsap.to(maskRef.current, {
      width: "5%",
      x: 800,
      duration: 2,
      /*
      ease: "none",
      delay: 1,*/
      // Trying to figure out how to sync it with the scroll
      scrollTrigger: {
        trigger: bodyRef.current,
        markers: true,
        start: "top left",
        scrub: 1,
      },
    });

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /* 
    <div className="bg-gray-200 min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
      <div ref={timelineRef} className="relative">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>*/
  }
  return (
    <div ref={bodyRef} className={bodyClassName}>
      <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
      <div>
        <div className="absolute">
          <Timeline className="flex flex-start h-16 opacity-100 " length={5} />
        </div>
        <div ref={maskRef} className={maskClassName}></div>
        <div className="absolute">
          <Timeline className="flex flex-start h-16 opacity-40" length={5} />
        </div>
      </div>
    </div>
  );
};

export default Project;
