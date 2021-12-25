import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";
import Scale from "/components/animation/scale";
import SecondPhase from "./SecondPhase"
import BottomLayer from "./BottomLayer"

export default function Body({data}){
  return(
   <div className=" w-screen  bg-transparent flex justify-center   ">  
    <div className="flex flex-col   items-center    w-10/12 md:w-3/6 ">
      
      <div className="flex flex-col items-center text-slate-100 mt-12">
        <SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
        <Scale initialScale={0.8} animateScale={1} exitScale={0.8} animateDelay={0.5} animateDuration={1} >
        <div className="relative w-16 h-16 md:w-32 md:h-40 scale-110 animate-wiggle"><img className="animate-infinite_glow scale-95 hover:scale-105 hover:opacity-100 transition-transform duration-300" src="/svg/myLogo.svg" /></div>
        </Scale>
        </SlideVr>

        <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.6} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
        <SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.6} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
        <div className="relative  text-slate-100 font-semibold text-2xl md:text-4xl tracking-widest       hover:text-white  hover:scale-105 hover:opacity-100 transition-transform duration-700">
          Terran Kartik Tellus
        </div>
        </SlideVr>
        </SlideHr>
        
        <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.6} animateDuration={0.5} initialLocation={-40} animateLocation={0} exitLocation={0}>
        <SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.6} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
        <div className="relative text-slate-100 font-normal text-xs md:text-sm mt-1 tracking-normal md:tracking-widest hover:text-white  md:scale-105 hover:opacity-100 transition-transform duration-700">
          Designer : Developer : STEM Enthusiast
        </div>      
        </SlideVr>
        </SlideHr>
      
      
      </div>
      <div className="py-16 lg:py-32"> </div>
      <div className=" pb-4">
      <Scale initialScale={1.2} animateScale={0.9} exitScale={0.8} animateDelay={0.7} animateDuration={1} >
      <SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.7} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
        <BottomLayer />
      </SlideVr>
      </Scale>
      </div>

    
    <div className="w-screen">
    <SecondPhase data={data}></SecondPhase>
   
    </div>

    </div>
   </div>
  );
}