"use client";

import { Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export const GlassModels = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111111);
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const light = new THREE.DirectionalLight(0xfff0dd, 100);
      light.position.set(0, 0, 1);
      scene.add(light);

      const rgbeLoader = new RGBELoader();
      const glassEnv = rgbeLoader.load("/models/glass_env.hdr", () => {
        glassEnv.mapping = THREE.EquirectangularReflectionMapping;
      });

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        metalness: 0, // non-metallic object
        roughness: 0, // highly polished surface, can adjust to add frosting
        transmission: 1.0, // opacity while maintaining lightning
        thickness: 1, // light reflection
        envMap: glassEnv,
        envMapIntensity: 0.5,
      });

      const loader = new GLTFLoader();

      var gltfModel: THREE.Object3D;
      loader.load(
        "/models/deva-D.glb",
        (gltf: any) => {
          gltfModel = gltf.scene;
          gltfModel.traverse((o) => {
            if ((o as THREE.Mesh).isMesh)
              (o as THREE.Mesh).material = glassMaterial;
          });
          const x =
            window.innerHeight > window.innerWidth
              ? window.innerHeight / window.innerWidth
              : (window.innerWidth * 2) / window.innerHeight;
          gltfModel.position.set(x, 1, 0);
          scene.add(gltfModel);

          renderer.render(scene, camera);
          gltfModel.rotation.z += 0.2;
          var deltaY = 0.001;
          const renderScene = () => {
            if (gltfModel.rotation.y < -0.5 || gltfModel.rotation.y > 0.5)
              deltaY = -deltaY;
            gltfModel.rotation.y += deltaY;

            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
          };

          // Call the renderScene function to start the animation loop
          renderScene();
        },
        undefined
      );

      var gltfVModel: THREE.Object3D;
      loader.load(
        "/models/deva-V.glb",
        (gltf: any) => {
          gltfVModel = gltf.scene;
          gltfVModel.traverse((o) => {
            if ((o as THREE.Mesh).isMesh)
              (o as THREE.Mesh).material = glassMaterial;
          });
          const x =
            window.innerHeight > window.innerWidth
              ? window.innerHeight / window.innerWidth
              : (window.innerWidth * 2) / window.innerHeight;
          gltfVModel.position.set(-x, -2, 0);
          scene.add(gltfVModel);

          renderer.render(scene, camera);
          gltfVModel.rotation.z -= 0.2;
          var deltaY = -0.001;
          const renderScene = () => {
            if (gltfVModel.rotation.y < -0.5 || gltfVModel.rotation.y > 0.5)
              deltaY = -deltaY;
            gltfVModel.rotation.y += deltaY;

            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
          };

          // Call the renderScene function to start the animation loop
          renderScene();
        },
        undefined
      );
    }
  }, []);

  return <Stack minH="100vh" ref={containerRef} />;
};
