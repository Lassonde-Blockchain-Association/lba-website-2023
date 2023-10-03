import React from "react";
import { DiDotnet } from "react-icons/di";

const groupMember = [
  { name: "Natalie" },
  { name: "Seth" },
  { name: "Samson" },
  { name: "Nikhil" },
  { name: "Krishna" },
  { name: "Daniel" },
  { name: "Luana" },
];

const ScrollingBar = () => {
  return (
    <div className="w-full h-1/6 inline-flex flex-nowrap text-3xl font-semibold border-t-8 border-b-8">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {groupMember.map((data, index) => (
          <div key={index} className="flex items-center justify-center">
            <DiDotnet />
            <li>
              <p>{data.name}</p>
            </li>
          </div>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {groupMember.map((data, index) => (
          <div key={index} className="flex items-center justify-center">
            <DiDotnet />
            <li>
              <p>{data.name}</p>
            </li>
          </div>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {groupMember.map((data, index) => (
          <div key={index} className="flex items-center justify-center">
            <DiDotnet />
            <li>
              <p>{data.name}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingBar;

{
  /* <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>
          <li>
              <p>Natalie Au</p>
          </li>
          <li>
              <p>Zhaohui Li</p>
          </li>

      </ul> */
}
