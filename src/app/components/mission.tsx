  import React from 'react';
  import MissionHeader from './missionHeader';
  import MissionBigTitle from './missionBigTitle';
  import MissionParagraph from './missionParagraph';
  
  
   const Mission: React.FC = () => {
  //   const divStyle = {
  //     backgroundColor: '#121A48',
  //     paddingTop: '40px',
  //     width: '2560px',
  //     height: '1600px',
  //   };
    return (
      <main className="mission">
        <div className="bg-blue-950 w-[100vw] h-[100vh]  ">
          <MissionHeader />
          <MissionBigTitle />
          <MissionParagraph />
        </div>
      </main>
    );
  };
  
  export default Mission;