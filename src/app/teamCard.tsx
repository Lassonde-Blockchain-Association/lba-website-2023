'use client'
import React from 'react';
import Tilt from 'react-parallax-tilt'; 

const team = [
  {
    name: "Natalie",
    job: "Project Manager",
    image: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    bgColor: "bg-orange-500",
  },
  {
    name: "name1",
    job: "job1",
    image: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    bgColor: "bg-teal-500",
  },
  {
    name: "name2",
    job: "job2",
    image: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    bgColor: "bg-purple-500",
  },
  {
    name: "name2",
    job: "job2",
    image: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    bgColor: "bg-purple-500",
  },
];

const TeamCard = () => {
  return (
    < div className='w-full bg-sky-950 h-screen flex items-center justify-center'>
    <div className="p-4">
    <h2 className="text-4xl text-white font-bold mb-4">OUR TEAM</h2>
    <div className="p-1 flex flex-wrap items-center justify-center">
      {team.map((person, index) => (
        <Tilt key={index}>
          <div className={`flex-shrink-0 m-10 relative overflow-hidden ${person.bgColor} rounded-lg max-w-xs shadow-lg`}>
            <div className="relative">
              <img className="w-60" src={person.image} alt="" />
              <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white">
                <div className="text-center">
                  <span className="block font-semibold text-xl">{person.name}</span>
                  <span className={` text-l font-bold px-3 py-2 leading-none mt-1`}>{person.job}</span>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
    </div>
    </div>
  );
  
  
}

export default TeamCard;

