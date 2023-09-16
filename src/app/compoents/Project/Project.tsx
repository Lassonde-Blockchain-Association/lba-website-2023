"use client";
import React, { useEffect, useRef } from "react";
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
  // ... Add more items as necessary
];

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => (
  <div className="flex mb-8 is-hidden">
    <div className="flex-none mt-0.5 mr-3 text-blue-500">{date}</div>
    <div className="flex-grow pl-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
    </div>
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
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
      <div className="border-l-2 border-blue-500 pl-4" ref={timelineRef}>
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
