"use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// interface TimelineItemProps {
//   date: string;
//   title: string;
//   description: string;
// }

// const timelineData: TimelineItemProps[] = [
//   {
//     date: "Jan 2023",
//     title: "Project Kickoff",
//     description: "Met with the team and defined the scope of the project.",
//   },
//   {
//     date: "Feb 2023",
//     title: "Design Phase",
//     description: "Developed wireframes and high-fidelity prototypes.",
//   },
// ];

// const TimelineItem: React.FC<TimelineItemProps> = ({
//   date,
//   title,
//   description,
// }) => (
//   <div className="flex items-center relative mb-16 last:mb-0">
//     <div className="z-10 w-16 h-16 relative">
//       <img src="/isometric_cube.png"></img>
//     </div>
//     {/* <div className="ml-8 bg-white rounded-lg p-4 shadow-lg border border-gray-200 w-72">
//       <div className="flex items-center justify-between mb-2"> */}
//     <li className="direction-r">
//       <div className="relative">
//         <div className="flex justify-end items-center space-x">
//           <span className="flag bg-gray-100 px-2.5 py-1.5 rounded-md shadow-md relative text-left font-semibold">
//             {title}
//           </span>

//           <span className="bg-gray-50 text-red-400 text-sm px-2">{date}</span>
//         </div>
//         <p className="desc mt-3 italic text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>
//       {/* Timeline line */}
//       <div className="absolute top-[80%] left-[30px] z-0 w-1 h-[115%] bg-gray-400"></div>
//     </li>
//   </div>
// );

// const Project: React.FC = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (timelineRef.current) {
//         const timelineBlocks = Array.from(timelineRef.current.children);
//         timelineBlocks.forEach((block) => {
//           if (
//             block.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
//             block.classList.contains("is-hidden")
//           ) {
//             block.classList.remove("is-hidden");
//             block.classList.add("bounce-in");
//           }
//         });
//       }
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-200 min-h-screen p-8">
//       <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
//       <div className="absolute top-[10%] left-[62px] z-0 w-1 h-[5%] bg-gray-400"></div>
//       <div ref={timelineRef} className="relative">
//         {timelineData.map((item, idx) => (
//           <TimelineItem key={idx} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import data from "./TimelineData";

const Project: React.FC = () => {
  console.log("ScrollSection component rendered"); // Add this line

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);
  console.log(sectionRef); // Add this line

  useEffect(() => {
    console.log("Running useEffect");

    if (!sectionRef.current || !triggerRef.current) {
      console.log("Refs not attached");
      return;
    }

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          markers: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="">
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="black"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className="mask" y="-49" height="99" fill="black" />
          </g>
        </svg>
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative"
          >
            {data.map((item, index) => (
              <section
                key={index}
                // className="h-screen w-[400vw] flex flex-row relative"
              >
                <div className="section h-screen w-screen justify-center items-center">
                  <span className="text-lg">{item.date}</span>
                  <h1 className="text-2xl">{item.title}</h1>
                  <p className="text-base">{item.description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
