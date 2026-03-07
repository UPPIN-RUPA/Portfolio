import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="#3b2a1d" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.14}
        penumbra={1}
        intensity={1.25}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.76 : 0.9}
        position={isMobile ? [0, -3.25, -2.2] : [1.15, -3.95, -1.35]}
        rotation={[-0.02, -0.22, -0.08]}
      />
    </mesh>
  );
};

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    setIsWebGLSupported(hasWebGL());

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const shouldRenderCanvas = useMemo(
    () => !isMobile && isWebGLSupported,
    [isMobile, isWebGLSupported]
  );

  return (
    <>
      {shouldRenderCanvas && (
        <Canvas
          className="pointer-events-none"
          frameloop="always"
          shadows
          dpr={[1, 2]}
          camera={{ position: [18, 2, 5], fov: 28 }}
          gl={{ preserveDrawingBuffer: true, alpha: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.45}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ComputersCanvas;
