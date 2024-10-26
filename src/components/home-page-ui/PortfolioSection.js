"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortfolioSection = () => {
  const headingRef = useRef(null);
  const articleLeftRef = useRef(null);
  const articleRightRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isArticleLeftInView = useInView(articleLeftRef, { once: true });
  const isArticleRightInView = useInView(articleRightRef, { once: true });

  return (
    <section className="flex flex-col w-full items-center justify-center pt-12 pb-6 container overflow-hidden px-4 selection:bg-white selection:text-secondary">
      <div className="flex flex-col items-center justify-center bg-secondary py-6 px-4 rounded-md overflow-hidden relative">
        <div className="inset-0 absolute top-0 bg-black/0 z-[1]"></div>
        <motion.h2
          ref={headingRef}
          initial={{ y: -50, opacity: 0 }} // Start from above with reduced opacity
          animate={{
            y: isHeadingInView ? 0 : -50,
            opacity: isHeadingInView ? 1 : 0,
          }} // Animate to position and opacity
          transition={{ duration: 0.5 }} // Adjust the duration as needed
          className="text-white font-semibold text-3xl md:text-4xl w-full text-center drop-shadow-md z-[2]"
        >
          Portfolio
        </motion.h2>
        <motion.article
          ref={articleLeftRef}
          initial={{ x: -50, opacity: 0 }} // Start from left with reduced opacity
          animate={{
            x: isArticleLeftInView ? 0 : -50,
            opacity: isArticleLeftInView ? 1 : 0,
          }} // Animate to position and opacity
          transition={{ duration: 0.5 }} // Adjust the duration as needed
          className="mt-4 text-justify text-white/95 z-[2] drop-shadow-sm"
        >
          From <strong>ecommerce</strong> and <strong>social networks</strong>,
          to <strong>fintech</strong> and{" "}
          <strong>artificial intelligence</strong>, Kennedy Ventures leverages
          our 15 years of experience and our network of clients and advisors to
          de-risk and accelerate innovation. We work fast, so our startup
          clients are constantly changing, but our values and mission stay the
          same:{" "}
          <em className="font-semibold">
            to maximize your impact and growth by optimizing your people, your
            product, and your processes
          </em>
          .
        </motion.article>
        <motion.article
          ref={articleRightRef}
          initial={{ x: 50, opacity: 0 }} // Start from right with reduced opacity
          animate={{
            x: isArticleRightInView ? 0 : 50,
            opacity: isArticleRightInView ? 1 : 0,
          }} // Animate to position and opacity
          transition={{ duration: 0.5 }} // Adjust the duration as needed
          className="mt-4 text-justify text-white/95 z-[2] drop-shadow-sm"
        >
          We recognize that early stage startups don&apos;t always have access
          to the capital and resources they need to perform at their peak. So we
          select only a handful of clients at a time, and align our incentives -
          through creative and fair debt, equity, and revenue share agreements -
          to share in both the risks and the rewards. If you&apos;d like to
          turbo-boost your startup, schedule an appointment today.
        </motion.article>
      </div>
    </section>
  );
};

export default PortfolioSection;
