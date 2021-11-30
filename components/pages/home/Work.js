import Head from "next/head";
import { motion,AnimatePresence } from "framer-motion";


export default function Work(){
  return(
    
     <div className=" p-3 pt-5 md:p-11 ">
      <Head>

    </Head>
              <div className="flex flex-row justify-between">
                        <h1 className="tracking-wide font-semibold text-2xl sm:text-3xl md:text-4xl">Portfolio</h1>
                        <img className="hover:scale-105 hover:shadow-xl transition duration-100 w-8 h-8" src="./svg/share_move_white.svg"></img>
              </div>
              <div className="justify-center items-center flex flex-col mb-14">
                       
              <div className="mt-10 text-center text-xl font-medium">Selected projects I've worked on in the past.</div>
                
                <div className="opacity-70 hover:opacity-100 transition-opacity duration-200 mt-16 flex flex-row  space-x-5">
                 <div className="border-r-2 border-white scale-75"><Cards/></div> 
                 <div className="scale-75"><Cards/></div> 
                 <div className="border-l-2 border-white  scale-75"><Cards/></div>                              
                </div>
              </div>    
    </div>
  );
}

function Cards(){
  return(
<div className="">
   <div className=" rounded-xl">


<div className="w-64 h-64  relative">
  <div className="absolute inset-0 bg-cover bg-center z-0" 
  style={{backgroundImage:`url("")` }}>
  </div>
  <div className=" bg-black  opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">
    Comming Soon
  </div>
</div>

   </div>
</div>   
  );
}