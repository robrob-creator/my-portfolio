/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Astronaut(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/comic_drone.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      names.forEach((name) => {
        const action = actions[name];
        action?.reset().setLoop(THREE.LoopRepeat, Infinity).play();
      });
    }
  }, [actions, names]);

  useEffect(() => {
    if (scene) {
      // Debug logging for scene and materials
      const materials = [];
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          materials.push({
            name: child.name,
            materialType: child.material.constructor.name,
            color: child.material.color,
            map: child.material.map,
            transparent: child.material.transparent,
            opacity: child.material.opacity,
            material: child.material,
          });
        }
      });
      console.log("Scene:", scene);
      console.log("Materials details:", materials);

      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            // Log each material before modifying
            console.log(
              `Processing mesh: ${child.name}, Material type: ${child.material.constructor.name}, Original color:`,
              child.material.color
            );

            // Get the original color to determine what to change it to
            const originalColor = child.material.color;
            let newColor;

            if (originalColor) {
              // Convert RGB to HSL to better identify color ranges
              const hsl = {};
              originalColor.getHSL(hsl);

              // If it's orange/amber colored (hue around 0.08-0.15), make it black
              if (hsl.h >= 0.05 && hsl.h <= 0.2 && hsl.s > 0.3) {
                newColor = new THREE.Color("#0a0a0a"); // Deep Black
                console.log(`Changing ${child.name} from amber to deep black`);
              }
              // If it's white/gray (low saturation, high lightness), keep it white
              else if (hsl.s < 0.3 && hsl.l > 0.5) {
                newColor = new THREE.Color("#ffffff"); // Pure white
                console.log(`Keeping ${child.name} as white`);
              }
              // Keep other colors as they are
              else {
                newColor = originalColor.clone();
                console.log(`Keeping ${child.name} original color`);
              }
            } else {
              // If no color, default to white
              newColor = new THREE.Color("#ffffff");
              console.log(`Adding white color to ${child.name}`);
            }

            // Apply the new color
            child.material.color = newColor;

            // Convert MeshBasicMaterial to MeshStandardMaterial for better lighting
            if (child.material.isMeshBasicMaterial) {
              const newMaterial = new THREE.MeshStandardMaterial({
                color: newColor,
                map: child.material.map,
                transparent: child.material.transparent,
                opacity: child.material.opacity,
                metalness: 0.1,
                roughness: 0.8,
              });
              child.material = newMaterial;
              console.log(
                `Converted ${child.name} from BasicMaterial to StandardMaterial`
              );
            }

            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={2}
      position={props.position || [3, -1, -1]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      {/* Use the original scene so animations work */}
      <primitive object={scene} />

      {/* Lights */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      <pointLight
        position={[2, 2, 2]}
        intensity={0.8}
        color="#00ffff"
        distance={15}
      />
      <pointLight
        position={[-2, 1, -2]}
        intensity={0.6}
        color="#ff00ff"
        distance={12}
      />
      <pointLight
        position={[0, 3, 1]}
        intensity={0.4}
        color="#ffff00"
        distance={10}
      />
    </group>
  );
}

// Preload the correct model
useGLTF.preload("/models/comic_drone.glb");
