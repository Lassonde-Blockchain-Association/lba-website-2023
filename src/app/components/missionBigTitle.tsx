import React from 'react';
  
const MissionBigTitle: React.FC = () => {
  //   const missionBigTitleStyle = {
  //       display: 'flex',
  //       width: '800px',
  //       height: '534px',
  //       marginLeft: '130px',
  //       justifyContent: 'flex-end',
  //       flexDirection: 'column' as 'column',// Stack the h1 elements vertically
  //       flexShrink: 0,
  //     };

  // const missionBigTitleStyleTop = {
  //   color: '#FFFFFF',
  //   fontFamily: 'Inter, sans-serif', // Specify the font family and provide a fallback
  //   fontSize: '100px',
  //   fontStyle: 'normal',
  //   fontWeight: 800,
  //   lineHeight: 'normal',
  // };

  // const missionBigTitleStyleBot = {
  //   color: 'rgba(255, 107, 0, 0.85)',
  //   fontFamily: 'Inter, sans-serif',
  //   fontSize: '100px',
  //   fontStyle: 'normal',
  //   fontWeight: 800,
  //   lineHeight: 'normal',

  // };

  return (
    <main className="missionBigTitle">
      <div className="flex-col justify-right w-[40%] pl-[150px]">
        <h1 className="text-white font-inter text-6xl font-bold leading-normal pt-[8%]">BUILDING A TOP-NOTCH </h1>
        <h1 className="text-orange-600 font-inter text-6xl font-bold leading-normal">BLOCKCHAIN HUB</h1>
      </div>
    </main>
  );
};

export default MissionBigTitle;