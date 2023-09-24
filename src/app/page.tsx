import Image from "next/image";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Hero/Footer";
import Testing from "./components/Project/Testing";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Testing />
      <Footer />
    </main>
  );
}
