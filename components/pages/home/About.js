import Scale from "/components/animation/scale";
import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";

import { useState } from "react";

export default function About(){
const [state, setstate] = useState("");

  return(
    <div className="flex flex-col  mt-28  md:p-11 p-6 px-8">
                  
                  <div className="flex flex-row justify-between">
                        <h1 className="tracking-wide font-semibold text-3xl sm:text-3xl md:text-4xl">About</h1>
                        <a href="/about"><img className="w-8 h-8" src="./svg/share_move_black.svg"></img></a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:mt-8">
                  <div className="mx-auto"><svg className="w-36 h-44 sm:w-44 sm:h-44 " xmlns="http://www.w3.org/2000/svg" fill="black" width="30" height="30" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg></div>
                  <div className=" flex flex-col mt-2 sm:px-11 md:px-7">  
                    <div>
                      <p className="text-lg tracking-wide sm:text-xl font-medium text-center ">
                      Hi, I’m Terran.<br/> Nice to meet you.
                      </p>
                    </div>
                    <br/>
                    
                    <div className="text-sm tracking-wide text-center">
                      <p>
                      Since beginning my journey as a freelance developer, 
                      I've done remote work for agencies, consulted for startups, and 
                      created digital products for consumer use.
                      I'm quietly confident, naturally curious, and perpetually working on improving
                      my chops one design problem at a time.
                      </p>
                    </div>
                  
                  </div>
                  </div>

              <section className=" mt-16 block sm:hidden">
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
                      <div onClick={()=>{setstate("Designer")}} className="flex flex-col justify-center items-center">
                        <svg className="my-3 w-7 h-7 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.875l5.688 5.689-7.126 1.436 1.438-7.125zm22.562-11.186l-15.46 15.46-5.688-5.689 15.459-15.46 5.689 5.689zm-4.839-2.017l-.849-.849-12.614 12.599.85.849 12.613-12.599z"/></svg>
                        
                      </div>
                      <div onClick={()=>{setstate("Freelance Developer")}} className="flex flex-col justify-center items-center">
                       <svg className="my-3 w-7 h-7 " width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"/></svg>
                      
                      </div>
                      <div onClick={()=>{setstate("Entrepreneur")}} className="flex flex-col justify-center items-center">
                       <svg className="my-3 w-7 h-7 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.329 19.6c-.185.252-.47.385-.759.385-.194 0-.389-.06-.558-.183-.419-.309-.509-.896-.202-1.315l1.077-1.456c.308-.417.896-.508 1.315-.199.421.306.511.895.201 1.313l-1.074 1.455zm-.825-2.839c.308-.418.217-1.007-.201-1.316-.421-.308-1.008-.216-1.317.203l-1.073 1.449c-.309.419-.217 1.009.202 1.317.417.307 1.007.218 1.315-.202l1.074-1.451zm-1.9-1.388c.309-.417.217-1.007-.203-1.315-.418-.307-1.007-.216-1.314.202l-1.083 1.461c-.308.419-.209.995.209 1.304.421.308 1 .229 1.308-.19l1.083-1.462zm-1.898-1.386c.308-.419.219-1.007-.203-1.315-.419-.309-1.007-.218-1.315.201l-1.075 1.451c-.308.418-.217 1.008.202 1.315.419.307 1.008.218 1.315-.202l1.076-1.45zm17.294-8.438s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792v-6.302zm-10.524 12.662c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713-.165-.161-.421-.18-.608-.044-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359-.192-.712.093-1.411.727-1.781 1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231-1.373-.09-3.061-.403-3.061-.403v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624c.364-.496.949-.792 1.564-.792.87 0 1.622.578 1.861 1.388.951 0 1.667.602 1.898 1.387.826-.031 1.641.519 1.897 1.385 1.171 0 2.017.92 1.981 2.007l1.168 1.168c.367.368.963.367 1.331 0 .368-.368.368-.964 0-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033c.368.368.963.368 1.331 0s.368-.963 0-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701c.368.368.963.368 1.331 0 .358-.356.361-.922.027-1.291z"/></svg>
                      
                      </div>
              </div>
              </div>
              </section>
              
              <section className="hidden sm:block">
              <div className=" flex mt-16 flex-row justify-around">
                <div className="flex flex-col justify-center items-center">
                  <svg className="my-3 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.875l5.688 5.689-7.126 1.436 1.438-7.125zm22.562-11.186l-15.46 15.46-5.688-5.689 15.459-15.46 5.689 5.689zm-4.839-2.017l-.849-.849-12.614 12.599.85.849 12.613-12.599z"/></svg>
                  <h1 className="font-semibold text-sm ">Designer</h1>
                </div>
                 <div className="flex flex-col justify-center items-center">
                  <svg className="my-3 w-7 h-7" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"/></svg>
                  <h1 className="font-semibold text-sm ">Freelance Developer</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <svg className="my-3 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.329 19.6c-.185.252-.47.385-.759.385-.194 0-.389-.06-.558-.183-.419-.309-.509-.896-.202-1.315l1.077-1.456c.308-.417.896-.508 1.315-.199.421.306.511.895.201 1.313l-1.074 1.455zm-.825-2.839c.308-.418.217-1.007-.201-1.316-.421-.308-1.008-.216-1.317.203l-1.073 1.449c-.309.419-.217 1.009.202 1.317.417.307 1.007.218 1.315-.202l1.074-1.451zm-1.9-1.388c.309-.417.217-1.007-.203-1.315-.418-.307-1.007-.216-1.314.202l-1.083 1.461c-.308.419-.209.995.209 1.304.421.308 1 .229 1.308-.19l1.083-1.462zm-1.898-1.386c.308-.419.219-1.007-.203-1.315-.419-.309-1.007-.218-1.315.201l-1.075 1.451c-.308.418-.217 1.008.202 1.315.419.307 1.008.218 1.315-.202l1.076-1.45zm17.294-8.438s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792v-6.302zm-10.524 12.662c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713-.165-.161-.421-.18-.608-.044-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359-.192-.712.093-1.411.727-1.781 1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231-1.373-.09-3.061-.403-3.061-.403v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624c.364-.496.949-.792 1.564-.792.87 0 1.622.578 1.861 1.388.951 0 1.667.602 1.898 1.387.826-.031 1.641.519 1.897 1.385 1.171 0 2.017.92 1.981 2.007l1.168 1.168c.367.368.963.367 1.331 0 .368-.368.368-.964 0-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033c.368.368.963.368 1.331 0s.368-.963 0-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701c.368.368.963.368 1.331 0 .358-.356.361-.922.027-1.291z"/></svg>
                  <h1 className="font-semibold text-sm ">Entrepreneur</h1>
                </div>
              </div>
              </section>
              
    </div>
  );
}
