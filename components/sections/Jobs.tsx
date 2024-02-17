"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Card } from "../CardDark";
import Image from "next/image";
import Link from "next/link";
import IconDisplay from "../IconDisplay";
import { Github, Link as LinkIcon } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";

const Jobs = ({ loading = false }: { loading?: boolean }) => {
  const { width } = useWindowDimensions();

  const jobs = [
    {
      title: "Acelera",
      src: "/screens/acelera.png",
      date: "Dec 2023 - Jan 2024",
      alt: "Acelera Image",
      stack: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "TypeScript",
        "GitHub",
        "Docker",
      ],
      info: "Autoparts E-Commerce",
      href: "/",
      git: "/",
    },
    {
      title: "Hubbi",
      src: "/screens/hubbi-web.png",
      date: "Sep 2022 - Dec 2023",
      alt: "Hubbi Image",
      stack: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "GitLab",
        "AWS",
      ],
      info: "Autoparts Marketplace platform that connects consumers, retailers, and suppliers",
      href: "https://hubbi.app",
      git: "/",
    },
    {
      title: "StarWiki",
      src: "/screens/starwiki-web.png",
      date: "Sep 2022",
      alt: "StarWiki Image",
      stack: ["JavaScript", "React.js", "Tailwind CSS", "GitHub"],
      info: "API consuming challenge from 2022",
      href: "https://star-wiki.vercel.app/",
      git: "https://github.com/Axenrot/star-wiki",
    },
    {
      title: "GameMind",
      src: "/screens/gamemind-web.png",
      date: "Jul 2021 - Sep 2022",
      alt: "GameMind Image",
      stack: ["JavaScript", "React.js", "Tailwind CSS", "Next.js", "GitHub"],
      info: "Gamified Education Platform",
      href: "https://gmnd.vercel.app/",
      git: "/",
    },
  ];

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        ".jobs-title",
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.1,
          duration: 0.2,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".jobs-title",
            toggleActions: "play none resume reset",
          },
        }
      );

      gsap.fromTo(
        ".jobs-subtitle",
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.03,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".jobs-subtitle",
            toggleActions: "play none resume reset",
          },
        }
      );

      jobs.forEach((_, index) => {
        gsap.fromTo(
          `.card-${index}`,
          {
            opacity: 0,
            translateX: index % 2 != 1 ? -30 : 30,
          },
          {
            opacity: 1,
            duration: 0.3,
            delay: 0.2,
            translateX: 0,
            scrollTrigger: {
              trigger: `.card-${index}`,
              toggleActions: "play none resume reset",
            },
          }
        );
      });
    }
  }, [loading]);

  return (
    <section
      data-loading={loading}
      className="data-[loading=true]:hidden relative w-full bg-gradient-to-b from-black/90 to-zinc-900/60 rotate-x-1 h-fit py-24"
    >
      <div className="container px-3 md:px-6 lg:px-12 flex flex-col gap-12 pt-12 mx-auto mb-12 transition-all duration-500 select-none">
        <h1 className="relative flex flex-col self-center justify-start w-full drop-shadow-xl">
          <span
            translate="no"
            className="jobs-title flex text-white text-4xl tracking-wide sm:text-6xl md:text-4xl lg:text-6xl whitespace-nowrap"
          >
            Jobs<p className="text-zinc-600">.</p>
          </span>
          <span className="jobs-subtitle text-2xl font-light md:text-2xl lg:text-3xl text-zinc-400">
            Check out some of my featured jobs
          </span>
        </h1>
        <span className="grid gap-6 xl:grid-cols-2 cards">
          {jobs.map(
            ({ title, date, info, src, alt, href, git, stack }, index) => {
              return (
                <Card key={`jobs-${index}`} target={`card-${index}`}>
                  <span
                    data-reverse={index % 2 != 1}
                    className=" relative data-[reverse=true]:md:flex-row-reverse flex flex-col justify-between shadow-lg w-full h-full gap-6 p-6 md:flex-row md:h-72"
                  >
                    <span className="flex flex-col items-start justify-between flex-shrink gap-2 text-center text-white transition-all duration-300 md:w-1/2">
                      <span className="flex flex-col items-start self-start w-full gap-1">
                        <span className="flex items-center justify-between w-full gap-1">
                          <h3
                            translate="no"
                            className="w-full text-2xl sm:text-3xl text-start"
                          >
                            {title}
                          </h3>
                          <h4
                            translate="no"
                            className="text-xl sm:text-lg font-forced-square whitespace-nowrap"
                          >
                            {date}
                          </h4>
                        </span>
                        <p className="w-full my-2 font-light font-absolut-pro text-2xl leading-5 text-start">
                          &quot;{info}&quot;
                        </p>
                      </span>
                      <span className="flex gap-2 font-sans font-light text-md mt-auto text-start whitespace-nowrap">
                        {stack.map((name) => (
                          <IconDisplay
                            key={`icon-${name}`}
                            size={width > 1024 ? 30 : width < 450 ? 30 : 40}
                            name={name}
                          />
                        ))}
                      </span>
                      <span className="flex gap-2">
                        {href != "/" ? (
                          <Link href={href} className="mt-3 btn-primary">
                            <LinkIcon size={20} />
                            Visit
                          </Link>
                        ) : (
                          <button disabled className="mt-3 btn-primary">
                            <LinkIcon size={20} />
                            Unavailable
                          </button>
                        )}

                        {git != "/" && (
                          <Link href={git} className="mt-3 btn-primary">
                            <Github size={20} />
                            Visit
                          </Link>
                        )}
                      </span>
                    </span>
                    <div className="self-center flex-1 w-full md:w-1/2 aspect-video ">
                      <Image
                        src={src}
                        alt={alt}
                        width={350}
                        height={200}
                        className="w-full h-full transition-all duration-500 rounded-sm opacity-100 ring-2 ring-offset-2 ring-offser-gray-200 ring-black"
                      />
                    </div>
                  </span>
                </Card>
              );
            }
          )}
        </span>
      </div>
    </section>
  );
};

export default Jobs;
