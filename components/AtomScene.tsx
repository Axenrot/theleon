"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Atom from "./models/Atom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AtomScene = ({ loading = false }: { loading?: boolean }) => {
  const [preventEffect, setPreventEffect] = useState(true);
  const cameraPosition = new THREE.Vector3(0, 3, 0);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  function runGsap() {
    var container_tl = gsap.timeline();

    container_tl.fromTo(
      "#container",
      {
        left: "100%",
        opacity: "100%",
        translateX: "-100%",
        bottom: "0%",
        width: "30vh",
        height: "30vh",
      },
      {
        left: "-80%",
        opacity: "100%",
        translateX: "0%",
        top: "30%",
        zIndex: "-1",
        width: "60vh",
        height: "60vh",
        ease: "linear",
      },
      "1%"
    );

    container_tl.fromTo(
      "#container",
      { left: "-120%", width: "80vh", height: "80vh" },
      {
        left: "0%",
        translateX: "-30%",
        top: "10%",
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
      scrub: 3,
      animation: container_tl,
    });

    var canva_tl = gsap.timeline();

    canva_tl.fromTo(
      containerRef.current,
      { width: "30vh", height: "30vh", opacity: "100%" },
      {
        opacity: "100%",
        width: "60vh",
        height: "60vh",
        ease: "linear",
      },
      "0%"
    );

    canva_tl.fromTo(
      containerRef.current,
      { width: "80vh", height: "80vh" },
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
    if (preventEffect) {
      setPreventEffect(false);
    } else if (loading) {
      gsap.fromTo(
        "#container",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 3, ease: "power4.in" }
      );
    } else if (!loading) {
      runGsap();
    }
  }, [loading, preventEffect]);

  return (
    <span
      id="container"
      className="fixed -z-10 top-0 right-0 w-[30vh] h-[30vh]"
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
  );
};

export default AtomScene;
