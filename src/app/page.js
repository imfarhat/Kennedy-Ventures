import React from "react";

import ServicesCard from "@/components/ServicesCard";
import AboutUsCard from "@/components/AboutUsCard";
import TestimonialsCarousel from "@/components/home-page-ui/TestimonialsCarousel";
import PortfolioSection from "@/components/home-page-ui/PortfolioSection";
import HeroSection from "@/components/home-page-ui/HeroSection";
import FooterContactSection from "@/components/home-page-ui/FooterContactSection";

const aboutSectionData = [
  {
    name: "Scott Kennedy",
    about:
      "Venture-funded serial founder and fractional CEO with exits. Investor, advisor and speaker.",
    imagePath: "/scott-kennedy.jpg",
  },
  {
    name: "Person Two",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum.",
    imagePath: "/scott-kennedy.jpg",
  },
  {
    name: "Person Three",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsam harum quam eum.",
    imagePath: "/scott-kennedy.jpg",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kennedy Ventures",
  url: process.env.BASE_URL,
  logo: "/icon.png",
  description:
    "Kennedy Ventures supports promising startups with the tools, the tech, and the capital to build and grow to their peak potential. If you're ready to move your idea forward and level up your business, set an appointment using the link below. And unlike the bozos in this stock photo, be sure to bring the appropriate footwear.",
  sameAs: ["https://www.linkedin.com/company/kennedy-ventures"],
  // address: {
  //   "@type": "PostalAddress",
  //   streetAddress: "123 Startup St",
  //   addressLocality: "Your City",
  //   addressRegion: "Your State",
  //   postalCode: "12345",
  //   addressCountry: "US",
  // },
  contactPoint: {
    "@type": "ContactPoint",
    email: "example@email.com",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
  keywords: [
    "Startup Support",
    "Business Strategy Consulting",
    "Innovative Product Development",
    "Capital Investment for Startups",
    "Marketing Strategy",
    "Sales Optimization",
    "Founder-Friendly Financing",
    "Equity and Convertible Debt",
    "Revenue Share Loans",
    "Entrepreneurial Growth",
    "Startup Innovation",
    "Ecommerce Solutions",
    "Fintech Consulting",
    "Artificial Intelligence Startups",
    "Business Model Strategy",
    "Appointment Booking for Startups",
    "Strategic Partnerships",
    "Accelerate Startup Growth",
    "Investment Opportunities",
    "Tech Startup Consultancy",
  ],
  locationsServed: ["Amsterdam", "New York", "San Francisco"],
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-start">
        <HeroSection />
        <section
          id="services"
          className="flex flex-col w-full items-center justify-center bg-inherit py-12 relative"
        >
          {/* <div className="bg-center bg-cover flex flex-col items-center justify-start relative py-8 md:py-12 bg-accent w-full">
            <h2 className="text-white font-semibold text-3xl md:text-4xl z-[2] pb-[5.5rem]">
              Services
            </h2>
          </div> */}

          <h2 className="text-secondary font-semibold text-3xl md:text-4xl w-full text-center px-4 z-[2]">
            Services
          </h2>
          <div className="inset-0 absolute top-0 bg-black/0 z-[1]"></div>
          <div className="4 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-center justify-center z-[2]">
            {servicesSectionData.map((service, index) => (
              <ServicesCard data={service} key={index} />
            ))}
          </div>
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center bg-secondary/5 justify-center py-12 px-4"
        >
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
            About Us
          </h2>
          <article className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6 md:gap-x-8 gap-y-8 container">
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
          className="flex flex-col w-full items-center justify-center pb-8"
        >
          {/* <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center container px-4">
            Testimonials
          </h2> */}
          <TestimonialsCarousel />
        </section>
        <FooterContactSection />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
