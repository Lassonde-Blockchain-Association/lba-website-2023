import React from "react";
import Landing from "./components/Landing/Landing";
import Mission from "./components/Mission/Mission";
import Project from "./components/Project/Project";
import TeamCard from "./components/Team/TeamCard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    // <main className="LBA bg-[#191970]">
    <main className="gradient-bg">
      <span className="gradient-container">
        <span className="g1"></span>
        <span className="g2"></span>
        <span className="g3"></span>
        <span className="g4"></span>
        <span className="g5"></span>

        <Navbar />
        <Landing />
        <Mission />
      </span>

      <Project />

      <span className="gradient-container">
        <span className="g1"></span>
        <span className="g2"></span>
        <span className="g3"></span>
        <span className="g4"></span>
        <span className="g5"></span>
        <TeamCard />
        <Footer />
      </span>
    </main>
  );
}
