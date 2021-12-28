import SlideHr from "/components/animation/slideHorizontally";
import Recommendation from "/components/pages/home/recommend";
import Contact from "/components/pages/home/Contact";
import Work from "/components/pages/home/Work";
import About from "/components/pages/home/About";
import {useState,useEffect} from "react";

export default function SecondPhase({data}){

return (
<div className="flex flex-col w-screen sm:w-8/12 md:w-8/12 lg:w-8/12 sm:mx-auto">
    
   <div className=""><About />  </div>         
   
   <div  className='relative px-3 py-2  scale-75 group hover:scale-90 lg:scale-100 lg:hover:scale-110  hover:translate-y-6 -translate-y-4   mx-auto text-center opacity-80 lg:my-32 my-20  filter blur-sm hover:blur-0 transition duration-300 ease-in bg-opacity-25 font-OpenSans  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  text-white'>
                 
                 <div className="mb-5 flex flex-row justify-center">
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:-translate-x-10 translate-x-0  bg-white transition-transform duration-1000 ease-out"></div>
                  </div>


               <span className="text-lg">It is not our <strong>abilities</strong> that show who we truely are</span> 
                  <span className="text-base">, It is our <strong>choices</strong>.</span>
                 <div className="mt-5 flex flex-row justify-center">
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                    <div className="w-2  group-hover:opacity-95 h-2 mx-3 rounded-full opacity-70 scale-50 group-hover:translate-x-0 -translate-x-10  bg-white transition-transform duration-1000 ease-out"></div>
                  </div>
                  
   </div>
    
    <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={1} initialLocation={-100} animateLocation={0} exitLocation={0}>
    <div className="bg-black text-gray-200"><Work />   </div>         
   </SlideHr>  
    
    <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={1} initialLocation={-100} animateLocation={0} exitLocation={0}>
    <div className="bg-white text-gray-700" style={{ 
      backgroundImage: `url("/public/3065.jpg")` 
    }}><Recommendation data={data}></Recommendation>   </div>     
   </SlideHr>

    <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={1} initialLocation={-100} animateLocation={0} exitLocation={0}>
     <div className="bg-black text-gray-200" ><Contact /></div>       
   </SlideHr>

</div>
  );
}

