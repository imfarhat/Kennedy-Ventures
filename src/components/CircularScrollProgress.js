"use client";

import { useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const CircularScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return progress.on("change", (latest) => {
      setScrollProgress(latest); // Progress is a value between 0 and 1
    });
  }, [progress]);

  return (
    <div className="flex items-center justify-center fixed bottom-4 right-4 z-[3] rounded-full">
      {/* Button is wrapped inside the circular progress */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative p-2 text-secondary bg-white rounded-full overflow-hidden shadow border"
      >
        {/* SVG circle background and progress */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          className="absolute inset-0 rotate-[-90deg] z-[1]" // Rotated to start progress from top
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            pathLength="1"
            stroke="#e6e6e6" // Light gray background for visibility
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            pathLength="1"
            stroke="#055c70" // Progress color
            strokeWidth="8"
            fill="none"
            strokeDasharray="1"
            strokeDashoffset={1 - scrollProgress} // Fills based on scroll progress
            strokeLinecap="round" // Smooth edges for progress
          />
        </svg>
        {/* Scroll to Top Button */}
        <ArrowUp className="z-[2]" />
      </button>
    </div>
  );
};

export default CircularScrollProgress;
