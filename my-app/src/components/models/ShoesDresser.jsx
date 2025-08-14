import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";

export function ShoesDresser({ color = "#ffffff", textureUrl = null }) {
  const { nodes, materials } = useGLTF("/models/furniture1.glb");
  const texture = textureUrl
    ? useLoader(TextureLoader, textureUrl)
    : null;

  const whiteMaterial = useMemo(() => {
    const cloned = materials.WHITE.clone();

    if (texture) {
      cloned.map = texture;
      cloned.color = new Color("#ffffff"); 
    } else {
      cloned.map = null;
      cloned.color = new Color(color);
    }

    cloned.needsUpdate = true;
    return cloned;
  }, [color, texture]);

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLOOR.geometry} material={materials.FLOOR} />
        <mesh geometry={nodes.WHITE.geometry} material={whiteMaterial} />
        <mesh geometry={nodes.STEEL.geometry} material={materials.STEEL} />
        <mesh geometry={nodes.PINE.geometry} material={materials.EnvironmentAmbientLight} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/furniture1.glb");
