import Timeline from "./Timeline";
interface TimelineMaskProps {
  maskRef: React.MutableRefObject<null>;
  timelineDataCount: number;
}

const TimelineMask = ({ maskRef, timelineDataCount }: TimelineMaskProps) => {
  let timelineMaskClassName = `absolute bg-[#000000] h-20 z-10`;
  let translucentTimelineClassName = `flex flex-start h-20 opacity-40 z-30`;
  let opaqueTimelineClassName = `flex flex-start h-20 opacity-100 z-0`;
  return (
    <div className=" md:flex hidden justify-center item-center">
      {/* MASK COVERING THE IMAGE */}
      <div className="relative z-10 flex justify-center w-full">
      <div ref={maskRef} className={timelineMaskClassName} style={{ width: '75%', maxWidth: '450px', margin: '0 auto' }}></div>
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
