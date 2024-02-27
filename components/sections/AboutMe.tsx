import ChromeIcon from "@/components/icons/ChromeIcon";
import NutFillIcon from "@/components/icons/NutFillIcon";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AboutMe = ({ loading = false }: { loading?: boolean }) => {
  const perks = [
    "Expertise in React & Next.js",
    "Proficient in JavaScript & TypeScript",
    "Seasoned Full-Stack Developer",
    "Skilled in UX/UI Design",
    "Specialist in Responsive Design",
    "Focused on Security Best Practices",
    "Experienced in API Integration",
    "Strong Communication Skills",
  ];
  const slogans = [
    "GET MORE POWER",
    "REALIZE DREAMS",
    "CHOOSE EXCELLENCE",
    "CONTACT NOW",
    "DRIVE RESULTS",
    "OPTIMIZE YOUR TEAM",
  ];

  const tl = useRef<any>(null);

  useEffect(() => {
    if (!loading) {
      tl.current = gsap.to(".boxes", {
        xPercent: -50,
        ease: "linear",
        duration: 50,
        repeat: -1,
      });

      gsap.fromTo(
        ".about-title",
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          delay: 0.1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".about-title",
            toggleActions: "play none resume reset",
          },
        }
      );

      gsap.fromTo(
        ".about-subtitle",
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
            trigger: ".about-subtitle",
            toggleActions: "play none resume reset",
          },
        }
      );

      gsap.fromTo(
        ".perk",
        {
          opacity: 0,
          translateX: 50,
        },
        {
          opacity: 1,
          duration: 0.2,
          delay: 0.2,
          translateX: 0,
          stagger: 0.05,
          // delay: 0.2,
          ease: "linear",
          scrollTrigger: {
            trigger: ".perk",
            start: "top bottom",
            toggleActions: "play none resume reset",
          },
        }
      );
    }
  }, [loading]);

  const pauseAnimation = () => {
    if (tl.current) {
      tl.current.pause();
    }
  };

  const resumeAnimation = () => {
    if (tl.current) {
      tl.current.play();
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      data-loading={loading}
      className="data-[loading=true]:hidden relative flex flex-col w-full bg-gradient-to-b to-black/90 from-black md:pt-12 lg:pt-24"
    >
      <span className="container px-3 md:px-6 lg:px-12 mx-auto flex flex-col p-6 text-white bg-no-repeat contentbox">
        <h1 className="relative overflow-hidden flex select-none flex-col self-center justify-start w-full drop-shadow-xl">
          <span className="about-title w-full flex text-white text-5xl tracking-wide sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-center justify-center md:justify-start md:text-start md:whitespace-nowrap">
            WEB ARTIST SINCE 2020
          </span>
          <span className="flex items-center about-subtitle text-3xl font-light md:text-3xl lg:text-4xl xl:text-5xl text-zinc-400 text-center md:text-start md:whitespace-nowrap">
            Professional interface developer
          </span>
        </h1>

        <span className="mastery flex flex-col">
          <h2 className="perk gap-6 flex select-none text-4xl mt-16 font-cold-warm text-white">
            Mastery
            <Link href={"/curriculum"} className="ml-auto btn-primary text-sm">
              Curriculum
            </Link>
          </h2>
          <div className="h-px md:block bg-gradient-to-r w-1/2 from-zinc-500/50 via-zinc-300/10 to-zinc-300/0" />

          <ul className="py-6 select-none font-light list-none list-inside flex flex-col font-absolut-pro">
            {perks.map((perk, index) => (
              <li
                key={index}
                className="perk flex gap-2 hover:text-black hover:font-bold hover:bg-white p-2 pb-1 rounded-sm transition-all duration-200 text-2xl sm:text-3xl md:text-4xl items-center"
              >
                <NutFillIcon height={20} width={20} /> {perk}
              </li>
            ))}
          </ul>
        </span>
        <button
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          onClick={scrollToContact}
          className="cursor-pointer select-none hover:ring-4 hover:text-black hover:bg-white  ring-zinc-200 transition-all duration-200 ring-2 flex px-3 mt-6 text-lg md:text-xl xl:text-2xl text-zinc-200 overflow-hidden p-2 rounded-full w-full h-12 md:h-14"
        >
          <div className="boxes items-center self-center flex gap-3 flex-nowrap whitespace-nowrap">
            {slogans.map((slogan, index) => {
              return (
                <div
                  className="flex gap-3 items-center"
                  key={`slogan-${index}`}
                >
                  <div className="text-2xl md:text-4xl">{slogan}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
            {slogans.map((slogan, index) => {
              return (
                <div
                  className="flex gap-3 items-center"
                  key={`slogan2-${index}`}
                >
                  <div className="text-2xl md:text-4xl">{slogan}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
          </div>
        </button>
      </span>
    </section>
  );
};

export default AboutMe;
