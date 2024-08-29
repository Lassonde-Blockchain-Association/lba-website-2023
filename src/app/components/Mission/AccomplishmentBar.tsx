import React from "react";

const bar1 = [
  { name: "Web3.0 Pioneers" },
  { name: "YorkU's First Blockchain Association" },
  { name: "NFT Enthusiasts" },
  { name: "Metaverse Creators" },
];

const b2 = [
  { name: "Toronto's Biggest Blockchain Community" },
  { name: "Metaverse Creators" },
  { name: "Best Research Team" },
];

const bar3 = [
  { name: "Best Blockchain Researchers" },
  { name: "Web3.0 Pioneers" },
  { name: "NFT Enthusiasts" },
  { name: "Open Source Community" },
  { name: "Exceptional Dev Team" },
];

const AccomplishmentBar = () => {
  const createScrollingList = (dataList: any[], directionClass: string) => {
    const scrollingList = [];
    for (let i = 0; i < 6; i++) {
      scrollingList.push(
        <ul
          key={i}
          className={`flex items-center justify-center md:justify-start ${directionClass}`}
        >
          {dataList.map((data, index) => (
            <li key={index} className="mx-8 whitespace-nowrap">
              <div className="flex items-center justify-center">
                <p
                  style={{
                    color: index % 2 === 0 ? "white" : "#FB923C", // Using Tailwind's orange color code
                  }}
                  className="accomplishment-item"
                >
                  {data.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return scrollingList;
  };

  return (
    <div className="w-full">
      {/* Accomplishment Header */}
      <h2 className="text-xl font-semibold leading-normal tracking-widest text-white pl-[8%] pt-[3%] mb-8 uppercase">
        K E Y -
        <span className="text-orange-600"> [ A C H I E V E M E N T S ]</span>
      </h2>

      <div className="container relative mx-auto w-[92%] md:w-[85%] overflow-hidden">
        <div className="w-full flex flex-col space-y-20 text-xl uppercase">
          {/* First Scrolling Bar - Left to Right */}
          <div className="h-1/6 inline-flex flex-nowrap">
            {createScrollingList(bar1, "animation-infinite-scroll-reverse")}
          </div>

          {/* Second Scrolling Bar - Right to Left */}
          <div className="h-1/6 inline-flex flex-nowrap">
            {createScrollingList(b2, "animation-infinite-scroll")}
          </div>

          {/* Third Scrolling Bar - Left to Right */}
          <div className="h-1/6 inline-flex flex-nowrap">
            {createScrollingList(bar3, "animation-infinite-scroll-reverse")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentBar;
