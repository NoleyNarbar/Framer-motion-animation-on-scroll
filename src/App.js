import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

export default function App() {
  const boxVariant = {
    visible: { opacity: 1, scale: 2, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0, x: 200 }
  };

  const Box = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    return (
      <motion.div
        ref={ref}
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box {num} </h1>
      </motion.div>
    );
  };

  return (
    <div className="App">
      <Box num={1} />
      <Box num={2} />
    </div>
  );
}
