import Image from "next/image";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Hero/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Project />
      <Footer />
    </main>
  );
}
