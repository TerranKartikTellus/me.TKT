import React from "react";
import SmallIconInViewAnimation from "/components/animation/WhenInView/SmallCircularIconAnimation"

export default function about(){
  return(<div className=" flex flex-row justify-center lg:max-w-screen-2xl text-gray-100 p-36 border-2 border-gray-100">
    <CircleGlow></CircleGlow>
<SmallIconInViewAnimation>
     <div className="text-4xl">about</div>
  </SmallIconInViewAnimation>
  </div>)
}

function CircleGlow(){
  return(
  <div className="animate-wiggle  bg-gray-50 opacity-50 rounded-full h-40 w-40">

  </div>)
}