import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Kennedy Ventures",
    template: `%s | Kennedy Ventures`,
  },
  description:
    "Kennedy Ventures supports promising startups with the tools, the tech, and the capital to build and grow to their peak potential. If you're ready to move your idea forward and level up your business, set an appointment using the link below. And unlike the bozos in this stock photo, be sure to bring the appropriate footwear.",

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
  metadataBase: new URL(process.env.BASE_URL),
  openGraph: {
    title: "Kennedy Ventures",
    description:
      "Kennedy Ventures supports promising startups with the tools, the tech, and the capital to build and grow to their peak potential. If you're ready to move your idea forward and level up your business, set an appointment using the link below. And unlike the bozos in this stock photo, be sure to bring the appropriate footwear.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        {/* <Loading /> */}
        <Footer />
      </body>
    </html>
  );
}
