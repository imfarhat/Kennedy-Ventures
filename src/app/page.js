import * as motion from "framer-motion/client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/circular-logo.png";
import RunnderBgImage from "@/assets/runners.jpg";
import RunnderCloudBgImage from "@/assets/runners-cloud.jpg";
import ScottKennedyImage from "@/assets/scottydot3.jpg";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TestimonialCard from "@/components/TestimonialCard";
import { Quote } from "lucide-react";

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
            <Card className="max-w-[360px] w-full h-full text-secondary overflow-hidden hover:border-primary group hover:-translate-y-3 transition ease-in">
              <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-inherit bg-secondary/5 backdrop-blur-sm transition ease-in">
                <Image
                  src={Logo}
                  height={40}
                  width={40}
                  priority
                  className="size-10 bg-primary"
                  alt="Kennedy Ventures Logo"
                />
                <CardTitle>Strategy/Innovation</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 border-t group-hover:bg-secondary/5  transition ease-in">
                Sessions start with a breakdown of your products and services,
                your market, and your value proposition. Then we dive into
                innovative product development and business model strategies.
                Finally, we chart an execution plan and get to work.
              </CardContent>
            </Card>

            <Card className="max-w-[360px] w-full h-full text-secondary overflow-hidden hover:border-primary group hover:-translate-y-3 transition ease-in">
              <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-inherit bg-secondary/5 backdrop-blur-sm transition ease-in">
                <Image
                  src={Logo}
                  height={40}
                  width={40}
                  priority
                  className="size-10 bg-primary"
                  alt="Kennedy Ventures Logo"
                />
                <CardTitle>Marketing/Sales Reboot</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 border-t group-hover:bg-secondary/5  transition ease-in">
                If the product has already established is value to the
                customers, but is not selling, we conduct surveys and develop
                and optimize pitches to get the marketing message just right.
                Then we build a sales procedure to boost revenue.
              </CardContent>
            </Card>

            <Card className="max-w-[360px] w-full h-full text-secondary overflow-hidden hover:border-primary group hover:-translate-y-3 transition ease-in">
              <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-inherit bg-secondary/5 backdrop-blur-sm transition ease-in">
                <Image
                  src={Logo}
                  height={40}
                  width={40}
                  priority
                  className="size-10 bg-primary"
                  alt="Kennedy Ventures Logo"
                />
                <CardTitle>Capital Investment</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 border-t group-hover:bg-secondary/5  transition ease-in">
                When it comes time to step on the gas, you&apos;ll need
                financial resources to scale. Kennedy offers a variety of
                founder-friendly products, from equity and convertible debt, to
                simple revenue-share loans. It&apos;s all about crafting a
                &apos;win-win&apos;
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center py-12 px-4 container">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
            About Us
          </h2>
          <article className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6 md:gap-x-8 gap-y-8">
            <aside className="flex flex-col items-center justify-center">
              <Image
                src={Logo}
                height={208}
                width={208}
                priority
                className="size-52 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] aspect-square"
                alt="Scott Kennedy"
              />
              <span className="border-b-4 border-double border-secondary w-1/2 mt-4 md:mt-6"></span>
              <h3 className="mt-2 text-xl font-semibold text-center">
                Person 1
              </h3>
              <p className="mt-4 text-muted-foreground text-justify text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae enim odio labore? Nobis nesciunt, repellendus porro.
              </p>
            </aside>
            <aside className="flex flex-col items-center justify-center">
              <Image
                src={Logo}
                height={208}
                width={208}
                priority
                className="size-52 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] aspect-square"
                alt="Kennedy Ventures Logo"
              />
              <span className="border-b-4 border-double border-secondary w-1/2 mt-4 md:mt-6"></span>
              <h3 className="mt-2 text-xl font-semibold text-center">
                Person 2
              </h3>
              <p className="mt-4 text-muted-foreground text-justify text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae enim odio labore? Nobis nesciunt, repellendus porro.
              </p>
            </aside>
            <aside className="flex flex-col items-center justify-center">
              <Image
                src={Logo}
                height={208}
                width={208}
                priority
                className="size-52 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] aspect-square"
                alt="Kennedy Ventures Logo"
              />
              <span className="border-b-4 border-double border-secondary w-1/2 mt-4 md:mt-6"></span>
              <h3 className="mt-2 text-xl font-semibold text-center">
                Person 3
              </h3>
              <p className="mt-4 text-muted-foreground text-justify text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae enim odio labore? Nobis nesciunt, repellendus porro.
              </p>
            </aside>
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
        <section className="flex flex-col w-full items-center justify-center py-12 px-4 container">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
            Testimonials
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
            {testimonialsData.map((testimonial, index) => (
              <React.Fragment key={index}>
                {index === testimonialsData.length - 1 && (
                  <Card className="max-w-[350px] w-full h-full group relative overflow-hidden hover:-translate-y-3 transition ease-in">
                    <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-secondary/5 transition ease-in">
                      <Image
                        src={"/placeholder.svg"}
                        height={80}
                        width={80}
                        className="max-h-20 object-cover rounded-full"
                        alt={"Your Startup"}
                      />
                      <div>
                        <CardTitle className="text-muted animate-pulse">
                          Your Startup
                        </CardTitle>{" "}
                        <CardDescription>
                          Your startup can be here!
                        </CardDescription>{" "}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 border-t bg-secondary/5 group-hover:bg-inherit transition ease-in h-full">
                      <Image
                        src={"/placeholder.svg"}
                        height={100}
                        width={100}
                        className="object-cover w-full h-28"
                      />
                    </CardContent>
                    <CardFooter className="absolute bottom-0 right-0">
                      <Quote className="text-secondary/5 drop-shadow-md size-8" />
                    </CardFooter>
                  </Card>
                )}

                <TestimonialCard data={testimonial} />
              </React.Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
