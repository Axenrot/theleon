import Buildings from "../Buildings";
import ChromeIcon from "@/components/icons/ChromeIcon";
import gsap from "gsap";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const perks = [
    "Expertise with frameworks and page design",
    "Clean and responsive, user-focused interfaces",
    "High standards of secure coding",
    "Pro in learning new technologies and concepts",
    "Extrovert and communicative",
  ];
  const [preventEffect, setPreventEffect] = useState<boolean>(false);

  function runGsap() {
    gsap.to(".boxes", {
      xPercent: -50,
      ease: "linear",
      duration: 50,
      repeat: -1,
    });
  }
  useEffect(() => {
    if (!preventEffect) {
      runGsap();
    } else {
      setPreventEffect(false);
    }
  }, [preventEffect]);

  return (
    <div className="relative flex flex-col w-full px-3 animate-fade-in-up bg-gradient-to-b to-black/90 from-black sm:px-6 md:px-12 lg:px-24 p-24">
      <Buildings className="left-0 h-24" />
      <span
        // style={{ backgroundSize: "0% 100%" }}
        className="flex flex-col gap-6 p-6 text-white bg-no-repeat contentbox"
      >
        <h1 className="text-3xl4 md:text-4xl lg:text-6xl tracking-wide">
          WEB ARTIST SINCE 2020
        </h1>
        <span className="flex flex-col gap-6 text-2xl font-absolut-pro font-light drop-shadow-lg md:text-3xl text-zinc-300 lg:text-4xl">
          <p className="leading-[45px]">
            Passionate about creating user friendly and visually appealing
            interfaces.
          </p>
          <p className="leading-[45px]">
            I come with experience in the role,{" "}
            <strong className="font-medium text-white">Scrum management</strong>
            , effective problem-solving, strong{" "}
            <strong className="font-medium text-white">English</strong>{" "}
            proficiency, and the capability to handle anything involving{" "}
            <strong className="font-medium text-white">JavaScript</strong>.
          </p>
          <p>Seeking for my first international career opportunity!</p>
        </span>
        <div className="border-2 flex px-3 mt-6 text-lg md:text-xl xl:text-2xl text-zinc-200 overflow-hidden p-2 rounded-full w-full h-14">
          <div className="boxes items-center self-center flex gap-3 flex-nowrap whitespace-nowrap">
            {perks.map((perk, index) => {
              return (
                <div className="flex gap-3" key={`perk-${index}`}>
                  <div>{perk}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
            {perks.map((perk, index) => {
              return (
                <div className="flex gap-3" key={`perk2-${index}`}>
                  <div>{perk}</div>
                  <span className={"animate-rotate"}>
                    <ChromeIcon width={30} height={30} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </span>
    </div>
  );
};

export default AboutMe;
