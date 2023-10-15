"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import TeamData from "./TeamData";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div
      id="team"
      className="h-max flex flex-col items-center justify-center py-20"
    >
      <div className="p-4 w-4/5 h-4/6">
        <h2 className="text-xl font-semibold leading-normal tracking-widest text-white mb-4">
          O U R -<span className="text-orange-600"> [ T E A M ]</span>
        </h2>
        <div className="p-1 flex flex-wrap items-center justify-center">
          {TeamData.map((person, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareColor={person.bgColor}
              scale={1.25}
              transitionSpeed={600}
              perspective={500}
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              className="flex-shrink-0 m-10 relative overflow-hidden rounded-lg max-w-xs shadow-lg"
            >
              {/* <div> */}
              <a href={person.linkedin}>
                <div className="relative lg: w-40 h-40">
                  <Image
                    className="relative"
                    src={person.image}
                    width={320}
                    height={196}
                    alt=""
                  />
                  <div className="absolute h-full inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 text-white pb-2">
                    <div className="text-center">
                      <span className="block font-semibold text-3xl">
                        {person.name}
                      </span>
                      <span className="text-xl px-3 py-2 leading-none mt-1">
                        {person.job}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              {/* </div> */}
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
