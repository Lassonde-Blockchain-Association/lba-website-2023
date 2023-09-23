import React from 'react';


const MissionHeader: React.FC = () => {

  // const h6Style = {
  //   color: '#FFFFFF',
  //   fontFamily: 'Inter, sans-serif', // Specify the font family and provide a fallback
  //   fontSize: '45px',
  //   fontStyle: 'normal',
  //   fontWeight: 600,
  //   lineHeight: 'normal',
  //   letterSpacing: '13.5px',
  //   flexShrink: 0,
  //   display: 'flex',
  //   width: '435px',
  //   height: '101px',
  //   paddingLeft: '0px',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // };
 
  return (
   <h6 className="text-white font-inter text-xl font-semibold leading-normal tracking-widest flex justify-left pl-[150px] pt-[3%]">M I S S I O N</h6>
  );
};

export default MissionHeader;