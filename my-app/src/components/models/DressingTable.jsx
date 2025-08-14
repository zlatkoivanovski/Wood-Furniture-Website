import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";

export function DressingTable({ color = null, textureUrl = null }) {
  const { nodes, materials } = useGLTF('/models/dressing_table_oak.glb');

  const texture = textureUrl ? useLoader(TextureLoader, textureUrl) : null;
  
    const tableMaterial = useMemo(() => {
      const baseMaterial = materials.material.clone();
  
      if (texture) {
        baseMaterial.map = texture;
        baseMaterial.needsUpdate = true;
      }
  
      if (color) {
        baseMaterial.color = new Color(color);
        baseMaterial.needsUpdate = true;
      }
  
      return baseMaterial;
    }, [color, texture, materials.material]);
  
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLOOR.geometry} material={materials.EnvironmentAmbientLight} />
        <mesh geometry={nodes.BRASS.geometry} material={materials.BRASS} />
        <mesh geometry={nodes.OAK.geometry} material={tableMaterial} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/dressing_table_oak.glb')
