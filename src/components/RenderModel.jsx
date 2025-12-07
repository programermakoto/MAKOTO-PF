// components/RenderModel.jsx
"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className, enableZoom = true }) => {
  return (
    <Canvas
      camera={{ position: [0, 30, 100], fov: 50 }}
      style={{ touchAction: "none" }} // モバイルでのスクロール干渉を抑える
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      
      <Suspense fallback={null}>
        {children}
        {/* OrbitControls をここに入れる（子コンポーネントでもOK） */}
        <OrbitControls autoRotate autoRotateSpeed={0.6} enableZoom={enableZoom} />

       
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
