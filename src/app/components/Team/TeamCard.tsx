"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import TeamData from "./TeamData";

const TeamCard = () => {
  return (
    <div className="h-max flex flex-col items-center justify-center py-20">
      <div className="p-4 w-4/5 h-4/6">
        <h2 className="text-4xl text-white font-bold mb-4">OUR TEAM</h2>
        <div className="p-1 flex flex-wrap items-center justify-center">
          {TeamData.map((person, index) => (
            <Tilt key={index}>
              <a href={person.linkedin}>
                <div
                  className={`flex-shrink-0 m-10 relative overflow-hidden ${person.bgColor} rounded-lg max-w-xs shadow-lg`}
                >
                  <div className="relative lg:w-80 h-96">
                    <img className="relative" src={person.image} alt="" />
                    <div className="absolute h-full inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white">
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
                </div>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
