"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./timeline.css";

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
    <div className="z-10 w-16 h-16 relative">
      <img src="/isometric_cube.png"></img>
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
      {/* Timeline line */}
      <div className="absolute top-[80%] left-[30px] z-0 w-1 h-[115%] bg-gray-400"></div>
    </li>
  </div>
);

const Project: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
      <div className="absolute top-[10%] left-[62px] z-0 w-1 h-[5%] bg-gray-400"></div>
      <div ref={timelineRef} className="relative">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
