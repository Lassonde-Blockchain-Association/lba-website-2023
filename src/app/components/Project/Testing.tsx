"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Testing() {
  const triggerRef = useRef(null);
  const skills = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(sectionRef.current, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  });

  return (
    <section className="overflow-hidden flex">
      <div ref={triggerRef} className="overflow-hidden ">
        <div
          ref={sectionRef}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
        >
          <section
            // ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            {/* <Image
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st image"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] m-auto"
            /> */}
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image description"
                layout="fill"
                className="m-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>
          <section
            // ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image description"
                layout="fill"
                className="m-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>
          <section
            // ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image description"
                layout="fill"
                className="m-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>
          <section
            // ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image description"
                layout="fill"
                className="m-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Testing;
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     console.log("Trigger Ref:", triggerRef.current);
//     console.log("Section Ref:", sectionRef.current);
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         start: "top top",
//         end: "+=3000",
//         scrub: true,
//         pin: true,
//       },
//     });

//     tl.to(sectionRef.current, { x: "-300vw", duration: 1 });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section className="overflow-hidden">
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row">
//           <div className="h-screen w-screen flex justify-center items-center">
//             <h3>Section 1</h3>
//           </div>
//           <div className="h-screen w-screen flex justify-center items-center">
//             <h3>Section 2</h3>
//           </div>
//           <div className="h-screen w-screen flex justify-center items-center">
//             <h3>Section 3</h3>
//           </div>
//           <div className="h-screen w-screen flex justify-center items-center">
//             <h3>Section 4</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
