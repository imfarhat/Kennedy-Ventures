"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Linkedin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
    amount: 0.33,
    once: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  const subject = encodeURIComponent(
    "Inquiry about Services from Kennedy Ventures"
  );
  const body = encodeURIComponent(
    `Hello Kennedy Ventures Team,\n\nI am interested in your services, especially in the areas of Strategy/Innovation, Marketing/Sales Reboot, and Capital Investment.\n\nCould you please provide me with more information or set up a time for us to discuss further?\n\nThank you!\n\nBest regards,\n[Your Name]`
  );

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="border-t flex flex-col items-center justify-center">
      <section className="flex items-center justify-center w-full">
        <div className="container px-4 py-6 bg-secondary/5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center justify-center w-full mx-4 mt-8 md:mt-10">
          <aside className="flex flex-col gap-4 items-start justify-start max-w-96">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold"
              prefetch={true}
            >
              <motion.div
                ref={ref}
                initial={{ x: 100 }}
                animate={{ x: isInView ? 0 : 100 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex items-center justify-start gap-2"
              >
                <Image
                  src="/icon.png"
                  height={64}
                  width={64}
                  alt="Kennedy Ventures Logo"
                  className="size-16"
                  priority
                />
                <div className="text-secondary flex flex-col items-start justify-start">
                  <span className="font-extrabold uppercase text-xl md:text-2xl">
                    Kennedy
                  </span>

                  <p className="md:pl-0.5 uppercase text-xs md:text-sm -mt-1 md:-mt-[3px] tracking-[0.225rem] md:tracking-[0.45rem] font-medium">
                    Ventures
                  </p>
                </div>
              </motion.div>
            </Link>
            <p className="text-muted-foreground !mt-0">
              Helping extraordinary founders build and grow great companies.
            </p>
          </aside>

          <aside className="flex flex-col items-start justify-start h-full max-w-96">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <aside className="mt-0.5 flex flex-col items-start justify-start h-full text-muted-foreground">
              <Link href="/" className="hover:underline" prefetch={true}>
                Home
              </Link>
              <Link
                href="/#portfolio"
                className="hover:underline"
                prefetch={true}
              >
                Portfolio
              </Link>
              <Link
                href="/appointment"
                className="hover:underline"
                prefetch={true}
              >
                Book Appointment
              </Link>
            </aside>
          </aside>

          <aside className="flex flex-col items-start justify-start h-full max-w-96">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <div className="mt-0.5 flex flex-col items-start justify-start h-full text-muted-foreground">
              <Link
                href={`mailto:example@email.com?subject=${subject}&body=${body}`}
                className="hover:underline mt-0.5"
                prefetch={true}
              >
                Email: example@email.com
              </Link>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              {/* <h4 className="font-medium mt-1">Social:</h4> */}
              <div>
                <Link
                  href="https://www.linkedin.com/company/kennedy-ventures"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-white aspect-square rounded-full hover:text-white hover:scale-105 active:scale-100 transition-transform duration-200 ease-in hover:bg-blue-700/85 text-blue-700/80 active:bg-opacity-85 border-2 border-transparent hover:border-white flex items-center justify-center"
                >
                  <Linkedin className="size-12 p-2.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="container px-4 py-4 flex flex-wrap items-center justify-center">
        <em className="text-xs md:text-sm font-medium whitespace-nowrap text-muted-foreground">
          &copy; {new Date().getFullYear()} Copyright Kennedy Ventures, B.V.
        </em>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          className="fixed bottom-4 right-4 hover:text-white active:text-white active:bg-opacity-75 size-10 p-2 aspect-square rounded-full shadow"
        >
          <ArrowUp />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
