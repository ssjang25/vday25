/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/computer/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2MonitorShape_8bit2Monitor_0.geometry}
          material={materials["8bit2Monitor"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2MonitorShape_8bit2Screen_0.geometry}
          material={materials["8bit2Screen"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2MonitorShape_8bitGlass_0.geometry}
          material={materials["8bitGlass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2DiskdriveShape_8bit2Diskdrive_0.geometry}
          material={materials["8bit2Diskdrive"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2DiskdriveShape_8bit2LEDs_0.geometry}
          material={materials["8bit2LEDs"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2LeadsShape_8bit2Leads_0.geometry}
          material={materials["8bit2Leads"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2LeadsShape_8bit1jacks_0.geometry}
          material={materials["8bit1jacks"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MRLN_8bit2Shape_8bit2_0.geometry}
          material={materials["8bit2"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/computer/scene.gltf");
