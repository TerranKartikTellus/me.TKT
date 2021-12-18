import { useState } from 'react';
import Scale from "/components/animation/scale";
import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";

export default function BottomLayer(){
 const [state,setState] = useState("");
 


  return(
      <div className="mt-36 space-x-2 tracking-wide hover: transition-transform ease-in-out duration-150  font-OpenSans md:mt-44 flex flex-row h-20 w-11/12  text-slate-200 justify-center">
        
        <div className="block md:hidden text-white  w-80">
          <div className="text-white text-base  text-center h-10 my-4">
            { (state == "Creative entrepreneur")           ? <Scale initialScale={0} animateScale={1} exitScale={0.8} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.8} initialLocation={-140} animateLocation={0} exitLocation={0}><p >Creative entrepreneur</p></SlideHr></SlideVr></Scale> : <p></p> }  
            { (state == "South-Asia , Mumbai : Hong Kong") ? <Scale initialScale={0} animateScale={1} exitScale={0.8} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><p >South-Asia <br/> Mumbai : Hong Kong</p></SlideVr></Scale> : <p></p> }  
            { (state == "TerranKartikTellus@gmail.com")    ? <Scale initialScale={0} animateScale={1} exitScale={0.8} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.8} initialLocation={140} animateLocation={0} exitLocation={0}><p ><a>TerranKartikTellus@gmail.com</a></p></SlideHr></SlideVr></Scale>    : <p></p> }  
          </div>
          <div className="flex flex-row justify-between my-2">
            <button className="text-white" onClick={ ()=>{ setState("Creative entrepreneur") } }>          <img className="h-6 w-7" src="./svg/man.svg" /></button>
            <button className="text-white" onClick={ ()=>{ setState("South-Asia , Mumbai : Hong Kong") } }><img className="h-6 w-7" src="./svg/location.svg" /></button>
            <button className="text-white" onClick={ ()=>{ setState("TerranKartikTellus@gmail.com") } }>   <img className="h-6 w-7" src="./svg/email.svg" /></button>
          </div>
        </div>
        
        <div className="opacity-95 hover:opacity-100 scale-100  transition duration-150 hidden md:block border-r-2 border-gray-400  md:mr-0 mr-4 pr-10 sm:pr-10 grid grid-rows-3 gap-0 text-right w-1/3 ">
              <div className=" col-span-2 flex flex-row"><img className="ml-auto h-6 w-7" src="./svg/man.svg" /></div>
              
              <div className=" col-span-2  font-normal mt-10">Creative entrepreneur</div>
            </div>

        <div className="opacity-95 hover:opacity-100 scale-100  transition duration-150 border-r-2 border-gray-400 hidden md:block  sm:px-10">
            <div className=" grid grid-rows-3 gap-x-2  gap text-center">
              <div className=" col-span-2 "><img className="mx-auto h-6 w-7" src="./svg/location.svg" /></div>
              <div className=" col-span-2  font-semibold  ">South-Asia <br/>Mumbai : Hong Kong</div>
              <div className=" col-span-2 font-normal "></div>
            </div>
        </div>

        <div className="opacity-95 hover:opacity-100 scale-100  transition duration-150 hidden md:block w-1/3  grid grid-rows-3 gap-0 text-left  sm:pl-10">
              <div className=" col-span-2 flex flex-row"><img className="mr-auto h-6 w-7" src="./svg/email.svg" /></div>

              <div className=" col-span-2 font-normal mt-10">TerranKartikTellus<br/>@gmail.com</div>
        </div>

      </div>
  );
}
