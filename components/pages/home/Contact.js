import Scale from "/components/animation/scale";
import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";
import { useState } from "react";


export default function Contact(){
  return(
     <div className=" p-3 pt-5 md:p-11 ">
              <div className="flex flex-row justify-between">
                        <h1 className="tracking-wide font-semibold text-2xl sm:text-3xl md:text-4xl">Contact</h1>
                        <img className="w-8 h-8" src="./svg/share_move_white.svg"></img>
              </div>
              <div className="relative flex flex-col justify-center items-center py-4  md:flex-row mt-6 md:mt-10 text-justify text-sm">
                
                <div><svg className="h-28 w-28 lg:h-36 lg:w-36 my-7" xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg></div>
                
                <div>
                  <div className="w-36 py-3 text-base">    Name:  <input  className="px-2 py-3-text-black" type="text"></input> </div>
                  <div className="w-36 py-3 text-base">   Email:  <input  className="px-2 py-3-text-black" type="text"></input> </div>
                  <div className="w-36 py-3 text-base"> Message:  <input  className="px-2 py-3-text-black" type="text"></input> </div>
                </div>
              </div>
              
              <IconLayer />
    </div>
  );
}
function IconLayer(){
  const [state, setstate] = useState("");

  return(
<section className=" mt-16 ">
                <div className="flex flex-col">
                <div>
                {(state == "Designer")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={-140} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideHr></SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                {(state == "Freelance Developer")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                {(state == "Entrepreneur")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={140} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideHr></SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                </div>
                <div className=" flex  flex-row justify-around">
                      <div  className="flex flex-col justify-center items-center">
                        <a href="https://www.instagram.com/grew_up_at__midnight/"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/instagram.svg"></img>
                        </a>
                      </div>
                      <div  className="flex flex-col justify-center items-center">
                       <a href="https://mail.google.com/mail/u/0/?fs=1&to=terrankartiktellus@gmail.com&tf=cm&body=Hello%20Mr.%20Terran,"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/google.svg"></img>
                       </a>
                      </div>
                      <div  className="flex flex-col justify-center items-center">
                       <a href="https://github.com/TerranKartikTellus"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/github.svg"></img>
                       </a>
                      </div>
              </div>
              </div>
              </section>
  );
}