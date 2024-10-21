import TalkKennedyVentureImage from "@/assets/talk-kennedy-ventures2.jpg";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const subject = encodeURIComponent(
    "Inquiry about Services from Kennedy Ventures"
  );
  const body = encodeURIComponent(
    `Hello Kennedy Ventures Team,\n\nI am interested in your services, especially in the areas of Strategy/Innovation, Marketing/Sales Reboot, and Capital Investment.\n\nCould you please provide me with more information or set up a time for us to discuss further?\n\nThank you!\n\nBest regards,\n[Your Name]`
  );

  return (
    <footer className="border-t flex flex-col items-center justify-center">
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
            <Link
              href={`mailto:example@email.com?subject=${subject}&body=${body}`}
            >
              Contact Us
            </Link>
          </Button>
          <div className="mt-6 flex items-center justify-center gap-1.5 text-white/90 font-semibold uppercase text-xs md:text-sm">
            <span>Amsterdam</span> |<span>New York</span> |
            <span>San Francisco</span>
          </div>
        </div>
      </section>

      <div className="container px-4 py-4 flex flex-wrap items-center justify-center gap-x-4 gp-y-2 md:justify-between">
        <em className="text-xs md:text-sm font-medium whitespace-nowrap">
          &copy; {new Date().getFullYear()} Copyright Kennedy Ventures, B.V.
        </em>

          <em className="text-xs md:text-sm font-medium whitespace-nowrap">
            Email:{" "}
            <Link
              href={`mailto:example@email.com?subject=${subject}&body=${body}`}
            >
              example@email.com
            </Link>
          </em>
      
      </div>
    </footer>
  );
};
export default Footer;
