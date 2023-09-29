import React from "react";
import Landing from "./components/Landing/landing";
import Mission from "./components/Mission/mission";
import Project from "./components/Project/project";
import TeamCard from "./components/Team/TeamCard";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="LBA bg-[#121A48]">
      <Landing />
      <Mission />
      <Project />
      <TeamCard />
      {/* <Footer /> */}
    </main>
  );
}
