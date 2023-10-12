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
  for(let i=0; i<6; i++){
    scrollingList.push(      
      <ul className="flex items-center justify-center md:justify-start animation-infinite-scroll">
        {groupMember.map((data, index) => (
          <li key={index} className="mx-8 whitespace-nowrap">
            <div className="flex items-center justify-center">
              <p>{data.name}</p>
            </div>
          </li>
        ))}
      </ul>)
  }
  return (
    <div className="w-full h-1/6 inline-flex flex-nowrap text-3xl font-semibold border-b-8">
      {scrollingList}
    </div>
    // <div className="w-full h-1/6 inline-flex flex-nowrap text-3xl border-t-8 border-b-8 animate-infinite-scroll">
    //   <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none ">
    //     {groupMember.map((data, index) => (
    //       <div key={index} className="flex items-center justify-center">
    //         <DiDotnet />
    //         <li className="mx-8">
    //           <p>{data.name}</p>
    //         </li>
    //       </div>
    //     ))}
    //   </ul>
    //   <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none">
    //     {groupMember.map((data, index) => (
    //       <div key={index} className="flex items-center justify-center">
    //         <DiDotnet />
    //         <li className="mx-8">
    //           <p>{data.name}</p>
    //         </li>
    //       </div>
    //     ))}
    //   </ul>
    //   <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none">
    //     {groupMember.map((data, index) => (
    //       <div key={index} className="flex items-center justify-center">
    //         <DiDotnet />
    //         <li className="mx-8">
    //           <p>{data.name}</p>
    //         </li>
    //       </div>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default ScrollingBar;
