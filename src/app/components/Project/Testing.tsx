"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import data from "./TimelineData";
import Timeline from "./Timeline";

function Testing() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");
    let to = gsap.to(sectionRef.current, {
      xPercent: () => 100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        end: () => "+=" + window.innerWidth,
      },
    });

    // New code adapted from your JavaScript
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 0.4),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true,
      },
    });

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section) => {
      let text = (section as HTMLDivElement).querySelectorAll(".anim");
      if (text.length === 0) return;
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section as HTMLElement,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <section className=" overflow-hidden flex">
      <div ref={triggerRef} className=" overflow-hidden ">
        {/* old timeline */}
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#D9D9D9"
          />
          <mask
            id="mask0_0_1"
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
        {/* <div>
          <div className="absolute">
            <Timeline
              className="flex flex-start h-16 opacity-100 "
              length={data.length}
            />
          </div>
          <div ref={maskRef} className={maskClassName}></div>
          <div className="absolute">
            <Timeline
              className="flex flex-start h-16 opacity-40"
              length={data.length}
            />
          </div>
        </div> */}
        <div
          ref={sectionRef}
          className=" flex overflow-x-hidden w-[400vw] m-0  relative h-screen"
        >
          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative"
          >
            {data.map((item, index) => (
              <section key={index} className="pin w-screen p-16">
                <span className="anim">{item.date}</span>
                <h1 className="anim text-7xl">{item.title}</h1>
                <p className="anim text-lg">{item.description}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testing;

// Import the necessary modules
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Head from "next/head";
// import data from "./TimelineData";

// // Main Component
// export default function Home() {
//   useEffect(() => {
//     // Register the ScrollTrigger Plugin
//     gsap.registerPlugin(ScrollTrigger);
//     // GSAP Animation
//     const container = document.querySelector(".scrollx");
//     const sections = gsap.utils.toArray(".pin");
//     const mask = document.querySelector(".mask");

//     // Horizontal Scroll Animation
//     let scrollTween = gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".scrollx",
//         pin: true,
//         scrub: 1,
//         end: "+=3000",
//       },
//     });

//     // Progress Bar Animation
//     gsap.to(mask, {
//       width: "100%",
//       scrollTrigger: {
//         trigger: ".wrapper",
//         start: "top left",
//         scrub: 1,
//       },
//     });

//     // Text Animation
//     sections.forEach((section: any) => {
//       let text = section.querySelectorAll(".anim");
//       if (text.length === 0) return;
//       gsap.from(text, {
//         y: -130,
//         opacity: 0,
//         duration: 2,
//         ease: "elastic",
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: section,
//           start: "left center",
//         },
//       });
//     });
//   }, []);

//   return (
//     <div>
//       <div className="wrapper relative overflow-x-hidden">
//         <svg
//           viewBox="0 0 900 10"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
//             fill="#D9D9D9"
//           />
//           <mask
//             id="mask0_0_1"
//             maskUnits="userSpaceOnUse"
//             x="0"
//             y="0"
//             width="900"
//             height="10"
//           >
//             <path
//               d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
//               fill="#D9D9D9"
//             />
//           </mask>
//           <g mask="url(#mask0_0_1)">
//             <rect className="mask" y="-49" height="99" fill="black" />
//           </g>
//         </svg>
//         <div className="mask absolute top-12 left-0 h-0.5 bg-black">
//           <div className="scrollx flex w-screen-300 space-x-4">
//             {data.map((item, index) => (
//               <section key={index} className="pin w-screen p-16">
//                 <span className="anim">{item.date}</span>
//                 <h1 className="anim text-7xl">{item.title}</h1>
//                 <p className="anim text-lg">{item.description}</p>
//               </section>
//             ))}
//           </div>
//         </div>
//       </div>
//       <section className="bg-blue-200"></section>
//     </div>
//   );
// }
