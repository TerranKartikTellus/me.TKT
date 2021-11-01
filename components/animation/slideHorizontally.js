import { motion,AnimatePresence } from "framer-motion";

export default function SlideHorizontally({children ,
     initialOpacity=0 , animateOpacity=1 , exitOpacity=0 ,
     animateDelay=0, animateDuration=1,
     
     initialLocation= -100, animateLocation=0, exitLocation= 100,  
    }){
    return (
        <AnimatePresence>
            <motion.div
            exit=    {{ opacity: exitOpacity, 
                        x      :  exitLocation,
                }}
            initial= {{ opacity: initialOpacity,
                        x      :  initialLocation,
                }}
            animate= {{ opacity: animateOpacity, 
                        x      :  animateLocation,
                }}
            transition={{ delay: animateDelay,
                       duration: animateDuration }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}



// ```
// USAGE:

{/* <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={1} initialLocation={-100} animateLocation={0} exitLocation={0}></SlideHr> */}


// import FadeIn from "/components/animation/slideHorizontally";

//    <slideHorizontally>
//     <div>Will use default Values</div>
//    </slideHorizontally> 

//    <slideHorizontally
//      initialOpacity=  {0.3} 
//      animateOpacity=  {0.9} 
//      exitOpacity=     {0.9}
//      animateDelay=    {0.2} 
//      animateDuration= {2.5}

//      initialLocation= {300}
//      animateLocation= {0}
//      exitLocation   = {-300}  
//    >
//     <div>Will use custom Values</div>
//    </slideHorizontally> 

// ```