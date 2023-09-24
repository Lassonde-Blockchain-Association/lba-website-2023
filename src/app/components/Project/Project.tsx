// "use client";
// import React, { useEffect, useRef } from "react";
// import Timeline from "../Timeline";
// import data from "./TimelineData";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const Project: React.FC = () => {
//   console.log("ScrollSection component rendered"); // Add this line

//   const timelineRef = useRef<HTMLDivElement>(null);

//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const triggerRef = useRef<HTMLDivElement | null>(null);

//   gsap.registerPlugin(ScrollTrigger);
//   console.log(sectionRef); // Add this line

//   const bodyRef = useRef(null);
//   const maskRef = useRef(null); // Needed for the max
//   const projectBodyColour = "gray-200";

//   const bodyClassName: string = `bg-${projectBodyColour} min-h-screen p-8`;
//   // Unsure how to make the rectangle fill the whole screen, causes glitches in smaller screens
//   const maskClassName: string = `absolute bg-${projectBodyColour} h-16 w-3/4`;

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

//     gsap.to(maskRef.current, {
//       width: "5%",
//       x: 800,
//       duration: 2,
//       // Trying to figure out how to sync it with the scroll
//       scrollTrigger: {
//         trigger: bodyRef.current,
//         markers: true,
//         start: "top left",
//         scrub: 1,
//         pin: true,
//       },
//     });

//     handleScroll();

//     /*
//     console.log("Running useEffect");

//     if (!sectionRef.current || !triggerRef.current) {
//       console.log("Refs not attached");
//       return;
//     }*/

//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//           markers: true,
//         },
//       }
//     );
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div ref={bodyRef} className={bodyClassName}>
//       <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
//       <div>
//         <div className="absolute">
//           <Timeline
//             className="flex flex-start h-16 opacity-100 "
//             length={data.length}
//           />
//         </div>
//         <div ref={maskRef} className={maskClassName}></div>
//         <div className="absolute">
//           <Timeline
//             className="flex flex-start h-16 opacity-40"
//             length={data.length}
//           />
//         </div>
//       </div>
//       <section className="">
//         {/* The section up act just as a wrapper. If the trigger (below) is the
//       first jsx element in the component, you get an error on route change */}

//         {/* The div below act just as a trigger. As the doc suggests, the trigger and
//       the animation should alway be two separated refs */}
//         <div ref={triggerRef}>
//           <div
//             ref={sectionRef}
//             className="h-screen w-[400vw] flex flex-row relative"
//           >
//             {data.map((item, index) => (
//               <section key={index}>
//                 <div className="section h-screen w-screen justify-center items-center">
//                   <span className="text-lg">{item.date}</span>
//                   <h1 className="text-2xl">{item.title}</h1>
//                   <p className="text-base">{item.description}</p>
//                 </div>
//               </section>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Project;

"use client";
import React, { useEffect, useRef } from "react";
import Timeline from "../Timeline";
import data from "./TimelineData";
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
      translateX: `${
        Math.ceil(7 * data.length) +
        8 * data.length * (1920 / window.innerWidth - 1)
      }vw`,
      duration: 20,
      // Trying to figure out how to sync it with the scroll

      scrollTrigger: {
        trigger: bodyRef.current,
        markers: true,
        start: "top top",
        end: `+=${Math.ceil(775 * data.length)}`,
        scrub: 1,
        pin: true,
      },
    });

    handleScroll();

    /*
    console.log("Running useEffect");

    if (!sectionRef.current || !triggerRef.current) {
      console.log("Refs not attached");
      return;
    }*/

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-350vw",
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
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" overflow-hidden flex">
      <div ref={triggerRef} className=" overflow-hidden ">
        <div ref={bodyRef} className={bodyClassName}>
          <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
          <div className="">
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
          </div>
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
      </div>
    </section>
  );
};

export default Project;
