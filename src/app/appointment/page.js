import CalendlyCalendar from "@/components/appointment-page-ui/CalendlyCalendar";
import Link from "next/link";

export const metadata = {
  title: "Book Appointment", // This will be inserted in the %s template in layout
  description:
    "Schedule a consultation with Kennedy Ventures to discuss your startup's strategy, innovation, and capital investment needs. Book an appointment today to grow your business.",
  keywords: [
    "Book a Startup Consultation",
    "Schedule Business Strategy Session",
    "Startup Growth Appointment",
    "Business Development Meeting",
    "Book an Innovation Strategy Call",
    "Schedule Marketing Consultation",
    "Capital Investment Consultation",
    "Startup Support Appointment",
    "Founder Consultation",
    "Schedule a Meeting with Kennedy Ventures",
    "Business Strategy Appointment",
    "Business Advisory Appointment",
    "Startup Growth Strategy Session",
    "Book an Appointment for Startup Advice",
    "Tech Startup Consultation",
    "Founder's Advisory Session",
    "Schedule Startup Investment Call",
    "Business Model Strategy Appointment",
    "Startup Strategy and Innovation Appointment",
    "Entrepreneur Consulting Appointment",
  ],
  openGraph: {
    title: "Book Appointment | Kennedy Ventures",
    description:
      "Book an appointment with Kennedy Ventures to consult on business strategy, marketing, sales optimization, and startup growth. Get the tools and resources to take your startup to the next level.",
    images: ["/icon.png"],
  },
  metadataBase: new URL(process.env.BASE_URL),
};

const Appointment = () => {
  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-start">
      <section className="container px-4 mt-12 md:mt-20 mb-24 flex flex-col items-center justify-center">
        <h1 className="text-secondary font-semibold text-3xl md:text-4xl text-center">
          Book Appointment
        </h1>
        <Link
          href="https://calendly.com/immoiffo/30min"
          rel="noopener noreferrer"
          target="_blank"
          className="text-muted-foreground text-xs md:text-sm mb-8 md:mb-2"
        >
          Calender taking longer to load?{" "}
          <span className="font-medium text-secondary">Click here</span>
        </Link>
        <CalendlyCalendar />
      </section>
    </main>
  );
};

export default Appointment;
