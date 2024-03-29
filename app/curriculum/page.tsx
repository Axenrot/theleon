"use client";
import { Home, HomeIcon, LucideHome } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Curriculum() {
  return (
    <main className="flex font-cold-warm f h-full min-h-screen flex-col items-center bg-white bg-gradient-to-t from-black/90 to-black/80 text-lg lg:text-3xl text-neutral-700 justify-between">
      <span className="bg-white gradient-to-t from-zinc-800/30 to-zinc-800 w-full h-16 flex justify-center items-center">
        <span className="container select-none px-3 flex w-full justify-between">
          <h1 className="">Leon&apos;s Journey</h1>
          <Link
            href={"/"}
            className="flex gap-2 hover:text-opacity-80 hover:scale-105 transition-all duration-200 items-center justify-center"
          >
            <HomeIcon />
            Go Back?
          </Link>
        </span>
      </span>
      <div className="container flex-1 mb-6 md:gap-12 my-6 px-3 flex flex-col md:flex-row mx-auto items-center justify-center">
        <object
          data="/YuriLeonEN.pdf#view=FitH"
          type="application/pdf"
          width="100%"
          height="100%"
          className="items-center justify-center flex-col gap-6 flex-1 h-[10vh] md:h-[90vh] shadow-lg rounded-md flex bg-opacity-100"
        >
          <p className="text-center font-absolut-pro">
            Your device couldn&apos;t load the PDF content but you can download
            it instead
          </p>
          <Link
            className="btn-primary"
            href="https://drive.google.com/file/d/1CZlxh8tNR0ASAsarKrItiQMoxjGBDbET/view?usp=sharing"
          >
            PDF Link!
          </Link>
        </object>
      </div>
    </main>
  );
}
