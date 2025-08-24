import React from "react";
import { Kitchen } from "./models/Modern_kitchen";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import tvSand from "../../public/images/tvstand1_1.jpg";
import Carousel from "./Carousel";

const Hero = () => {

  return (
    <div className="flex flex-col gap-0">
      <div className="bg-customGray text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-[15vw] py-12 md:py-40">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-center md:items-start text-center md:text-left font-poppins">
          <h1 className="font-semibold text-3xl md:text-6xl mb-6 md:mb-10 leading-tight">
            Craft Your <br /> Dream Space
          </h1>

          <p>
            Discover handcrafted wooden shelves, kitchen cabinets, and closets
            <br className="hidden md:block" />
            tailored to your style. Explore our portfolio, customize your
            <br className="hidden md:block" />
            furniture with interactive 3D models, and bring your vision to life
            <br className="hidden md:block" />
            with our expert craftsmanship. Start designing today!
            <br className="hidden md:block" />
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={tvSand}
            alt="Golden Wooden Furniture"
            className="rounded-lg shadow-lg max-h-60 md:max-h-[28rem] object-cover w-full md:w-auto"
          />
        </div>
      </div>
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-customGray">
        <div className="w-full h-full max-w-5xl mx-auto">
          <Canvas
            camera={{ position: [0, 5, 20], fov: 23 }}
            className="w-full h-full bg-customGray"
          >
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, 5, -5]} intensity={1} />
            <directionalLight position={[5, -5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={1} />
            <ambientLight intensity={0.2} color="#1a1a40" />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxDistance={600}
              minDistance={10}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
            />
            <Suspense fallback={null}>
              <group position={[0, 0, 0]} rotation={[0, 0.2, 0]}>
                <Kitchen />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
      <Carousel />

      <div className="bg-customGray text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-[43vh] py-12 md:py-40 font-poppins">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-6xl mb-6 md:mb-10 leading-tight">
            Questions? <br /> Let's Talk
          </h1>
          <p className="text-base md:text-lg opacity-40">
            Contact me through my e-mail. <br />
            I'am always happy to help!
          </p>
          <div className="mt-10">
            <Link
              to={"/contact"}
              className="bg-customYellow rounded-lg text-black py-3 px-6"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Hero;
