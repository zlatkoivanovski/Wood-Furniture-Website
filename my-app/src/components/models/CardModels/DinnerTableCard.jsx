import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { DinnerTable } from "../DinnerTable";

const DinnerTableCard = ({
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  cameraPosition = [0, 5, 20],
  cameraFov = 35,
  enableZoom = false,
  maxDistance = 600,
  minDistance = 400,
  enablePan = false,
  minPolarAngle = 0,
  maxPolarAngle = Math.PI / 2,
  enableHoverAnimation = true,
  canvasClassName = "w-full h-full",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const groupRef = React.useRef();

  React.useEffect(() => {
    let animationFrame;
    if (enableHoverAnimation && isHovered) {
      const animate = () => {
        if (groupRef.current) {
          groupRef.current.rotation.y += 0.01;
        }
        animationFrame = requestAnimationFrame(animate);
      };
      animate();
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, enableHoverAnimation]);

  return (
    <div
      className="h-[40vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov }}
        className={canvasClassName}
      >
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={enablePan}
          maxDistance={maxDistance}
          minDistance={minDistance}
          minPolarAngle={minPolarAngle}
          maxPolarAngle={maxPolarAngle}
        />
        <Suspense fallback={null}>
          <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
            <DinnerTable />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DinnerTableCard;