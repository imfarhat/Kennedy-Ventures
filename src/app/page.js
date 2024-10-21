import React from "react";

import ServicesCard from "@/components/ServicesCard";
import AboutUsCard from "@/components/AboutUsCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PortfolioSection from "@/components/home-page-ui/PortfolioSection.js/PortfolioSection";
import HeroSection from "@/components/home-page-ui/PortfolioSection.js/HeroSection";

const aboutSectionData = [
  {
    name: "Person One",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum.",
    imagePath: "/icon.png",
  },
  {
    name: "Person Two",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum.",
    imagePath: "/icon.png",
  },
  {
    name: "Person Three",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum.",
    imagePath: "/icon.png",
  },
];

const servicesSectionData = [
  {
    title: "Strategy/Innovation",
    description:
      "Sessions start with a breakdown of your products and services, your market, and your value proposition. Then we dive into innovative product development and business model strategies. Finally, we chart an execution plan and get to work.",
    imagePath: "/svgs/bulb-outline.svg",
  },
  {
    title: "Marketing/Sales Reboot",
    description:
      "If the product has already established its value to the customers, but is not selling, we conduct surveys and develop and optimize pitches to get the marketing message just right. Then we build a sales procedure to boost revenue.",
    imagePath: "/svgs/megaphone-outline.svg",
  },
  {
    title: "Capital Investment",
    description:
      "When it comes time to step on the gas, you'll need financial resources to scale. Kennedy offers a variety of founder-friendly products, from equity and convertible debt, to simple revenue-share loans. It's all about crafting a 'win-win'",
    imagePath: "/svgs/cash-outline.svg",
  },
];


export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-start">
<HeroSection/>
        <section
          id="services"
          className="flex flex-col w-full items-center justify-center bg-primary py-12 relative"
        >
          {/* <div className="bg-center bg-cover flex flex-col items-center justify-start relative py-8 md:py-12 bg-accent w-full">
            <h2 className="text-white font-semibold text-3xl md:text-4xl z-10 pb-[5.5rem]">
              Services
            </h2>
          </div> */}

          <h2 className="text-white font-semibold text-3xl md:text-4xl w-full text-center px-4 drop-shadow-md z-10">
            Services
          </h2>
          <div className="inset-0 absolute top-0 bg-black/5"></div>
          <div className="4 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-center justify-center z-10">
            {servicesSectionData.map((service, index) => (
              <ServicesCard data={service} key={index} />
            ))}
          </div>
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center justify-center py-12 px-4 container"
        >
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
          <div id="portfolio"></div>
        </section>
        <PortfolioSection />
        <section
          id="testimonials"
          className="flex flex-col w-full items-center justify-center py-12"
        >
          {/* <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center container px-4">
            Testimonials
          </h2> */}
          <TestimonialsCarousel />
          <div className="container px-4">
            <h3 className="mt-8 text-secondary font-semibold text-lg sm:text-xl md:text-2xl w-full text-center">
              Your startup can be here. Contact us!
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}
