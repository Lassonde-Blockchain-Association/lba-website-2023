interface TimelineEventProps {
  index: number;
  item: {
    date: string;
    title: string;
    description: string;
  };
}

const TimelineEvent = ({ index, item }: TimelineEventProps) => {
  return (
    <section
      key={index}
      className="w-[60%] md:p-20 p-5 md:m-20 m-5 md:text-center text-left rounded-lg shadow-xl shadow-cyan-500/50 border-2 border-white bg-[#ffb8ec] bg-opacity-10 backdrop-blur-30 "
    >
      <h4 className="item-center flex md:justify-center md:pb-0 pb-2 text-orange-600 md:text-xl text-sm md:font-bold font-semibold tracking-widest ">
        {item.date}
      </h4>
      <h1 className="md:text-8xl text-5xl flex md:justify-center font-semibold text-white">
        {item.title}
      </h1>
      <p className="flex font-inter md:text-2xl text-base font-normal leading-normal font-alata md:justify-center md:p-5 pt-5 text-slate-200">
        {item.description}
      </p>
    </section>
  );
};

export default TimelineEvent;
