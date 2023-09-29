import React from 'react';
import Mission from './components/mission';
import Landing from "./components/Landing/landing";

export default function Home() {
  return (
    <main className="LBA bg-[#121A48] h-screen w-screen">
      <div >
          <Landing />
        <Mission />
      </div>
    </main>
  );
}
