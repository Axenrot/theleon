"use client";
import Particles from "@/components/Particles";
import AtomScene from "@/components/AtomScene";
import Jobs from "@/components/sections/Jobs";
import Contact from "@/components/sections/Contact";
import AboutMe from "@/components/sections/AboutMe";

import { useEffect, useState } from "react";
import Buildings from "@/components/Buildings";

export default function Home() {
  const [loading, setLoading] = useState(true);

  function preventScrollForTime(duration: number) {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling after the specified duration
    setTimeout(() => {
      document.body.style.overflow = ""; // Re-enable scrolling
    }, duration);
  }

  // Example usage: Prevent scrolling for 3 seconds (3000 milliseconds)

  useEffect(() => {
    preventScrollForTime(3000);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen overflow-hidden screen-container font-cold-warm">
      <span className="fixed top-0 left-0 w-full h-full -z-40 bg-gradient-to-tl from-white via-white/10 to-white" />
      <Particles
        className="fixed inset-0 -z-50 animate-fade-in "
        quantity={200}
      />

      <div className="relative flex flex-col items-center justify-center w-full h-screen select-none">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 to-zinc-300/0" />
        <span className="relative bg-[url('/chill-stars.gif')] bg-size-200 bg-fixed z-10 text-transparent duration-1000 cursor-default text-9xl lg:text-[300px] bg-black/90 animate-title whitespace-nowrap bg-clip-text ">
          <h2 className="absolute bottom-[95%] left-1 text-xl lg:text-2xl text-start text-zinc-700 animate-fade-in">
            Hi, I&apos;m
          </h2>
          <h1 className="font-shump">Leon</h1>
          <h2 className="absolute top-[100%] right-0 text-xl lg:text-2xl text-start text-zinc-700 animate-fade-in">
            Web Developer
          </h2>
        </span>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 to-zinc-300/0" />

        <span className="w-screen h-14 sm:h-6 bg-black absolute bottom-0 animate-fade-in-up">
          <Buildings className="absolute w-full bottom-[100%] h-24" />
        </span>
      </div>

      <AtomScene loading={loading} />
      <AboutMe loading={loading} />
      <Jobs loading={loading} />
      <Contact loading={loading} />
    </div>
  );
}
