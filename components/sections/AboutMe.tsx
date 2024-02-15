import Buildings from "../Buildings";
import ChromeIcon from "@/components/icons/ChromeIcon";
import gsap from "gsap";
import Tween from "gsap";
import { useEffect, useRef, useState } from "react";

const AboutMe = ({ loading = false }: { loading?: boolean }) => {
  const perks2 = [
    "Expertise with frameworks and page design",
    "Clean and responsive, user-focused interfaces",
    "High standards of secure coding",
    "Pro in learning new technologies and concepts",
    "Extrovert and communicative",
  ];

  const perks = [
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
      className="data-[loading=true]:hidden relative flex flex-col w-full bg-gradient-to-b to-black/90 from-black py-24"
    >
      <span
        // style={{ backgroundSize: "0% 100%" }}
        className="container px-3 md:px-6 lg:px-12 mx-auto flex flex-col gap-6 p-6 text-white bg-no-repeat contentbox"
      >
        <h1 className="flex text-white text-4xl tracking-wide sm:text-6xl md:text-4xl lg:text-6xl whitespace-nowrap">
          WEB ARTIST SINCE 2020
        </h1>
        <span className="flex flex-col gap-6 text-2xl font-absolut-pro font-light drop-shadow-lg md:text-3xl text-zinc-300 lg:text-4xl">
          <p className="leading-[45px]">
            Passionate about creating user friendly and visually appealing
            interfaces.
          </p>
          <p className="leading-[45px]">
            Experienced in the roles:{" "}
            <strong className="font-medium text-white">SCRUM management</strong>
            , effective problem-solving, strong{" "}
            <strong className="font-medium text-white">English</strong>{" "}
            proficiency, and the capability to handle anything involving{" "}
            <strong className="font-medium text-white">JavaScript</strong>.
          </p>
          <p>Seeking for my first international career opportunity!</p>
        </span>
        <div
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          onClick={scrollToContact}
          className="cursor-pointer select-none hover:ring-4 hover:text-black hover:bg-white  ring-zinc-200 transition-all duration-200 ring-2 flex px-3 mt-6 text-lg md:text-xl xl:text-2xl text-zinc-200 overflow-hidden p-2 rounded-full w-full h-14"
        >
          <div className="boxes items-center self-center flex gap-3 flex-nowrap whitespace-nowrap">
            {perks.map((perk, index) => {
              return (
                <div className="flex gap-3 items-center" key={`perk-${index}`}>
                  <div className="text-4xl">{perk}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
            {perks.map((perk, index) => {
              return (
                <div className="flex gap-3 items-center" key={`perk2-${index}`}>
                  <div className="text-4xl">{perk}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </span>
    </section>
  );
};

export default AboutMe;
