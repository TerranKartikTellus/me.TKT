import { motion,AnimatePresence } from "framer-motion";

export default function FadeIn({children ,
     initialOpacity=0 , animateOpacity=1 , exitOpacity=0 ,
     animateDelay=0, animateDuration=1
    }){
    return (
        <AnimatePresence>
            <motion.div
            exit=    {{ opacity: exitOpacity }}
            initial= {{ opacity: initialOpacity }}
            animate= {{ opacity: animateOpacity }}
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
// import FadeIn from "/components/animation/fadeIn";

//    <FadeIn>
//     <div>Will use default Values</div>
//    </FadeIn> 

//    <FadeIn 
//      initialOpacity={0.3} 
//      animateOpacity={0.9} 
//      exitOpacity={0.9}
//      animateDelay={0.2} 
//      animateDuration={2.5}
//    >
//     <div>Will use custom Values</div>
//    </FadeIn> 

// ```