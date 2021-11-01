import { motion } from "framer-motion";
import * as React from "react";

export const AnimatedBall = () => {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut"
  };

  const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto"
  };

  return (
    <motion.span
      style={ballStyle}
      transition={{
        y: transitionValues,
        width: transitionValues,
        height: transitionValues
      }}
      animate={{
        y: ["2rem", "8rem", "10rem"],
        width: ["5rem", "5rem", "6rem"],
        height: ["5rem", "5rem", "4rem"]
      }}
    />
  );
};
