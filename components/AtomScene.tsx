"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Atom from "./models/Atom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AtomScene = () => {
  const [preventEffect, setPreventEffect] = useState<boolean>(false);
  const cameraPosition = new THREE.Vector3(0, 3, 0);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  function runGsap() {
    var container_tl = gsap.timeline();

    container_tl.fromTo(
      "#container",
      {
        left: "100%",
        translateX: "-100%",
        bottom: "0%",
      },
      {
        left: "-50%",
        translateX: "0%",
        top: "30%",
        zIndex: "-1",
        width: "50vh",
        height: "50vh",
        ease: "linear",
        scrub: 3,
      },
      "1%"
    );

    container_tl.fromTo(
      "#container",
      { left: "-50%" },
      {
        left: "0%",
        translateX: "-30%",
        top: "10%",

        // translateY: "0%",
        width: "80vh",
        height: "80vh",
        ease: "linear",
        scrub: 3,
      },
      "50%"
    );

    ScrollTrigger.create({
      trigger: ".screen-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      animation: container_tl,
    });

    var canva_tl = gsap.timeline();

    canva_tl.fromTo(
      containerRef.current,
      { width: "30vh", height: "30vh" },
      {
        width: "50vh",
        height: "50vh",
        ease: "linear",
      },
      "0%"
    );

    canva_tl.fromTo(
      containerRef.current,
      { width: "50vh", height: "50vh" },
      {
        width: "80vh",
        height: "80vh",
        ease: "linear",
      },
      "50%"
    );

    ScrollTrigger.create({
      trigger: ".screen-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      animation: canva_tl,
    });
  }

  useEffect(() => {
    if (!preventEffect) {
      runGsap();
    } else {
      setPreventEffect(false);
    }
  }, [preventEffect]);

  return !preventEffect ? (
    <span
      id="container"
      className="fixed -z-10 animate-fade-in-delayed top-0 right-0 w-[30vh] h-[30vh]"
    >
      <Canvas
        ref={containerRef}
        camera={{ near: 1, far: 1000, position: cameraPosition }}
      >
        <Suspense fallback={<div className="w-full h-full" />}>
          <ambientLight intensity={0.05} />
          <directionalLight castShadow intensity={1.7} position={[0, 0, -3]} />

          {/* <OrbitControls enablePan={false} maxDistance={3} minDistance={3} /> */}
          <Atom scale={[0.5, 0.5, 0.5]} />
        </Suspense>
      </Canvas>
    </span>
  ) : (
    <></>
  );
};

export default AtomScene;