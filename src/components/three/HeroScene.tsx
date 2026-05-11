"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { WireframeIcosahedron } from "./WireframeIcosahedron";
import { useState } from "react";

export function HeroScene() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={dpr}
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(1.5)}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={0.5} />
            <WireframeIcosahedron />
            <EffectComposer>
              <Bloom
                intensity={0.3}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
