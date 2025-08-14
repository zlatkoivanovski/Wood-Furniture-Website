import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";

export function DinnerTable({ color = null, textureUrl = null }) {
  const { nodes, materials } = useGLTF("/models/dinnerTable.glb");

  const texture = textureUrl ? useLoader(TextureLoader, textureUrl) : null;

  const tableMaterial = useMemo(() => {
    const baseMaterial = materials.DARK_STAIN_OAK.clone();

    if (texture) {
      baseMaterial.map = texture;
      baseMaterial.needsUpdate = true;
    }

    if (color) {
      baseMaterial.color = new Color(color);
      baseMaterial.needsUpdate = true;
    }

    return baseMaterial;
  }, [color, texture, materials.DARK_STAIN_OAK]);

  return (
    <group dispose={null}>
      <group position={[0, 0.1, 0]}>
        <mesh
          geometry={
            nodes.Jenson_Extending_Table_DarkStainedOak_DARK_STAIN_OAK_0
              .geometry
          }
          material={tableMaterial}
          position={[55.616, -6.294, -169.421]}
        />
      </group>
      <mesh
        geometry={nodes.Plane001_FLOOR_0.geometry}
        material={materials.FLOOR}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/dinnerTable.glb");
