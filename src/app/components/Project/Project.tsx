"use client";
import React, { useEffect, useRef } from "react";

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
  // ... Add more items as necessary
];

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => (
  <div className="flex items-center relative mb-16 last:mb-0">
    <div className="z-10 w-16 h-16 relative">
      {/* Cube faces */}
      <div className="absolute w-16 h-16 bg-blue-500 transform translateZ(-8px)"></div>
      <div className="absolute w-16 h-16 bg-red-500 transform rotateY(90deg) translateZ(-8px)"></div>
      <div className="absolute w-16 h-16 bg-green-500 transform rotateY(180deg) translateZ(-8px)"></div>
      <div className="absolute w-16 h-16 bg-yellow-500 transform rotateY(-90deg) translateZ(-8px)"></div>
      <div className="absolute w-16 h-16 bg-purple-500 transform rotateX(90deg) translateZ(-8px)"></div>
      <div className="absolute w-16 h-16 bg-orange-500 transform rotateX(-90deg) translateZ(-8px)"></div>
    </div>
    <div className="ml-8 bg-white rounded-lg p-4 shadow-lg border border-gray-200 w-72">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
    {/* Timeline line */}
    <div
      className="absolute top-0 left-8 z-0 w-1 h-full bg-gray-400"
      style={{ top: "-50%", height: "200%" }}
    ></div>
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
      <div ref={timelineRef} className="relative">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
