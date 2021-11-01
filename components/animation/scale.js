import { motion,AnimatePresence } from "framer-motion";

export default function FadeIn({children ,
     initialScale=0 , animateScale=1 , exitScale=0 ,
     animateDelay=0, animateDuration=1,
     repeati="no", 
    //  Infinity
     repeatDelayi="0"
    }){
    return (
        <AnimatePresence>
            <motion.div
            exit=    {{ scale: initialScale }}
            initial= {{ scale: initialScale }}
            animate= {{ scale: animateScale }}
            transition={{ delay: animateDelay,
                       duration: animateDuration,
                    repeat: {repeati},
                    repeatDelay: {repeatDelayi},
                    repeatType: "reverse"
                    }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}



{/* <Scale initialScale={0} animateScale={1} exitScale={1} animateDelay={3} animateDuration={1} repeati={"Infinity"} repeatDelayi={1}></Scale> */}