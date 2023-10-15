import React from "react";

const groupMember = [
  { name: "Lassonde Blockchain" },
  { name: "Web3.0" },
  { name: "Metaverse" },
  { name: "NFT" },
  { name: "DAO" },
  { name: "Open Source" },
];

const ScrollingBar = () => {
  const scrollingList = [];
  for (let i = 0; i < 6; i++) {
    scrollingList.push(
      <ul className="flex items-center justify-center md:justify-start animation-infinite-scroll">
        {groupMember.map((data, index) => (
          <li key={index} className="mx-8 whitespace-nowrap">
            <div className="flex items-center justify-center">
              <p>{data.name}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="w-full h-1/6 inline-flex flex-nowrap text-xl border-b-8 uppercase">
      {scrollingList}
    </div>
  );
};

export default ScrollingBar;
