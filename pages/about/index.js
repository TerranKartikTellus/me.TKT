import React from "react";
import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"

export default function about(){
  return(<div className=" flex flex-row justify-center lg:max-w-full   ">
   
    <Content></Content>
  </div>)
}
function Content(){
  return (
    <div className="bg-gray-100 text-gray-900  px-10">
      
                  <div className="flex flex-col sm:flex-row ">
                  <div className="mx-auto hover:scale-105 hover:shadow-xl transition duration-100">
                    <AnimateWhenInView duration={0.4} delay={0.8}  Iopacity={0} Fopacity={1} Ix={-60} Iy={0} Fy={0} Fx={0} >
                    <svg className="w-36 h-44 sm:w-44 sm:h-44 " xmlns="http://www.w3.org/2000/svg" fill="black" width="30" height="30" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
                    </AnimateWhenInView>
                  </div>
                  <div className=" flex flex-col  sm:px-11 md:px-7">  
                    <div>
                      <AnimateWhenInView duration={0.4} delay={0.8}  Iopacity={0} Fopacity={1} Ix={0} Iy={30} Fy={0} Fx={0} >
                      <p className="font-semibold text-lg tracking-wide sm:text-xl  text-center ">
                      Hi, I’m Terran.<br/> Nice to meet you.
                      </p>
                      </AnimateWhenInView>
                    </div>
                    <br/>
                    
                    <div className="text-sm tracking-wide text-center">
                      <AnimateWhenInView duration={0.4} delay={0.8}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                      <p>
                      Since beginning my journey as a freelance developer, 
                      I've done remote work for agencies, consulted for startups, and 
                      created digital products for consumer use.
                      I'm quietly confident, naturally curious, and perpetually working on improving
                      my chops one design problem at a time.
                      </p>
                      </AnimateWhenInView>
                    </div>
                  
                  </div>
                  </div>
    </div>
  );
}

function CircleGlow(){
  return(
  <div className="animate-wiggle  bg-gray-50 opacity-50 rounded-full h-40 w-40">

  </div>)
}