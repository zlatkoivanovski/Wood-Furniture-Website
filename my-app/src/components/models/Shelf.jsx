import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";


export function Shelf({ color = null, textureUrl = null }) {
  const { nodes, materials } = useGLTF('/models/shelf.glb');

  const texture = textureUrl ? useLoader(TextureLoader, textureUrl) : null;
  
    const shelfMaterial = useMemo(() => {
      const baseMaterial = materials.material_0.clone();
  
      if (texture) {
        baseMaterial.map = texture;
        baseMaterial.needsUpdate = true;
      }
  
      if (color) {
        baseMaterial.color = new Color(color);
        baseMaterial.needsUpdate = true;
      }
  
      return baseMaterial;
    }, [color, texture, materials.material_0]);
  
  return (
    <group dispose={null} scale={60}>
      <mesh geometry={nodes.Object_5.geometry} material={shelfMaterial}  />
    </group>
  )
}

useGLTF.preload('/models/shelf.glb')
