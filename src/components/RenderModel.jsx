// components/RenderModel.jsx
"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState, useEffect } from "react";

const RenderModel = ({ children, className, enableZoom = true }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 30, 100], fov: 50 }}
      style={{ 
        touchAction: isMobile ? "auto" : "none",
        pointerEvents: isMobile ? "none" : "auto"
      }}
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      
      <Suspense fallback={null}>
        {children}
        {/* OrbitControls をここに入れる（子コンポーネントでもOK） */}
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.6} 
          enableZoom={enableZoom}
          enablePan={!isMobile}
          enableRotate={!isMobile}
          enableDamping={!isMobile}
        />

       
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
