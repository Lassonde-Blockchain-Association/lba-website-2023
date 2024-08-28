"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import TeamData from "./TeamData";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl font-semibold text-gray-400 mb-10"> 
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 px-5">
        {TeamData.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <Tilt
              glareEnable={true}
              glareColor="#ffffff"
              glarePosition="bottom"
              scale={1.10}
              transitionSpeed={1500}
              className="w-full"
            >
              <div className="image-container">
                <div className="image">
                  <Image
                    src={person.image}
                    layout="fill"
                    objectFit="cover"
                    alt={person.name}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
              </div>
            </Tilt>
            <div className="text-center mt-3">
              <h3 className="text-3xl font-semibold text-gray-400">{person.name}</h3>
              <p className="text-gray-700 font-semibold">{person.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
