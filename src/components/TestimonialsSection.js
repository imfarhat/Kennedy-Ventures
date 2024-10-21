import React from "react";
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
import Image from "next/image";

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

const TestimonialsSection = () => {
  return (
    <>
      <section className="flex flex-col w-full items-center justify-center py-12 px-4 container">
        <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
          Testimonials
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
          {testimonialsData.map((testimonial, index) => (
            <React.Fragment key={index}>
              {index === testimonialsData.length - 1 && (
                <Card className="max-w-[350px] w-full h-full group relative overflow-hidden hover:-translate-y-3 transition ease-in">
                  <CardHeader className="p-4 flex flex-row items-center justify-start gap-2 bg-secondary/5 group-hover:bg-inherit transition ease-in">
                    <Image
                      src={"/placeholder.svg"}
                      height={80}
                      width={80}
                      className="mix-blend-multiply object-contain max-h-16 h-full rounded-md"
                      alt={"Your Startup"}
                    />

                    <div>
                      <CardTitle className="text-muted animate-pulse text-lg md:text-xl">
                        Your Startup
                      </CardTitle>{" "}
                      <CardDescription className="-mt-1">
                        Your startup can be here!
                      </CardDescription>{" "}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 border-t  group-hover:bg-secondary/5 transition ease-in h-full">
                    <Image
                      src={"/placeholder.svg"}
                      height={100}
                      width={100}
                      className="object-cover w-full h-28"
                    />
                  </CardContent>
                  <CardFooter className="p-0 m-0">
                    <Quote className="absolute bottom-1 right-1 text-muted-foreground/25 size-8" />
                  </CardFooter>
                </Card>
              )}

              <TestimonialCard data={testimonial} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
export default TestimonialsSection;
