"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0); // Set background to transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Carousel (Ferris Wheel) Structure
    const wheelRadius = 5;
    const wheelThickness = 0.5;
    const wheelGeometry = new THREE.CylinderGeometry(
      wheelRadius,
      wheelRadius,
      wheelThickness,
      32
    );
    const wheelMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true,
    });
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    scene.add(wheel);

    camera.position.set(0, 5, 15);
    camera.lookAt(scene.position);

    const animate = function () {
      requestAnimationFrame(animate);
      wheel.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to properly remove the renderer's DOM element and stop the animation loop
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose(); // Dispose of the renderer to clean up resources
      scene.clear(); // Clear the scene
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJSScene;
