import Image from "next/image";

import RunnderBgPng from "@/assets/runners.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section
        className="bg-cover flex flex-col items-center justify-start relative py-20 bg-secondary/50 w-full bg-center"
        style={{
          backgroundImage: `url(${RunnderBgPng.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="z-10">
          <strong className="uppercase italic text-white">
            *** Not Accepting New Clients ***
          </strong>
        </div>
        <div className="container px-4 flex flex-col items-start justify-center z-10">
          <h2 className="mt-20 text-8xl font-extrabold text-primary max-w-[50rem]">
            Are you ready to RUN
          </h2>
          <p className="text-white font-medium mt-20 max-w-[60rem]">
            Kennedy Ventures supports promising startups with the tools, the
            tech, and the capital to build and grow to their peak potential. If
            you&apos;re ready to move your idea forward and level up your
            business, set an appointment using the link below. And unlike the
            bozos in this stock photo, be sure to bring the appropriate
            footwear.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-4 md:gap-6 mt-20 w-full">
            <Button
              className="text-secondary font-semibold rounded-none px-10 py-6"
              asChild
            >
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button
              variant="secondary"
              className="text-white rounded-none px-10 py-6"
              asChild
            >
              <Link href="/portfolio">See Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
