// components/ThreeCanvas.js
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Card = ({ imagePath, position }) => {
    const texture = useLoader(THREE.TextureLoader, imagePath);
    return (
        <mesh position={position}>
            <boxGeometry />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
};

const ThreeCanvas = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls />
            <ambientLight />
            <Card imagePath="/images/infj.webp" position={[0, 0, 0]} />
            {/* More cards can be added here */}
        </Canvas>
    );
};

export default ThreeCanvas;
