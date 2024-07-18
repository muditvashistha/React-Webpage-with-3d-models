import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

const EarthCanvas = () => {
  const { scene } = useGLTF('/earth_cartoon/scene.gltf'); // Always call the hook

  return (
    <Canvas frameloop="demand" camera={{ position: [-4,3,5], fov: 65, near: 0.1, far: 200 }}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1.1}/>
        <ambientLight intensity={2.5} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;



