import ChromeIcon from "@/components/icons/ChromeIcon";
import NutFillIcon from "@/components/icons/NutFillIcon";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutMe = ({ loading = false }: { loading?: boolean }) => {
  const perks = [
    "High Standards",
    "JavaScript and English",
    "Front-End Technologies",
    "Responsive Design",
    "Reusable Components",
    "Secure Coding",
    "API Consuming",
    "State Management",
    "Effective Communication",
    "Rapidly adapts to new technologies",
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
    }
  }, [loading]);

  // Function to pause the animation
  const pauseAnimation = () => {
    if (tl.current) {
      tl.current.pause();
    }
  };

  // Function to resume the animation
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
        <h1 className="flex flex-col self-center justify-start w-full drop-shadow-xl">
          <span className="w-full flex text-white text-5xl tracking-wide sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-center justify-center md:justify-start md:text-start md:whitespace-nowrap">
            WEB ARTIST SINCE 2020
          </span>
          <span className=" text-3xl font-light md:text-3xl lg:text-4xl xl:text-5xl text-zinc-400 text-center md:text-start md:whitespace-nowrap">
            Professional interface developer
          </span>
        </h1>

        <h2 className="text-4xl mt-16 font-cold-warm text-white">Mastery</h2>
        <div className="h-px md:block bg-gradient-to-r w-1/2 from-zinc-500/50 via-zinc-300/10 to-zinc-300/0" />

        <ul className="py-6 font-light gap-1 list-none list-inside flex flex-col font-absolut-pro">
          {perks.map((perk, index) => (
            <li
              key={index}
              className="flex gap-2 text-2xl sm:text-3xl md:text-4xl items-center"
            >
              <NutFillIcon height={20} width={20} /> {perk}
            </li>
          ))}
        </ul>
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
