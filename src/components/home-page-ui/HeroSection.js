"use client";

import RunnderBgImage from "@/assets/runners.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const motionCTAContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const motionCTAItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeroSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <section
      id="hero"
      className="bg-cover bg-center flex flex-col items-center justify-start relative pt-12 md:pt-16 bg-secondary/75 w-full px-4"
      style={{
        backgroundImage: `url(${RunnderBgImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10">
        <strong className="uppercase italic text-sm md:text-base text-white/90">
          *** Not Accepting New Clients ***
        </strong>
      </div>
      <div className="container flex flex-col items-start justify-center z-10 overflow-hidden">
        <motion.h2
          ref={headingRef}
          initial={{ x: -50, opacity: 0 }} // Start from left
          animate={{
            x: isHeadingInView ? 0 : -50,
            opacity: isHeadingInView ? 1 : 0,
          }} // Animate to original position
          transition={{ duration: 0.5 }} // Adjust the duration as needed
          className="mt-4 md:mt-6 text-5xl md:text-8xl font-extrabold text-primary max-w-[55rem] font-run"
        >
          Are you ready <br /> <div className="mt-3 md:mt-6">to RUN</div>
        </motion.h2>
        <motion.p
          ref={paragraphRef}
          initial={{ x: 50, opacity: 0 }} // Start from right
          animate={{
            x: isParagraphInView ? 0 : 50,
            opacity: isParagraphInView ? 1 : 0,
          }} // Animate to original position
          transition={{ duration: 0.5 }} // Adjust the duration as needed
          className="text-white font-medium mt-8 md:mt-16 max-w-[60rem] text-sm md:text-base drop-shadow-md"
        >
          Kennedy Ventures supports promising startups with the tools, the tech,
          and the capital to build and grow to their peak potential. If
          you&apos;re ready to move your idea forward and level up your
          business, set an appointment using the link below. And unlike the
          bozos in this stock photo, be sure to bring the appropriate footwear.
        </motion.p>
        <motion.ul
          variants={motionCTAContainer}
          initial="hidden"
          animate="visible"
          className="motionCTAContainer grid grid-cols-2 items-center justify-start gap-4 md:gap-6 mt-12 md:mt-16 max-w-96 md:max-w-[30rem] w-full pb-12 md:pb-16"
        >
          <motion.li variants={motionCTAItem} className="motionCTAItem">
            <Button
              className="text-secondary font-semibold rounded-full py-5 md:py-6 w-full"
              asChild
            >
              <Link href="/appointment" prefetch={true}>
                Book Appointment
              </Link>
            </Button>
          </motion.li>

          <motion.li variants={motionCTAItem} className="motionCTAItem">
            <Button
              variant="secondary"
              className="text-white rounded-full py-5 md:py-6 w-full"
              asChild
            >
              <Link href="/#portfolio" prefetch={true}>
                See Portfolio
              </Link>
            </Button>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default HeroSection;
