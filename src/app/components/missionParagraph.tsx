import React from 'react';

    
const MissionParagraph: React.FC = () => {
  // const missionParagraphStyleDiv = {
  //   display: 'flex',
  //   height: '1034px',
  //   width: '925px',
  //   marginLeft: '1300px',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   flexShrink: 0,
  // };

  // const missionParagraphStyle = {
  //   width: '891px',
  //   flexShrink: 0,
  //   color: '#FFFFFF',
  //   justifyContent: 'right',
  //   fontFamily: 'Inter',
  //   fontSize: '55px',
  //   fontStyle: 'normal',flex justify-end
  //   fontWeight: 400, text-white font-inter text-3xl font-normal font-weight-400 leading-normal
  //   lineHeight: 'normal',  h-[200vh]  w-[50%]
  // };

  return (
    <main className="missionParagraphDiv">
      <div className="flex ml-[40%] justify-center">
        <p className="text-white text-left font-inter text-2xl font-normal font-weight-400 leading-normal w-[50%]">
        We're a new studio designed to accelerate the advent of web3 gaming. We develop and publish hybrid games that are mobile first and blockchain-enabled.
        </p>
      </div>
    </main>
  );
};

export default MissionParagraph;