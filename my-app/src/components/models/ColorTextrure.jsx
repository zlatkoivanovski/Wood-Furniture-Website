import React, { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { PaintBucket, ImagePlus } from "lucide-react";
import { ChromePicker } from "react-color";
import { DinnerTable } from "./DinnerTable";
import { ShoesDresser } from "./ShoesDresser";
import { DressingTable } from "./DressingTable";
import { Chair } from "./Chair";
import { Shelf } from "./Shelf";

import {cardsData} from "../../constants";

const textureOptions = [
  { name: "None", url: null },
  { name: "Wood", url: "/textures/wood.jpg" },
  { name: "Seamless", url: "/textures/seamless.jpg" },
  { name: "Fabric", url: "/textures/fabric.jpg" },
];

const ColorTextrure = () => {
  const [color, setColor] = useState("#ffffff");
  const [textureUrl, setTextureUrl] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showTexture, setShowTexture] = useState(false);

  const models = [ShoesDresser, DinnerTable, DressingTable, Chair, Shelf];
  const { id } = useParams();

  const getModelById = (id) => {
    const modelIndex = (id - 1) % models.length;
    const SelectedModel = models[modelIndex];
    return SelectedModel ? <SelectedModel /> : null;
  };

  const card = cardsData.find((card) => card.id === parseInt(id));

  return (
    <div className="relative h-[70vh] w-[70vh]">
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 space-y-4 w-72">
        <div className="flex flex-row gap-3 w-full justify-center">
          <button
            onClick={() => {
              setShowPicker(!showPicker);
              if (!showPicker) setShowTexture(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow w-full transition cursor-pointer
              ${showPicker ? "bg-purple-700 " : "bg-customPurple text-black"}`}
            aria-pressed={showPicker}
          >
            <PaintBucket
              color={showPicker ? "white" : "black"}
              className="w-5 h-5"
            />
            {showPicker ? "Hide Colors" : "Show Colors"}
          </button>

          <button
            onClick={() => {
              setShowTexture(!showTexture);
              if (!showTexture) setShowPicker(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow w-full transition cursor-pointer
              ${showTexture ? "bg-yellow-400" : "bg-customYellow text-black"}`}
            aria-pressed={showTexture}
          >
            <ImagePlus color="black" className="w-5 h-5" />
            {showTexture ? "Hide Texture" : "Show Texture"}
          </button>
        </div>

        {showTexture && (
          <div className="inline-block bg-white/20  rounded-xl p-4 shadow text-white mt-2">
            <h3 className="font-bold text-sm mb-2">Choose a Texture</h3>
            <div className="grid grid-cols-2 gap-2">
              {textureOptions.map((tex, index) => (
                <button
                  key={index}
                  onClick={() => setTextureUrl(tex.url)}
                  className={`rounded border-2 p-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition
                    ${
                      textureUrl === tex.url
                        ? "border-blue-500 ring-2 ring-blue-300"
                        : "border-transparent hover:border-blue-300"
                    }`}
                  aria-pressed={textureUrl === tex.url}
                >
                  {tex.url ? (
                    <img
                      src={tex.url}
                      alt={tex.name}
                      className="w-full h-16 object-cover rounded"
                    />
                  ) : (
                    <span className="block text-center py-6 text-sm bg-gray-700 rounded">
                      None
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {showPicker && (
          <div className="p-4 inline-block bg-white/20 rounded-xl shadow text-white mt-2">
            <h3 className="text-sm font-semibold mb-2">Material Color</h3>
            <ChromePicker
              color={color}
              onChange={(updatedColor) => setColor(updatedColor.hex)}
              disableAlpha
            />
          </div>
        )}
      </div>

      <Canvas camera={{ position: [0, 5, 20], fov: 25 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          enableZoom
          minDistance={500}
          maxDistance={600}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={null}>
          {getModelById(card.id) &&
            React.cloneElement(getModelById(card.id), {
              color,
              textureUrl,
            })}
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default ColorTextrure;
