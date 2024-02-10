"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, black, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative z-10 overflow-hidden h-full w-full cursor-context-menu duration-700 border-[3px] select-none rounded-xl hover:bg-zinc-800/30 md:gap-8 hover:border-zinc-800/60 border-zinc-800/10 "
    >
      <span className="absolute w-full h-full bg-[url('/black-texture.jpg')] bg-black -z-30" />
      <span className="absolute w-full h-full bg-black/70 -z-20" />
      <div className="absolute w-full h-full">
        <div className="absolute inset-0 -z-10  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 transition duration-1000 bg-white/30 -z-10"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
