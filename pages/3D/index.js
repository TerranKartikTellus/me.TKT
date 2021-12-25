import { Canvas, useFrame } from "react-three-fiber"
import { useState, useRef } from "react"
import { useSpring, a } from "@react-spring/three";

export default function ThreeD(){
          return (
                    // <div className="bg-violet-600 m-0 p-0 min-w-full min-h-full"></div>
          <Canvas className="bg-violet-600 m-0 p-0 min-w-full min-h-full">
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

          const meshRef = useRef();

           useFrame(()=>{
            meshRef.current.rotation.x += 0.001/2;
            meshRef.current.rotation.y += 0.001/2;
            meshRef.current.rotation.z += 0.001/2;
          })
          return (
                    <a.mesh onPointerOver={()=>setHover(1)} 
                          onPointerOut={()=>setHover(0)}
                          onClick={()=>setActive(!active)}
                          scale={props.scale}
                          ref={meshRef}
                    >
                              <boxBufferGeometry attach="geometry" args={[1,1,1]}></boxBufferGeometry>
                              <a.meshBasicMaterial attach="material" color={props.color}></a.meshBasicMaterial>
                    </a.mesh>
          )
}