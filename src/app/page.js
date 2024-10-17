import Image from "next/image";

import RunnderBgPng from "@/assets/runners.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section
        className="bg-cover w-full h-full flex flex-col items-center justify-start relative"
        style={{
          backgroundImage: `url(${RunnderBgPng.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjust as needed
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="mt-12 z-10">
          <strong className="uppercase italic text-white">
            *** Not Accepting New Clients ***
          </strong>
        </div>
        <div className="container flex flex-col items-center justify-center z-10">
          <h2 className="mt-24 text-8xl font-extrabold text-primary">
            Are you read to RUN
          </h2>
          <p className="text-white font-medium mt-24">
            Kennedy Ventures supports promising startups with the tools, the
            tech, and the capital to build and grow to their peak potential. If
            you&apos;re ready to move your idea forward and level up your business,
            set an appointment using the link below. And unlike the bozos in
            this stock photo, be sure to bring the appropriate footwear.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-4 md:gap-6 mt-24 w-full">
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
