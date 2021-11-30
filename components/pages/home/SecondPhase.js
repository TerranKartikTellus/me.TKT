import SlideHr from "/components/animation/slideHorizontally";
import Recommendation from "/components/pages/home/recommend";
import Contact from "/components/pages/home/Contact";
import Work from "/components/pages/home/Work";
import About from "/components/pages/home/About";


export default function SecondPhase({data}){


return (
<div className="flex flex-col w-screen sm:w-8/12 md:w-8/12 lg:w-8/12 sm:mx-auto">
    
   <div className=""><About />  </div>         
   
    
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

