"use client";
import React, { useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonialsData = [
  {
    imagePath: "/testimonials/1.png",
    title: "WeTime",
    description: "HR SaaS Tool for Teams",
    content:
      "We knew Kennedy Ventures would be a great fit from the initial consultation. In just a few months, we went from a simple idea to a complete 'investment ready' pitch.",
  },
  {
    imagePath: "/testimonials/2.png",
    title: "Mutant",
    description: "Analytics for Developers",
    content:
      "Most consulting firms are all talk. But KV rolled up their sleeves and started working the very first week, asking the right questions and helping develop the core value proposition.",
  },
  {
    imagePath: "/testimonials/3.png",
    title: "Yabbu",
    description: "SaaS Meeting Management",
    content:
      "We needed more than just an investment; we needed someone who could help develop a complete outbound sales funnel, then produce materials to engage prospects.",
  },
  {
    imagePath: "/testimonials/4.png",
    title: "Boiler",
    description: "Collaborative Ideation Platform",
    content:
      "Kennedy Ventures offered us a remarkably affordable proposal, including access to their extensive partnership network. We highly recommend them.",
  },
  {
    imagePath: "/testimonials/5.png",
    title: "Solidarity",
    description: "Organizing Tool for Unions",
    content:
      "In just three innovation sessions with Kennedy, we refined the mission, developed a financing strategy, and revamped the pitch deck. We'll keep using KV.",
  },
  {
    imagePath: "/testimonials/6.png",
    title: "Aarini Consulting",
    description: "Leaders in Digital Architecture",
    content:
      "Kennedy led the innovation team to develop and expand Aarini into new markets, and helped us acquire new business partnerships. We are eager to work with them again.",
  },
  {
    imagePath: "/testimonials/7.png",
    title: "Sonikize",
    description: "Digital Audio Enhancement",
    content:
      "They showed us a way to finance our growth without sacrificing our equity.",
  },
  {
    imagePath: "/testimonials/8.png",
    title: "Mercearia",
    description: "Food Market and Catering Service",
    content:
      "We brought in KV to go over our business plan and pitch materials, and we're very happy with the results. We recommend them to any new organization eager to stand out in a crowded marketplace.",
  },
  {
    imagePath: "/testimonials/9.png",
    title: "Wormhole",
    description: "Consumer Video Sharing App",
    content:
      "Wormhole did not get the user adoption or engagement we had hoped. Kennedy came up with a whole new strategic pivot that broke us out of our flatline.",
  },

  {
    imagePath: "/testimonials/10.png",
    title: "GreenSwapp",
    description: "Climate Impact Analysis Platform",
    content:
      "Scott was a huge help with financing and corporate structure. His enthusiasm is infectious, and his understanding of the mobile app market is impressive.",
  },

  {
    imagePath: "/testimonials/11.png",
    title: "Barqo",
    description: "Boat Rental Platform",
    content:
      "We worked with Kennedy through the Rockstart accelerator program, and the resulting focus and structure gave us a big strategic advantage over the other startups.",
  },
];

const TestimonialsCarousel = () => {
  const CTARef = useRef(null);
  const isCTAInView = useInView(CTARef, { once: true });
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="container px-4 flex items-center justify-center"
      >
        <CarouselContent className="mt-8 flex space-x-4">
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full max-w-[350px] cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard data={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:text-white active:text-white active:bg-secondary/75" />
        <CarouselNext className="hover:text-white active:text-white active:bg-secondary/75" />
      </Carousel>
      <motion.div
        ref={CTARef}
        animate={{
          y: isCTAInView ? 0 : 50,
          opacity: isCTAInView ? 1 : 0,
        }} // Animate to position and opacity
        transition={{ duration: 0.5 }} // Adjust the duration as needed
        className="container px-4"
      >
        <h3 className="mt-8 text-secondary font-semibold text-lg sm:text-xl md:text-2xl w-full text-center italic">
          Your startup can be here. Contact us!
        </h3>
      </motion.div>
    </>
  );
};
export default TestimonialsCarousel;
