"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServicesCard = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", amount: 0.33, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start off-screen with reduced opacity
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate to full opacity and original position
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <Card className="max-w-[360px] w-full h-full text-secondary overflow-hidden hover:border-primary group hover:-translate-y-3 transition ease-in">
        <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-inherit bg-secondary/5 backdrop-blur-sm transition ease-in">
          <Image
            src={data.imagePath}
            height={48}
            width={48}
            priority
            className="size-12 bg-primary p-2 rounded-full aspect-square text-secondary"
            alt={data.title}
          />
          <CardTitle className="text-[1.45rem]">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 border-t group-hover:bg-secondary/5 transition ease-in h-full text-muted-foreground group-hover:text-muted text-justify">
          {data.description}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;
