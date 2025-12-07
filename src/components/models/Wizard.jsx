"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Center } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(
    "/models/medieval_fantasy_book-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // スマホだけスケール変更
  const scale = isMobile ? 0.2 : 1;

  return (
    <group ref={group} {...props} scale={scale} dispose={null}>
      {/* ← ここを追加するだけで SP でも中央に来る */}
      <Center childrenAsGroup>
        <group name="Sketchfab_Scene">
          <group name="RootNode">
            <group
              name="flag"
              position={[0, -0.4, 0]}
              scale={[3.4, 0.18, 0.18]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
            >
              <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                <mesh
                  name="0"
                  castShadow
                  receiveShadow
                  geometry={nodes["0"].geometry}
                  material={materials["Texture-base"]}
                  morphTargetDictionary={nodes["0"].morphTargetDictionary}
                  morphTargetInfluences={nodes["0"].morphTargetInfluences}
                />
              </group>
            </group>

            <group
              name="flag-second"
              position={[-11.494, 12.552, -26.245]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                <mesh
                  name="1"
                  castShadow
                  receiveShadow
                  geometry={nodes["1"].geometry}
                  material={materials["Texture-base"]}
                  morphTargetDictionary={nodes["1"].morphTargetDictionary}
                  morphTargetInfluences={nodes["1"].morphTargetInfluences}
                />
              </group>
            </group>
          </group>

          <group
            name="Scene"
            position={[-4.794, 0, 0.278]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              name="Mill-wind-wheel"
              position={[-35.783, -27.192, 3.888]}
              rotation={[0.445, -0.447, -0.498]}
            >
              <group
                name="Object_11"
                position={[-8.253, 39.884, -25.75]}
                rotation={[-0.607, 0.138, 0.644]}
              >
                <mesh
                  name="Mill-wind-wheel_Texture-base_0"
                  castShadow
                  receiveShadow
                  geometry={nodes["Mill-wind-wheel_Texture-base_0"].geometry}
                  material={materials["Texture-base"]}
                />
              </group>
            </group>

            <group
              name="Mill-water-wheel"
              position={[3.708, -15.395, -0.444]}
              rotation={[-1.92, 0, 0]}
            >
              <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                <mesh
                  name="Mill-water-wheel_Texture-base_0"
                  castShadow
                  receiveShadow
                  geometry={nodes["Mill-water-wheel_Texture-base_0"].geometry}
                  material={materials["Texture-base"]}
                />
              </group>
            </group>
          </group>

          <mesh
            name="Scene_Texture-base_0"
            castShadow
            receiveShadow
            geometry={nodes["Scene_Texture-base_0"].geometry}
            material={materials["Texture-base"]}
            position={[-18.794, 4.337, -15.51]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Scene_Texture-base-gloss-jpg_0"
            castShadow
            receiveShadow
            geometry={nodes["Scene_Texture-base-gloss-jpg_0"].geometry}
            material={materials["Texture-base-gloss-jpg"]}
            position={[-18.794, 4.337, -15.51]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Scene_Book-tittle_0"
            castShadow
            receiveShadow
            geometry={nodes["Scene_Book-tittle_0"].geometry}
            material={materials["Book-tittle"]}
            position={[-18.794, 4.337, -15.51]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload("/models/medieval_fantasy_book-transformed.glb");
