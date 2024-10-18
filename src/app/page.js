import Image from "next/image";
import Logo from "@/assets/circular-logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RunnderBgImage from "@/assets/runners.jpg";
import RunnderCloudBgImage from "@/assets/runners-cloud.jpg";
import ScottKennedyImage from "@/assets/scottydot3.jpg";
import TalkKennedyVentureImage from "@/assets/talk-kennedy-ventures2.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-start justify-start">
        <section
          className="bg-cover bg-center flex flex-col items-center justify-start relative py-12 md:py-16 bg-secondary/75 w-full"
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
          <div className="container px-4 flex flex-col items-start justify-center z-10">
            <h2 className="mt-6 md:mt-8 text-5xl md:text-8xl font-extrabold text-primary max-w-[50rem]">
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
            <div className="grid grid-cols-2 items-center justify-start gap-4 md:gap-6 mt-12 md:mt-16 w-full max-w-96 md:max-w-[30rem]">
              <Button
                className="text-secondary font-semibold rounded-none py-6"
                asChild
              >
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button
                variant="secondary"
                className="text-white rounded-none py-6"
                asChild
              >
                <Link href="/portfolio">See Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full items-center justify-center">
          <div
            className="bg-center bg-cover flex flex-col items-center justify-start relative py-8 md:py-12 bg-secondary/75 w-full"
            style={{
              backgroundImage: `url(${RunnderCloudBgImage.src})`,
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <h2 className="text-white font-semibold text-3xl md:text-4xl z-10 pb-[5.5rem]">
              Services
            </h2>
          </div>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-start justify-center -mt-[5.5rem] z-10">
            <Card className="w-[360px] h-full bg-gray-500/75 rounded-none border-none">
              <CardHeader className="bg-gray-500/95 flex flex-row items-center justify-start gap-2 text-white">
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
              <CardContent className="pt-4 text-white">
                Sessions start with a breakdown of your products and services,
                your market, and your value proposition. Then we dive into
                innovative product development and business model strategies.
                Finally, we chart an execution plan and get to work.
              </CardContent>
            </Card>

            <Card className="w-[360px] h-full bg-gray-500/75 rounded-none border-none">
              <CardHeader className="bg-gray-500/95 flex flex-row items-center justify-start gap-2 text-white">
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
              <CardContent className="pt-4 text-white">
                If the product has already established is value to the
                customers, but is not selling, we conduct surveys and develop
                and optimize pitches to get the marketing message just right.
                Then we build a sales procedure to boost revenue.
              </CardContent>
            </Card>

            <Card className="w-[360px] h-full bg-gray-500/75 rounded-none border-none">
              <CardHeader className="bg-gray-500/95 flex flex-row items-center justify-start gap-2 text-white">
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
              <CardContent className="pt-4 text-white">
                When it comes time to step on the gas, you&apos;ll need
                financial resources to scale. Kennedy offers a variety of
                founder-friendly products, from equity and convertible debt, to
                simple revenue-share loans. It&apos;s all about crafting a
                &apos;win-win&apos;
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full mt-12 md:mt-16 flex flex-col items-center justify-center mb-20">
          <h2 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
            About Us
          </h2>
          <article className="mt-12 container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6 md:gap-x-8 gap-y-8">
            <aside className="flex flex-col items-center justify-center">
              <Image
                src={Logo}
                height={208}
                width={208}
                priority
                className="size-52 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] aspect-square"
                alt="Scott Kennedy"
              />
              <h3 className="mt-6 md:mt-8 text-xl font-semibold border-b-4 border-double border-secondary w-1/2 text-center">
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
              <h3 className="mt-6 md:mt-8 text-xl font-semibold border-b-4 border-double border-secondary w-1/2 text-center">
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
              <h3 className="mt-6 md:mt-8 text-xl font-semibold border-b-4 border-double border-secondary w-1/2 text-center">
                Person 3
              </h3>
              <p className="mt-4 text-muted-foreground text-justify text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                molestiae enim odio labore? Nobis nesciunt, repellendus porro.
              </p>
            </aside>
          </article>
        </section>

        <section
          className="bg-cover bg-center flex flex-col items-center justify-start relative pt-12 md:pt-16 pb-8 bg-secondary/75 w-full"
          style={{
            backgroundImage: `url(${TalkKennedyVentureImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="mt-24 md:mt-28 z-10 flex flex-col items-center justify-center">
            <Button
              variant="secondary"
              className="text-white rounded-full py-6 px-16 font-medium"
              asChild
            >
              <Link href="mailto:example@mail.om">Contact Us</Link>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-1.5 text-white/90 font-semibold uppercase text-xs md:text-sm">
              <span>Amsterdam</span> |<span>New York</span> |
              <span>San Francisco</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
