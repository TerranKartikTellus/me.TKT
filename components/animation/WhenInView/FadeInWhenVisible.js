import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import  { useEffect } from "react";
// usage:  <FadeInWhenVisible  duration={0.4}  delay={0.1} hOpacity={0}  vOpacity={1}  vX={0}  vY={0}  hX={0}  hY={500}  >
//         </FadeInWhenVisible>

export default function FadeInWhenVisible({ children ,duration=0.4 , delay=0.1 , 
  hOpacity=0 , vOpacity=0 , 
  vX=0 , vY=0 , hX=0 , hY=0 ,
 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: {duration} ,delay:{delay} }}
      variants={{
        visible:{ x: {vX} , y: {vY}, opacity: {vOpacity},  },
        hidden: { x: {hX} , y: {hY}, opacity: {hOpacity}, }
      }}
    >
      {children}
    </motion.div>
  );
}