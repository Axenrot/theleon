import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

export default function Atom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/atom.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const rotationTimeline = gsap.timeline({ repeat: -1 });
    rotationTimeline.fromTo(
      group.current.rotation,
      { z: 0 },
      { z: Math.PI * 2, duration: 5, ease: "none" }
    );
  }, [group]);

  useEffect(() => {
    actions["Take 01"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0.3, 0.15, 0]}>
      <group rotation={[0.7, 0.4, 1.5]} name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.003, 0.011, -0.077]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name="Root">
            <group
              name="Lamp"
              position={[3.674, 4.234, 6.156]}
              rotation={[-0.254, 0.517, 1.905]}
            >
              <group name="Lamp_1" />
            </group>
            <group
              name="core"
              position={[0.001, -0.002, 0.004]}
              rotation={[1.006, -0.029, -0.064]}
              scale={0.505}
            >
              <mesh
                name="core_0"
                castShadow
                receiveShadow
                geometry={nodes.core_0.geometry}
                material={materials.core}
              />
            </group>
            <group name="electron_shell" rotation={[0.823, 0.745, 3.089]}>
              <mesh
                name="electron_shell_0"
                castShadow
                receiveShadow
                geometry={nodes.electron_shell_0.geometry}
                material={materials.electron_shell}
              />
            </group>
            <group name="electron_shell2" rotation={[-0.995, -0.332, 0.453]}>
              <mesh
                name="electron_shell2_0"
                castShadow
                receiveShadow
                geometry={nodes.electron_shell2_0.geometry}
                material={materials.electron_shell}
              />
            </group>
            <group name="electron_shell3" rotation={[3.078, -0.097, -0.048]}>
              <mesh
                name="electron_shell3_0"
                castShadow
                receiveShadow
                geometry={nodes.electron_shell3_0.geometry}
                material={materials.electron_shell}
              />
            </group>
            <group
              name="electron_2"
              position={[0.137, -0.01, -0.077]}
              rotation={[0.847, 0.748, 3.049]}
            >
              <mesh
                name="electron_2_0"
                castShadow
                receiveShadow
                geometry={nodes.electron_2_0.geometry}
                material={materials.electron}
              />
            </group>
            <group
              name="electron__3"
              position={[0.13, -0.01, -0.099]}
              rotation={[3.074, -0.096, -0.08]}
            >
              <mesh
                name="electron__3_0"
                castShadow
                receiveShadow
                geometry={nodes.electron__3_0.geometry}
                material={materials.electron}
              />
            </group>
            <group
              name="electron_1"
              position={[0.135, -0.007, -0.083]}
              rotation={[-1.007, -0.317, 0.466]}
            >
              <mesh
                name="electron_1_0"
                castShadow
                receiveShadow
                geometry={nodes.electron_1_0.geometry}
                material={materials.electron}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/atom.glb");
