import Image from "next/image";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Hero/Footer";
import React from "react";
import Mission from "./components/Mission/mission";
import Landing from "./components/Landing/landing";

export default function Home() {
  return (
    <main className="LBA bg-[#121A48]">
      <div>
        <Landing />
        <Mission />
        <Project />
      </div>
    </main>
  );
}
