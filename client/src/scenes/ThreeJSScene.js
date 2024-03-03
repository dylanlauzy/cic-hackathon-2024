"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const loader = new THREE.TextureLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const wheel = new THREE.Object3D();
    const parts = []; // Array to store each part (image plane)
    const startImageNumber = 10033;
    const endImageNumber = 10045;

    for (let i = startImageNumber; i <= endImageNumber; i++) {
      loader.load(`/images/${i}.png`, function (texture) {
        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        });
        const part = new THREE.Mesh(geometry, material);
        const angle =
          ((i - startImageNumber) / (endImageNumber - startImageNumber + 1)) *
          Math.PI *
          2;
        part.position.set(Math.cos(angle) * 5, Math.sin(angle) * 5, 0);
        wheel.add(part);
        parts.push(part); // Add the part to the array
      });
    }

    scene.add(wheel);
    camera.position.set(0, 5, 7);
    camera.lookAt(scene.position);

    const animate = function () {
      requestAnimationFrame(animate);
      wheel.rotation.y += 0.01;

      // Update each part to always face the camera
      parts.forEach((part) => {
        part.quaternion.copy(camera.quaternion);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeJSScene;