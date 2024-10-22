"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUsCard = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", amount: 0.33, once: true });

  return (
    <motion.aside
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start off-screen with reduced opacity
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate to full opacity and original position
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      className="flex flex-col items-center justify-center group"
    >
      <Image
        src={data.imagePath}
        height={208}
        width={208}
        priority
        className="w-60 h-64 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] group-hover:rounded-tr-none group-hover:rounded-tl-[6.5rem] group-hover:rounded-bl-none group-hover:rounded-br-[6.5rem] transition-all ease-in object-cover"
        alt={data.name}
      />
      <span className="border-b-4 border-double border-muted-foreground w-1/2 mt-4 md:mt-6"></span>
      <h3 className="mt-2 text-xl font-semibold text-center">{data.name}</h3>
      <p className="mt-0.5 px-4 text-muted-foreground text-justify text-sm md:text-base">
        {data.about}
      </p>
    </motion.aside>
  );
};

export default AboutUsCard;
