"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  // Get the scroll progress value from useScroll
  const { scrollYProgress } = useScroll();

  // Apply a spring smoothing effect to the scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="w-full h-1 -mt-0.5">
        <motion.div
          className="h-full bg-secondary origin-left"
          initial={false}
          style={{ scaleX }}
        />
      </div>
    </>
  );
};

export default ScrollProgress;
