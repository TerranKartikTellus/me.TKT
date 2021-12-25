import { Canvas, useFrame , extend , useThree} from "react-three-fiber"
import { useState , useEffect , useRef, Children } from "react"
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import * as THREE from "three"

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";

extend({OrbitControls})

export default function ThreeD(){
          return (
                    // <div className="bg-violet-600 m-0 p-0 min-w-full min-h-full"></div>
          <Canvas 
          
           onCreated={({gl})=>{
                     gl.shadowMap.enabled = true;
                     gl.shadowMap.type = THREE.PCFSoftShadowMap
           }}
           camera={{position:[0,0,5 ]}} className="bg-violet-600 m-0 p-0 min-w-full min-h-full">
                    <fog attach="fog" args={["gray",5,15]} ></fog>
                    <Controls></Controls>
                    <Box></Box>
                    <Plane></Plane>   
                    <Space></Space> 
          </Canvas>
                    )
}

const Space = () => {
    let gltf = null ;
      useEffect(()=>{
      gltf = useLoader(GLTFLoader, "/scene.gltf")
    })
      
    console.log(gltf);
    
    return (
     <primitive dispose={null}  position={[0, 0, 0]} object={gltf.scene} scale={1} />
    );
};

function Plane(){
          return (
          <mesh position={[0,-1,0]} rotation={[-Math.PI/2,0,0]} receiveShadow>
                    <planeBufferGeometry attach="geometry" args={[100,100,100]}></planeBufferGeometry>
                    <meshPhysicalMaterial attach="material" color="white"></meshPhysicalMaterial>
          </mesh>
          )
}
function Box(){
          const [hover,setHover] = useState(0);
          const [active,setActive] = useState(0);
          const props = useSpring({
                    scale: !active ? [2,2,2] : [3,3,3],
                    color: hover ? "green" :"blue" ,
          });

          
          
          return (
                    <a.mesh onPointerOver={()=>setHover(1)} 
                          onPointerOut={()=>setHover(0)}
                          onClick={()=>setActive(!active)}
                          scale={props.scale}
                          castShadow
                    >
                              <ambientLight></ambientLight>
                              <spotLight position={[0,5,10]} penumbra={1} castShadow></spotLight>
                              <boxBufferGeometry attach="geometry" args={[1,1,1]}></boxBufferGeometry>
                              <a.meshPhysicalMaterial attach="material" color={props.color}></a.meshPhysicalMaterial>
                    </a.mesh>
          )
}
function Controls(){
          const orbitRef = useRef();
          useFrame(()=>{
                    orbitRef.current.update();
          })
          const {camera , gl } = useThree();
          return (
                    <orbitControls
                     autoRotate
                    //  maxPolarAngle={Math.PI/3} restrict rotate
                    //  minPolarAngle={Math.PI/3} restrict rotate
                     args={[camera, gl.domElement]}
                     ref={orbitRef}
                    ></orbitControls>
                              
          )
}