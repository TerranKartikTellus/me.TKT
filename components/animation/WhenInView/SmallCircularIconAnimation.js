
import {motion} from "framer-motion"


// import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"
{/* <AnimateWhenInView duration={0.4} delay={0.1}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={60} Iy={0} Fy={0} Fx={0} >    */}

export default function SmallCircularIconAnimation({ children,Is=1,Fs=1 ,duration=0.4 ,delay=0.1 , Iopacity=0,Fopacity=1,Ix=60,Iy=0,Fy=0,Fx=0, }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80,duration: duration ,delay: delay}}
      variants={{
        visible: { 
                opacity: Fopacity,
                scale: Fs,
                x: Fx,
                y: Fy,
         },
        hidden: {  scale:Is ,opacity: Iopacity,x:Ix,y:Iy }
      }}
    >
      {children}
    </motion.div>
  );
}

