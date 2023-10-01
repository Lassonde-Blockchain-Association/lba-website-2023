import React from "react";
import Landing from "./components/Landing/Landing";
import Mission from "./components/Mission/Mission";
import Project from "./components/Project/Project";
import TeamCard from "./components/Team/TeamCard";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="LBA bg-[#191970]">
      <Landing />
      <Mission />
      <Project />
      <TeamCard />
      <Footer />
    </main>
  );
}
