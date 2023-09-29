import React from "react";
import Mission from "./components/Mission/mission";
import Landing from "./components/Landing/landing";

export default function Home() {
  return (
    <main className="LBA bg-[#121A48]">
      <div>
        <Landing />
        <Mission />
      </div>
    </main>
  );
}
