"use client";
import Particles from "@/components/Particles";
import AtomScene from "@/components/AtomScene";
import Jobs from "@/components/sections/Jobs";
import Contact from "@/components/sections/Contact";
import AboutMe from "@/components/sections/AboutMe";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen overflow-hidden screen-container">
      <span className="fixed top-0 left-0 w-full h-full -z-40 bg-gradient-to-tl from-white via-white/10 to-white" />
      <Particles
        className="fixed inset-0 -z-50 animate-fade-in "
        quantity={200}
      />

      <div className="relative flex flex-col items-center justify-center w-full h-screen select-none">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 to-zinc-300/0" />
        <span className="relative z-10 text-transparent duration-1000 cursor-default text-8xl bg-black/90 text-edge-outline animate-title font-absolut-pro font-bold sm:text-6xl md:text-9xl lg:text-[200px] whitespace-nowrap bg-clip-text -mt-12">
          <h2 className="absolute top-0 left-0 font-absolut-pro font-bold text-lg lg:text-xl text-start text-zinc-700 animate-fade-in">
            Hello, I&apos;m
          </h2>
          <h1 className="-ml-6">Leon</h1>
          <h2 className="absolute top-[100%] right-0 text-lg lg:text-xl text-start text-zinc-700 animate-fade-in">
            Web Developer
          </h2>
        </span>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 to-zinc-300/0" />
      </div>
      {!loading && (
        <>
          <AtomScene />
          <AboutMe />
          <Jobs />
          <Contact />
        </>
      )}
    </div>
  );
}
