import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";

export function Chair({ color = null, textureUrl = null }) {
  const { nodes, materials } = useGLTF('/models/chair.glb');
  
  const texture = textureUrl ? useLoader(TextureLoader, textureUrl) : null;
  
  
    const chairMaterial = useMemo(() => {
      const baseMaterial = materials.Chair.clone();
  
      if (texture) {
        baseMaterial.map = texture;
        baseMaterial.needsUpdate = true;
      }
  
      if (color) {
        baseMaterial.color = new Color(color);
        baseMaterial.needsUpdate = true;
      }
  
      return baseMaterial;
    }, [color, texture, materials.Chair]);
  
  return (
    <group  dispose={null} position={[30,0,0]}>
      <group rotation={[0, 0, 0.167]}>
        <mesh geometry={nodes.Legs_Chair_0.geometry} material={chairMaterial} />
        <mesh geometry={nodes.Legs_Chair_0_1.geometry} material={chairMaterial} />
        <mesh geometry={nodes.Legs_Chair_0_2.geometry} material={chairMaterial} />
      </group>
      <group position={[-42.422, 45.531, -5.511]} rotation={[-0.04, 0.004, -0.213]} scale={0.194}>
        <mesh geometry={nodes.Screw_2_AllenScrew_0.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Screw_2_AllenScrewHole_0.geometry} material={materials.AllenScrewHole} />
      </group>
      <group position={[-42.384, 46.568, 13.398]} rotation={[-0.056, 0.006, -0.192]} scale={0.194}>
        <mesh geometry={nodes.Screw_1_AllenScrew_0.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Screw_1_AllenScrewHole_0.geometry} material={materials.AllenScrewHole} />
      </group>
      <group position={[-37.975, 71.377, -19.452]} rotation={[1.144, -0.46, -0.348]} scale={0.194}>
        <mesh geometry={nodes.Screw_4_AllenScrew_0.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Screw_4_AllenScrewHole_0.geometry} material={materials.AllenScrewHole} />
      </group>
      <group position={[-40.368, 57.076, -14.652]} rotation={[1.112, -0.448, -0.438]} scale={0.194}>
        <mesh geometry={nodes.Screw_3_AllenScrew_0.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Screw_3_AllenScrewHole_0.geometry} material={materials.AllenScrewHole} />
      </group>
      <mesh geometry={nodes.Seat_Chair_0.geometry} material={materials.Chair} position={[-24.862, 45.472, 5.847]} rotation={[-0.005, 0, 0]} scale={0.194} />
      <mesh geometry={nodes.Back_Chair_0.geometry} material={materials.Chair} position={[-24.862, 65.376, -17.357]} rotation={[1.296, 0, 0]} scale={0.194} />
      <mesh geometry={nodes.Slat_Front_Chair_0.geometry} material={materials.Chair} position={[-24.862, 32.662, 18.041]} rotation={[-0.074, 0, 0]} scale={0.194} />
      <mesh geometry={nodes.Slat_Back_Chair_0.geometry} material={materials.Chair} position={[-24.862, 31.281, -18.351]} rotation={[0.027, 0, 0]} scale={0.194} />
    </group>
  )
}

useGLTF.preload('/models/chair.glb')
