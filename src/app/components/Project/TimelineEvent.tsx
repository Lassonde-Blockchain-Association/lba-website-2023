interface TimelineEventProps {
  item: {
    date: string;
    title: string;
    description: string;
  };
}

const TimelineEvent = ({ item }: TimelineEventProps) => {
  return (
    <section
      className=" rounded-lg shadow-xl shadow-cyan-500/50 border-2 border-white bg-[#ffb8ec] bg-opacity-10 backdrop-blur-30 
        md:p-20 md:m-20 md:text-center md:w-[60%]
        p-5 m-5 text-left w-[70%]"
    >
      <h4
        className="item-center tracking-widest flex text-orange-600  
        md:font-bold md:justify-center md:text-xl md:pb-0
        font-semibold text-sm pb-2"
      >
        {item.date}
      </h4>
      <h1
        className="md:text-8xl md:justify-center 
      text-3xl flex font-semibold text-white"
      >
        {item.title}
      </h1>
      <p className="flex font-inter md:text-2xl text-base font-normal leading-normal font-alata md:justify-center md:p-5 pt-5 text-slate-200">
        {item.description}
      </p>
    </section>
  );
};

export default TimelineEvent;
