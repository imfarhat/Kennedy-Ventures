"use client";
import TalkKennedyVentureImage from "@/assets/talk-kennedy-ventures2.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FooterContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    amount: 0.33,
    once: true,
  });
  const subject = encodeURIComponent(
    "Inquiry about Services from Kennedy Ventures"
  );
  const body = encodeURIComponent(
    `Hello Kennedy Ventures Team,\n\nI am interested in your services, especially in the areas of Strategy/Innovation, Marketing/Sales Reboot, and Capital Investment.\n\nCould you please provide me with more information or set up a time for us to discuss further?\n\nThank you!\n\nBest regards,\n[Your Name]`
  );

  return (
    <>
      <section
        className="bg-cover bg-center flex flex-col items-center justify-start relative pt-12 md:pt-16 pb-8 bg-secondary/75 w-full"
        style={{
          backgroundImage: `url(${TalkKennedyVentureImage.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <motion.div
          ref={ref}
          initial={{ y: -50 }}
          animate={{ y: isInView ? 0 : -50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-24 md:mt-28 z-[2] flex flex-col items-center justify-center container px-4"
        >
          <Button
            variant="secondary"
            className="text-white rounded-full py-6 px-16 font-medium"
            asChild
          >
            <Link
              href={`mailto:example@email.com?subject=${subject}&body=${body}`}
            >
              Contact Us
            </Link>
          </Button>
          <div className="mt-6 flex items-center justify-center gap-1.5 text-white/90 font-semibold uppercase text-xs md:text-sm">
            <span>Amsterdam</span> | <span>New York</span> |{" "}
            <span>San Francisco</span>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default FooterContactSection;
