import * as motion from "framer-motion/client";
import React from "react";
import Image from "next/image";
import RunnderBgImage from "@/assets/runners.jpg";
import ScottKennedyImage from "@/assets/scottydot3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard";
import AboutUsCard from "@/components/AboutUsCard";
import TestimonialsSection from "@/components/TestimonialsSection";

const aboutSectionData = [
  {
    name: "Person 1",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum, tempore animi temporibus earum.",
    imagePath: "/icon.png",
  },
  {
    name: "Person 2",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum, tempore animi temporibus earum.",
    imagePath: "/icon.png",
  },
  {
    name: "Person 3",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum, tempore animi temporibus earum.",
    imagePath: "/icon.png",
  },
];

const servicesSectionData = [
  {
    title: "Strategy/Innovation",
    description:
      "Sessions start with a breakdown of your products and services, your market, and your value proposition. Then we dive into innovative product development and business model strategies. Finally, we chart an execution plan and get to work.",
    imagePath: "/icon.png",
  },
  {
    title: "Marketing/Sales Reboot",
    description:
      "If the product has already established its value to the customers, but is not selling, we conduct surveys and develop and optimize pitches to get the marketing message just right. Then we build a sales procedure to boost revenue.",
    imagePath: "/icon.png",
  },
  {
    title: "Capital Investment",
    description:
      "When it comes time to step on the gas, you&apos;ll need financial resources to scale. Kennedy offers a variety of founder-friendly products, from equity and convertible debt, to simple revenue-share loans. It&apos;s all about crafting a &apos;win-win&apos;",
    imagePath: "/icon.png",
  },
];

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

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-start">
        <section
          className="bg-cover bg-center flex flex-col items-center justify-start relative py-12 md:py-16 bg-secondary/75 w-full px-4"
          style={{
            backgroundImage: `url(${RunnderBgImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="z-10">
            <strong className="uppercase italic text-white text-sm md:text-base">
              *** Not Accepting New Clients ***
            </strong>
          </div>
          <div className="container flex flex-col items-start justify-center z-10">
            <h2 className="mt-4 md:mt-6 text-5xl md:text-8xl font-extrabold text-primary max-w-[50rem]">
              Are you ready to RUN
            </h2>
            <p className="text-white font-medium mt-8 md:mt-16 max-w-[60rem] text-sm md:text-base">
              Kennedy Ventures supports promising startups with the tools, the
              tech, and the capital to build and grow to their peak potential.
              If you&apos;re ready to move your idea forward and level up your
              business, set an appointment using the link below. And unlike the
              bozos in this stock photo, be sure to bring the appropriate
              footwear.
            </p>
            <motion.ul
              variants={motionCTAContainer}
              initial="hidden"
              animate="visible"
              className="motionCTAContainer grid grid-cols-2 items-center justify-start gap-4 md:gap-6 mt-12 md:mt-16 w-full max-w-96 md:max-w-[30rem]"
            >
              <Button
                className="text-secondary font-semibold rounded-none py-6"
                asChild
              >
                <Link href="/appointment" prefetch={true}>
                  <motion.li variants={motionCTAItem} className="motionCTAItem">
                    Book Appointment
                  </motion.li>
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="text-white rounded-none py-6"
                asChild
              >
                <Link href="/#portfolio" scroll={false}>
                  <motion.li variants={motionCTAItem} className="motionCTAItem">
                    See Portfolio
                  </motion.li>
                </Link>
              </Button>
            </motion.ul>
          </div>
        </section>
        <section className="flex flex-col w-full items-center justify-center bg-primary py-12">
          {/* <div className="bg-center bg-cover flex flex-col items-center justify-start relative py-8 md:py-12 bg-accent w-full">
            <h2 className="text-white font-semibold text-3xl md:text-4xl z-10 pb-[5.5rem]">
              Services
            </h2>
          </div> */}

          <h2 className="text-white font-semibold text-3xl md:text-4xl w-full text-center px-4 drop-shadow-md">
            Services
          </h2>

          <div className="px-4 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-center justify-center">
            {servicesSectionData.map((service, index) => (
              <React.Fragment key={index}>
                <ServicesCard data={service} />
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center py-12 px-4 container">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
            About Us
          </h2>
          <article className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6 md:gap-x-8 gap-y-8">
            {aboutSectionData.map((about, index) => (
              <React.Fragment key={index}>
                <AboutUsCard data={about} />
              </React.Fragment>
            ))}
          </article>
        </section>
        <section className="flex flex-col w-full items-center justify-center bg-primary py-12 px-4">
          <h2 className="text-white font-semibold text-3xl md:text-4xl w-full text-center drop-shadow-md">
            Portfolio
          </h2>
          <article className="mt-6 container">
            From <strong>ecommerce</strong> and <strong>social networks</strong>
            , to <strong>fintech</strong> and {""}
            <strong>artificial intelligence</strong>, Kennedy Ventures leverages
            our 15 years of experience and our network of clients and advisors
            to de-risk and accelerate innovation. We work fast, so our startup
            clients are constantly changing, but our values and mission stay the
            same:{" "}
            <em className="font-semibold text-secondary">
              to maximize your impact and growth by optimizing your people, your
              product, and your processes
            </em>
            .
          </article>
          <article className="mt-6 container">
            We recognize that early stage startups don&apos;t always have access
            to the capital and resources they need to perform at their peak. So
            we select only a handful of clients at a time, and align our
            incentives - through creative and fair debt, equity, and revenue
            share agreements - to share in both the risks and the rewards. If
            you&apos;d like to turbo-boost your startup, schedule an appoinment
            today.
          </article>
        </section>
        <TestimonialsSection />
      </main>
    </>
  );
}
