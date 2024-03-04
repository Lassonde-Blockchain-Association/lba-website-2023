import gsap from "gsap";

function setupGSAPContext(
  sectionRef: React.MutableRefObject<HTMLDivElement | null>,
  triggerRef: React.MutableRefObject<HTMLDivElement | null>,
  maskRef: React.MutableRefObject<null>,
  bodyRef: React.MutableRefObject<null>,
  timelineLength: number
): gsap.Context {
  return gsap.context(() => {
    gsap.to(maskRef.current, {
      width: "1%",
      translateX: `${
        Math.ceil(7 * timelineLength) +
        7 * timelineLength * (1920 / window.innerWidth - 1)
      }vw`,
      duration: 20,
      // Trying to figure out how to sync it with the scroll

      scrollTrigger: {
        trigger: bodyRef.current,
        markers: false,
        start: "top top",
        end: `+=${Math.ceil(1500 * Math.pow(timelineLength, 0.4))}`,
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
        translateX: `${-250 - 8 * Math.pow(timelineLength, 1.35)}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          // updated
          end: `${800 + 150 * Math.pow(timelineLength, 1.2)} top`,
          scrub: 1,
          pin: true,
          markers: false,
        },
      }
    );
  });
}

export default setupGSAPContext;
