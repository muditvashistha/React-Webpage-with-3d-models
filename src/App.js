import './App.css';

import EarthCanvas from './components/Planet';
import SunImage from './components/SunImage';

import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage , PresentationControls } from '@react-three/drei';

function Model(props) {
  const {scene} = useGLTF("/tree.glb")
  return <primitive object={scene} {...props}/>
}

function App() {
  return (
    // <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center fw-bold fs-1 text-success'>
    //   <p>Earth</p>
    //   <EarthCanvas/>
    //   <Sky/>
    // </div>
    <>
    {/* <EarthCanvas/> */}
    <div className='container z-0 position-absolute p-5 beech2 text-center'>EARTH</div>
    <EarthCanvas/>
    <SunImage/>
    <div className='container'>
      <Canvas camera={{fov:55}}>
        <color attach={"background"} args={["#000000"]}/>
        <PresentationControls speed={1.5} polar={[-0.5, Math.PI]}>
          <Stage>
            <Model scale={1}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    <div className='container bg-transparent text-center text-white fs-2 fact'>
      <p>The length of a day is 23.9 hours</p>
    </div>
    </>
    
  );
}

export default App;
