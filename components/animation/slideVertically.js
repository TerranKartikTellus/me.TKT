import { motion,AnimatePresence } from "framer-motion";

export default function SlideVertically({children ,
     initialOpacity=0 , animateOpacity=1 , exitOpacity=0 ,
     animateDelay=0, animateDuration=1,
     
     initialLocation= -100, animateLocation=0, exitLocation= 100, type=  'spring',
    }){
    return (
        <AnimatePresence>
            <motion.div
            exit=    {{ opacity: exitOpacity, 
                        y      :  exitLocation,
                }}
            initial= {{ opacity: initialOpacity,
                        y      :  initialLocation,
                }}
            animate= {{ opacity: animateOpacity, 
                        y      :  animateLocation,
                }}
            transition={{ delay: animateDelay,
                       duration: animateDuration,
                    type:  type}}
                    // Tween, Spring or Inertia
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
