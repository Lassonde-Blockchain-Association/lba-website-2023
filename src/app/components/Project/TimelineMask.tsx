import Timeline from "./Timeline";
interface TimelineMaskProps {
  tailwindHeight: number;
  maskRef: React.MutableRefObject<null>;
  timelineDataCount: number;
}

const TimelineMask = ({
  tailwindHeight,
  maskRef,
  timelineDataCount,
}: TimelineMaskProps) => {
  let timelineMaskClassName = `absolute bg-[#001152] h-${tailwindHeight} w-screen z-10`;
  let translucentTimelineClassName = `flex flex-start h-${tailwindHeight} opacity-40 z-30`;
  let opaqueTimelineClassName = `flex flex-start h-${tailwindHeight} opacity-100 z-30`;
  return (
    <div className=" md:flex hidden justify-center item-center">
      {/* MASK COVERING THE IMAGE */}
      <div className="absolute z-10">
        <div ref={maskRef} className={timelineMaskClassName}></div>
        <Timeline
          className={opaqueTimelineClassName}
          height={50}
          length={timelineDataCount}
        />
      </div>
      {/* TIMELINE TRANSLUCENT */}
      <div className="absolute z-30">
        <Timeline
          className={translucentTimelineClassName}
          height={50}
          length={timelineDataCount}
        />
      </div>
    </div>
  );
};

export default TimelineMask;
