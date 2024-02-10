"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import { Card } from "../../CardLight";
import Link from "next/link";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/yurileon/",
    label: "LinkedIn",
    handle: "@yurileon",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:yurileon@hotmail.com.br",
    label: "Email",
    handle: "yurileon@hotmail.com.br",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/axenrot",
    label: "Github",
    handle: "Axenrot",
  },
];

export default function ContactLinks() {
  return (
    <div className="flex flex-col items-end justify-end w-full pt-6 border-t md:border-t-0 gap-6 mx-auto md:w-1/2 lg:w-1/3">
      {socials.map((s) => (
        <Card key={`socials-${s.label}`}>
          <Link
            href={s.href}
            target="_blank"
            className="relative flex flex-row items-center gap-4 p-4 duration-700 lg:gap-2 xl:px-6 h-fit group xl:gap-6"
          >
            <span className="relative z-10 flex items-center justify-center text-sm duration-1000 border rounded-full w-9 h-9 lg:w-12 lg:h-12 shrink-0 text-zinc-900 group-hover:text-black group-hover:bg-zinc-100 border-zinc-900 bg-zinc-100 group-hover:border-zinc-800">
              {s.icon}
            </span>
            <div className="z-10 flex flex-col items-start">
              <span className="w-full truncate duration-150 text-md xl:text-xl text-zinc-800/90 group-hover:text-black font-absolut-pro font-bold">
                {s.handle}
              </span>
              <span className="text-sm font-light text-center duration-1000 text-zinc-100 group-hover:text-white">
                {s.label}
              </span>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
