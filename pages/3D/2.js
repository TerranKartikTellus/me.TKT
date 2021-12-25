import { Canvas, useFrame , extend , useThree} from "react-three-fiber"
import { useState, useRef, Children } from "react"
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({OrbitControls})

export default function ThreeD(){
          return (
                    // <div className="bg-violet-600 m-0 p-0 min-w-full min-h-full"></div>
          <Canvas className="bg-violet-600 m-0 p-0 min-w-full min-h-full">
                    <Controls></Controls>
                    <Box></Box>
                    
          </Canvas>
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
                          
                    >
                              <boxBufferGeometry attach="geometry" args={[1,1,1]}></boxBufferGeometry>
                              <a.meshBasicMaterial attach="material" color={props.color}></a.meshBasicMaterial>
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