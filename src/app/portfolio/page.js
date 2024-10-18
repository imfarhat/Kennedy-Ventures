import React from "react";
import KennedyVentureTalkImage from "@/assets/talk-kennedy-ventures2.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Logo from "@/assets/circular-logo.png";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    imageFileName: "1.png",
    title: "WeTime",
    description: "HR SaaS Tool for Teams",
    content:
      "We knew Kennedy Ventures would be a great fit from the initial consultation. In just a few months, we went from a simple idea to a complete 'investment ready' pitch.",
  },
  {
    imageFileName: "2.png",
    title: "Mutant",
    description: "Analytics for Developers",
    content:
      "Most consulting firms are all talk. But KV rolled up their sleeves and started working the very first week, asking the right questions and helping develop the core value proposition.",
  },
  {
    imageFileName: "3.png",
    title: "Yabbu",
    description: "SaaS Meeting Management",
    content:
      "We needed more than just an investment; we needed someone who could help develop a complete outbound sales funnel, then produce materials to engage prospects.",
  },
  {
    imageFileName: "4.png",
    title: "Boiler",
    description: "Collaborative Ideation Platform",
    content:
      "Kennedy Ventures offered us a remarkably affordable proposal, including access to their extensive partnership network. We highly recommend them.",
  },
  {
    imageFileName: "5.png",
    title: "Solidarity",
    description: "Organizing Tool for Unions",
    content:
      "In just three innovation sessions with Kennedy, we refined the mission, developed a financing strategy, and revamped the pitch deck. We'll keep using KV.",
  },
  {
    imageFileName: "6.png",
    title: "Aarini Consulting",
    description: "Leaders in Digital Architecture",
    content:
      "Kennedy led the innovation team to develop and expand Aarini into new markets, and helped us acquire new business partnerships. We are eager to work with them again.",
  },
  {
    imageFileName: "7.png",
    title: "Sonikize",
    description: "Digital Audio Enhancement",
    content:
      "They showed us a way to finance our growth without sacrificing our equity.",
  },
  {
    imageFileName: "8.png",
    title: "Mercearia",
    description: "Food Market and Catering Service",
    content:
      "We brought in KV to go over our business plan and pitch materials, and we're very happy with the results. We recommend them to any new organization eager to stand out in a crowded marketplace.",
  },
  {
    imageFileName: "9.png",
    title: "Wormhole",
    description: "Consumer Video Sharing App",
    content:
      "Wormhole did not get the user adoption or engagement we had hoped. Kennedy came up with a whole new strategic pivot that broke us out of our flatline.",
  },

  {
    imageFileName: "10.png",
    title: "GreenSwapp",
    description: "Climate Impact Analysis Platform",
    content:
      "Scott was a huge help with financing and corporate structure. His enthusiasm is infectious, and his understanding of the mobile app market is impressive.",
  },

  {
    imageFileName: "11.png",
    title: "Barqo",
    description: "Boat Rental Platform",
    content:
      "We worked with Kennedy through the Rockstart accelerator program, and the resulting focus and structure gave us a big strategic advantage over the other startups.",
  },
];

const Portfolio = () => {
  return (
    <>
      <main className="min-h-screen h-full flex flex-col items-center justify-start">
        <section
          style={{
            backgroundImage: `url(${KennedyVentureTalkImage.src})`,
          }}
          className="flex items-center justify-center px-4 bg-center bg-cover py-32 md:py-48 relative w-full"
        >
          <div className="inset-0 absolute bg-black/25"></div>
          <h1 className="text-primary font-semibold text-3xl md:text-4xl drop-shadow-md z-10">
            Portfolio
          </h1>
        </section>
        <section className="container px-4 flex flex-col items-center justify-center">
          <article className="mt-12">
            Portfolio From <strong>ecommerce</strong> and{" "}
            <strong>social networks</strong>, to <strong>fintech</strong> and{" "}
            {""}
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
          <article className="mt-6">
            We recognize that early stage startups don&apos;t always have access
            to the capital and resources they need to perform at their peak. So
            we select only a handful of clients at a time, and align our
            incentives - through creative and fair debt, equity, and revenue
            share agreements - to share in both the risks and the rewards. If
            you&apos;d like to turbo-boost your startup, schedule an appoinment
            today.
          </article>
        </section>
        <section className="mt-24 container px-4 flex flex-col items-center justify-center mb-24">
          <h2 className="text-secondary font-semibold text-2xl md:text-3xl z-10">
            Testimonials
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
            {testimonialsData.map((testimonial, index) => (
              <React.Fragment key={index}>
                {/* Check if this is the last testimonial */}
                {index === testimonialsData.length - 1 && (
                  <Card className="max-w-[350px] w-full h-full rounded-none relative">
                    <CardHeader className="flex flex-row items-center justify-start gap-2">
                      <Image
                        src={"/placeholder.svg"}
                        height={80}
                        width={80}
                        className="max-h-20 object-cover rounded-full"
                        alt={testimonial.title} // Use 'testimonial'
                      />
                      <div>
                        <CardTitle className="text-muted animate-pulse">
                          Your Startup
                        </CardTitle>{" "}
                        {/* Custom title for the extra card */}
                        <CardDescription>
                          Your startup can be here!
                        </CardDescription>{" "}
                        {/* Custom description */}
                      </div>
                    </CardHeader>
                    <CardContent className="">
                      <Image
                        src={"/placeholder.svg"}
                        height={100}
                        width={100}
                        className="object-cover w-full h-28"
                      />
                    </CardContent>
                    <CardFooter className="absolute bottom-0 right-0">
                      <Quote className="text-muted-foreground/25 size-8" />
                    </CardFooter>
                  </Card>
                )}

                {/* Render the default TestimonialCard for all testimonials */}
                <TestimonialCard data={testimonial} />
              </React.Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;
